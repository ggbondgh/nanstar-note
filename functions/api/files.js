import { authorize } from "./_auth.js";

const FILE_TABLE_SQL = `
  CREATE TABLE IF NOT EXISTS note_transfer_files (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL DEFAULT 'legacy',
    name TEXT NOT NULL,
    r2_key TEXT NOT NULL,
    mime_type TEXT NOT NULL,
    size INTEGER NOT NULL,
    created_at INTEGER NOT NULL
  )
`;

const MAX_FILE_COUNT = 8;
const MAX_FILE_BYTES = 35 * 1024 * 1024;
const MAX_TOTAL_BYTES = 512 * 1024 * 1024;

export async function onRequestOptions() {
  return new Response(null, { headers: corsHeaders() });
}

export async function onRequestGet({ env, request }) {
  const auth = await authorize(env, request);
  if (auth instanceof Response) return auth;

  const setup = await requireStorage(env);
  if (setup instanceof Response) return setup;
  const { db, bucket } = setup;

  await ensureTable(db);
  const url = new URL(request.url);
  const id = (url.searchParams.get("id") || "").trim();
  if (id) return downloadFile(db, bucket, auth.userId, id);

  const rows = await db
    .prepare("SELECT id, name, mime_type, size, created_at FROM note_transfer_files WHERE user_id = ? ORDER BY created_at DESC")
    .bind(auth.userId)
    .all();
  const files = (rows?.results || []).map(mapFileRow);
  return json({
    files,
    limits: {
      maxFiles: MAX_FILE_COUNT,
      maxFileBytes: MAX_FILE_BYTES,
      maxTotalBytes: MAX_TOTAL_BYTES
    }
  });
}

export async function onRequestPost({ env, request }) {
  const auth = await authorize(env, request);
  if (auth instanceof Response) return auth;

  const setup = await requireStorage(env);
  if (setup instanceof Response) return setup;
  const { db, bucket } = setup;

  await ensureTable(db);
  const file = await readUploadedFile(request);
  if (!file) {
    return json({ error: "Missing file" }, 400);
  }
  if (!file.name || !file.size) {
    return json({ error: "Invalid file" }, 400);
  }
  if (file.size > MAX_FILE_BYTES) {
    return json({ error: "File is too large", maxFileBytes: MAX_FILE_BYTES }, 413);
  }

  const id = crypto.randomUUID();
  const name = file.name;
  const key = `transfers/${auth.userId}/${id}/${name}`;
  const mimeType = file.type || "application/octet-stream";
  const now = Date.now();

  await bucket.put(key, file.blob.stream(), {
    httpMetadata: {
      contentType: mimeType,
      contentDisposition: `attachment; filename*=UTF-8''${encodeRFC5987ValueChars(name)}`
    },
    customMetadata: {
      id,
      originalName: name
    }
  });

  await db
    .prepare(
      `INSERT INTO note_transfer_files (id, user_id, name, r2_key, mime_type, size, created_at)
       VALUES (?, ?, ?, ?, ?, ?, ?)`
    )
    .bind(id, auth.userId, name, key, mimeType, file.size, now)
    .run();
  await trimFiles(db, bucket, auth.userId);

  return json({ ok: true, file: { id, name, mimeType, size: file.size, createdAt: now } });
}

export async function onRequestDelete({ env, request }) {
  const auth = await authorize(env, request);
  if (auth instanceof Response) return auth;

  const setup = await requireStorage(env);
  if (setup instanceof Response) return setup;
  const { db, bucket } = setup;

  await ensureTable(db);
  const url = new URL(request.url);
  if (url.searchParams.get("all") === "1") {
    await deleteAllFiles(db, bucket, auth.userId);
    return json({ ok: true });
  }

  const id = (url.searchParams.get("id") || "").trim();
  if (!id) return json({ error: "Missing file id" }, 400);

  const row = await db
    .prepare("SELECT r2_key FROM note_transfer_files WHERE id = ? AND user_id = ?")
    .bind(id, auth.userId)
    .first();
  if (!row) return json({ error: "File not found" }, 404);

  await bucket.delete(row.r2_key);
  await db.prepare("DELETE FROM note_transfer_files WHERE id = ? AND user_id = ?").bind(id, auth.userId).run();
  return json({ ok: true });
}

async function deleteAllFiles(db, bucket, userId) {
  const rows = await db.prepare("SELECT r2_key FROM note_transfer_files WHERE user_id = ?").bind(userId).all();
  for (const row of rows?.results || []) {
    if (row.r2_key) await bucket.delete(row.r2_key);
  }
  await db.prepare("DELETE FROM note_transfer_files WHERE user_id = ?").bind(userId).run();
}

async function requireStorage(env) {
  const db = env.NANSTAR_NOTES_DB;
  const bucket = env.NANSTAR_NOTE_FILES;
  if (!db) return json({ error: "Missing D1 binding NANSTAR_NOTES_DB" }, 500);
  if (!bucket) return json({ error: "Missing R2 binding NANSTAR_NOTE_FILES" }, 500);
  return { db, bucket };
}

async function ensureTable(db) {
  await db.prepare(FILE_TABLE_SQL).run();
  await addColumnIfMissing(db, "note_transfer_files", "user_id TEXT NOT NULL DEFAULT 'legacy'");
}

async function trimFiles(db, bucket, userId) {
  const rows = await db
    .prepare("SELECT id, r2_key, size FROM note_transfer_files WHERE user_id = ? ORDER BY created_at ASC, id ASC")
    .bind(userId)
    .all();
  const files = rows?.results || [];
  let totalBytes = files.reduce((sum, row) => sum + (Number(row.size) || 0), 0);
  let removeCount = Math.max(0, files.length - MAX_FILE_COUNT);
  let index = 0;

  while (index < files.length && (removeCount > 0 || totalBytes > MAX_TOTAL_BYTES)) {
    const row = files[index];
    index += 1;
    removeCount -= 1;
    totalBytes -= Number(row.size) || 0;
    if (row.r2_key) await bucket.delete(row.r2_key);
    await db.prepare("DELETE FROM note_transfer_files WHERE id = ? AND user_id = ?").bind(row.id, userId).run();
  }
}

async function readUploadedFile(request) {
  const headerName = request.headers.get("x-file-name");
  if (headerName) {
    let decodedName = headerName;
    try {
      decodedName = decodeURIComponent(headerName);
    } catch {}
    const blob = await request.blob();
    return {
      blob,
      name: safeFileName(decodedName),
      type: request.headers.get("content-type") || blob.type || "application/octet-stream",
      size: Number(request.headers.get("x-file-size")) || blob.size || 0
    };
  }

  const formData = await request.formData();
  let part = formData.get("file");

  if (!isUploadPart(part)) {
    for (const [, candidate] of formData.entries()) {
      if (isUploadPart(candidate)) {
        part = candidate;
        break;
      }
    }
  }

  if (!isUploadPart(part)) return null;

  const blob = part instanceof Blob
    ? part
    : new Blob([await part.arrayBuffer()], { type: part.type || "application/octet-stream" });
  return {
    blob,
    name: safeFileName(part.name || "file"),
    type: part.type || blob.type || "application/octet-stream",
    size: Number(part.size) || blob.size || 0
  };
}

function isUploadPart(value) {
  return Boolean(
    value
    && typeof value === "object"
    && (typeof value.stream === "function" || typeof value.arrayBuffer === "function")
    && typeof value.size === "number"
  );
}

async function downloadFile(db, bucket, userId, id) {
  const row = await db
    .prepare("SELECT id, name, r2_key, mime_type, size, created_at FROM note_transfer_files WHERE id = ? AND user_id = ?")
    .bind(id, userId)
    .first();
  if (!row) return json({ error: "File not found" }, 404);

  const object = await bucket.get(row.r2_key);
  if (!object) return json({ error: "File object not found" }, 404);
  const file = mapFileRow(row);
  return new Response(object.body, {
    headers: {
      "content-type": file.mimeType || "application/octet-stream",
      "content-length": String(file.size),
      "content-disposition": `attachment; filename*=UTF-8''${encodeRFC5987ValueChars(file.name)}`,
      "cache-control": "no-store",
      ...corsHeaders()
    }
  });
}

function mapFileRow(row) {
  return {
    id: String(row.id),
    name: String(row.name || "file"),
    mimeType: String(row.mime_type || "application/octet-stream"),
    size: Number(row.size) || 0,
    createdAt: Number(row.created_at) || 0
  };
}

function safeFileName(name) {
  const cleaned = String(name || "file")
    .replace(/[\\/:*?"<>|\u0000-\u001f]/g, "_")
    .replace(/\s+/g, " ")
    .trim();
  return cleaned.slice(0, 160) || "file";
}

function encodeRFC5987ValueChars(value) {
  return encodeURIComponent(value)
    .replace(/'/g, "%27")
    .replace(/\(/g, "%28")
    .replace(/\)/g, "%29")
    .replace(/\*/g, "%2A");
}

async function addColumnIfMissing(db, table, columnSql) {
  try {
    await db.prepare(`ALTER TABLE ${table} ADD COLUMN ${columnSql}`).run();
  } catch {}
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
    "access-control-allow-headers": "content-type, authorization, x-file-name, x-file-size"
  };
}
