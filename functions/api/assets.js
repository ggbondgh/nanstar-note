const IMAGE_TABLE_SQL = `
  CREATE TABLE IF NOT EXISTS note_doc_images (
    id TEXT PRIMARY KEY,
    note_id TEXT NOT NULL,
    name TEXT NOT NULL,
    r2_key TEXT NOT NULL,
    mime_type TEXT NOT NULL,
    size INTEGER NOT NULL,
    created_at INTEGER NOT NULL
  )
`;

const MAX_IMAGE_BYTES = 8 * 1024 * 1024;
const MAX_IMAGES_PER_NOTE = 20;
const MAX_TOTAL_BYTES = 250 * 1024 * 1024;
const IMAGE_TYPES = new Set([
  "image/png",
  "image/jpeg",
  "image/webp",
  "image/gif",
  "image/avif"
]);

export async function onRequestOptions() {
  return new Response(null, { headers: corsHeaders() });
}

export async function onRequestGet({ env, request }) {
  const setup = await requireStorage(env);
  if (setup instanceof Response) return setup;
  const { db, bucket } = setup;

  await ensureTable(db);
  const id = assetId(request);
  if (!id) return json({ error: "Missing image id" }, 400);

  const row = await db
    .prepare("SELECT name, r2_key, mime_type, size FROM note_doc_images WHERE id = ?")
    .bind(id)
    .first();
  if (!row) return json({ error: "Image not found" }, 404);

  const object = await bucket.get(row.r2_key);
  if (!object) return json({ error: "Image object not found" }, 404);

  return new Response(object.body, {
    headers: {
      "content-type": String(row.mime_type || "application/octet-stream"),
      "content-length": String(Number(row.size) || 0),
      "content-disposition": `inline; filename*=UTF-8''${encodeRFC5987ValueChars(row.name || "image")}`,
      "cache-control": "public, max-age=31536000, immutable",
      "x-content-type-options": "nosniff",
      ...corsHeaders()
    }
  });
}

export async function onRequestPost({ env, request }) {
  const auth = authorize(env, request);
  if (auth) return auth;

  const setup = await requireStorage(env);
  if (setup instanceof Response) return setup;
  const { db, bucket } = setup;

  await ensureTable(db);
  const noteId = String(request.headers.get("x-note-id") || "").trim().slice(0, 128);
  if (!noteId) return json({ error: "Missing note id" }, 400);

  const file = await readUploadedImage(request);
  if (!file?.name || !file.size) return json({ error: "Missing image" }, 400);
  if (!IMAGE_TYPES.has(file.type)) return json({ error: "Unsupported image type" }, 415);
  if (file.size > MAX_IMAGE_BYTES) {
    return json({ error: "Image is too large", maxImageBytes: MAX_IMAGE_BYTES }, 413);
  }

  const usage = await currentUsage(db, noteId);
  if (usage.noteCount >= MAX_IMAGES_PER_NOTE) {
    return json({ error: "Too many note images", maxImagesPerNote: MAX_IMAGES_PER_NOTE }, 400);
  }
  if (usage.totalBytes + file.size > MAX_TOTAL_BYTES) {
    return json({ error: "Total image size exceeded", maxTotalBytes: MAX_TOTAL_BYTES }, 400);
  }

  const id = crypto.randomUUID();
  const key = `doc-images/${noteId}/${id}/${file.name}`;
  const now = Date.now();

  await bucket.put(key, file.blob.stream(), {
    httpMetadata: { contentType: file.type },
    customMetadata: { id, noteId, originalName: file.name }
  });

  await db
    .prepare(
      `INSERT INTO note_doc_images (id, note_id, name, r2_key, mime_type, size, created_at)
       VALUES (?, ?, ?, ?, ?, ?, ?)`
    )
    .bind(id, noteId, file.name, key, file.type, file.size, now)
    .run();

  const url = new URL(request.url);
  const src = `${url.origin}${url.pathname}?id=${encodeURIComponent(id)}`;
  return json({
    ok: true,
    asset: {
      id,
      noteId,
      name: file.name,
      mimeType: file.type,
      size: file.size,
      src,
      createdAt: now
    },
    limits: {
      maxImageBytes: MAX_IMAGE_BYTES,
      maxImagesPerNote: MAX_IMAGES_PER_NOTE,
      maxTotalBytes: MAX_TOTAL_BYTES
    }
  });
}

export async function onRequestDelete({ env, request }) {
  const auth = authorize(env, request);
  if (auth) return auth;

  const setup = await requireStorage(env);
  if (setup instanceof Response) return setup;
  const { db, bucket } = setup;

  await ensureTable(db);
  const id = assetId(request);
  if (!id) return json({ error: "Missing image id" }, 400);

  const row = await db
    .prepare("SELECT r2_key FROM note_doc_images WHERE id = ?")
    .bind(id)
    .first();
  if (!row) return json({ error: "Image not found" }, 404);

  await bucket.delete(row.r2_key);
  await db.prepare("DELETE FROM note_doc_images WHERE id = ?").bind(id).run();
  return json({ ok: true });
}

async function requireStorage(env) {
  const db = env.NANSTAR_NOTES_DB;
  const bucket = env.NANSTAR_NOTE_FILES;
  if (!db) return json({ error: "Missing D1 binding NANSTAR_NOTES_DB" }, 500);
  if (!bucket) return json({ error: "Missing R2 binding NANSTAR_NOTE_FILES" }, 500);
  return { db, bucket };
}

async function ensureTable(db) {
  await db.prepare(IMAGE_TABLE_SQL).run();
}

async function currentUsage(db, noteId) {
  const note = await db
    .prepare("SELECT COUNT(*) AS count FROM note_doc_images WHERE note_id = ?")
    .bind(noteId)
    .first();
  const total = await db
    .prepare("SELECT COALESCE(SUM(size), 0) AS total_bytes FROM note_doc_images")
    .first();
  return {
    noteCount: Number(note?.count) || 0,
    totalBytes: Number(total?.total_bytes) || 0
  };
}

async function readUploadedImage(request) {
  const headerName = request.headers.get("x-file-name");
  if (!headerName) return null;

  let decodedName = headerName;
  try {
    decodedName = decodeURIComponent(headerName);
  } catch {}
  const blob = await request.blob();
  return {
    blob,
    name: safeFileName(decodedName),
    type: String(request.headers.get("content-type") || blob.type || "").toLowerCase(),
    size: Number(request.headers.get("x-file-size")) || blob.size || 0
  };
}

function assetId(request) {
  const id = String(new URL(request.url).searchParams.get("id") || "").trim();
  return /^[0-9a-f-]{36}$/i.test(id) ? id : "";
}

function safeFileName(name) {
  const cleaned = String(name || "image")
    .replace(/[\\/:*?"<>|\u0000-\u001f]/g, "_")
    .replace(/\s+/g, " ")
    .trim();
  return cleaned.slice(0, 160) || "image";
}

function encodeRFC5987ValueChars(value) {
  return encodeURIComponent(value)
    .replace(/'/g, "%27")
    .replace(/\(/g, "%28")
    .replace(/\)/g, "%29")
    .replace(/\*/g, "%2A");
}

function authorize(env, request) {
  const expected = env.NOTE_SYNC_TOKEN;
  if (!expected) return json({ error: "Missing NOTE_SYNC_TOKEN" }, 500);

  const header = request.headers.get("authorization") || "";
  const token = header.replace(/^Bearer\s+/i, "").trim();
  if (token !== expected) return json({ error: "Unauthorized" }, 401);
  return null;
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
      ...corsHeaders()
    }
  });
}

function corsHeaders() {
  return {
    "access-control-allow-origin": "*",
    "access-control-allow-methods": "GET, POST, DELETE, OPTIONS",
    "access-control-allow-headers": "content-type, authorization, x-file-name, x-file-size, x-note-id"
  };
}
