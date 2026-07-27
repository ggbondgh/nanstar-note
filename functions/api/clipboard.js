const CLIPBOARD_TABLE_SQL = `
  CREATE TABLE IF NOT EXISTS note_transfer_texts (
    id TEXT PRIMARY KEY,
    text TEXT NOT NULL,
    size_bytes INTEGER NOT NULL,
    created_at INTEGER NOT NULL
  )
`;

const MAX_MESSAGES = 100;
const MAX_TEXT_BYTES = 20 * 1024;

export async function onRequestOptions() {
  return new Response(null, { headers: corsHeaders() });
}

export async function onRequestGet({ env, request }) {
  const auth = authorize(env, request);
  if (auth) return auth;

  const db = await requireDatabase(env);
  if (db instanceof Response) return db;

  await ensureTable(db);
  const rows = await db
    .prepare("SELECT id, text, size_bytes, created_at FROM note_transfer_texts ORDER BY created_at ASC")
    .all();

  return json({
    messages: (rows?.results || []).map(mapMessageRow),
    limits: {
      maxMessages: MAX_MESSAGES,
      maxTextBytes: MAX_TEXT_BYTES
    }
  });
}

export async function onRequestPost({ env, request }) {
  const auth = authorize(env, request);
  if (auth) return auth;

  const db = await requireDatabase(env);
  if (db instanceof Response) return db;

  let payload;
  try {
    payload = await request.json();
  } catch {
    return json({ error: "Invalid payload" }, 400);
  }

  const text = String(payload?.text || "").replace(/\r\n/g, "\n");
  if (!text.trim()) return json({ error: "Missing text" }, 400);

  const sizeBytes = byteLength(text);
  if (sizeBytes > MAX_TEXT_BYTES) {
    return json({ error: "Text is too large", maxTextBytes: MAX_TEXT_BYTES }, 413);
  }

  await ensureTable(db);
  const message = {
    id: crypto.randomUUID(),
    text,
    sizeBytes,
    createdAt: Date.now()
  };

  await db
    .prepare(
      `INSERT INTO note_transfer_texts (id, text, size_bytes, created_at)
       VALUES (?, ?, ?, ?)`
    )
    .bind(message.id, message.text, message.sizeBytes, message.createdAt)
    .run();
  await trimMessages(db);

  return json({ ok: true, message });
}

export async function onRequestDelete({ env, request }) {
  const auth = authorize(env, request);
  if (auth) return auth;

  const db = await requireDatabase(env);
  if (db instanceof Response) return db;

  await ensureTable(db);
  const url = new URL(request.url);
  if (url.searchParams.get("all") === "1") {
    await db.prepare("DELETE FROM note_transfer_texts").run();
    return json({ ok: true });
  }

  const id = (url.searchParams.get("id") || "").trim();
  if (!id) return json({ error: "Missing message id" }, 400);

  await db.prepare("DELETE FROM note_transfer_texts WHERE id = ?").bind(id).run();
  return json({ ok: true });
}

async function requireDatabase(env) {
  const db = env.NANSTAR_NOTES_DB;
  if (!db) return json({ error: "Missing D1 binding NANSTAR_NOTES_DB" }, 500);
  return db;
}

async function ensureTable(db) {
  await db.prepare(CLIPBOARD_TABLE_SQL).run();
}

async function trimMessages(db) {
  await db
    .prepare(
      `DELETE FROM note_transfer_texts
       WHERE id NOT IN (
         SELECT id FROM note_transfer_texts
         ORDER BY created_at DESC
         LIMIT ?
       )`
    )
    .bind(MAX_MESSAGES)
    .run();
}

function mapMessageRow(row) {
  const text = String(row.text || "");
  return {
    id: String(row.id),
    text,
    sizeBytes: Number(row.size_bytes) || byteLength(text),
    createdAt: Number(row.created_at) || 0
  };
}

function byteLength(value) {
  return new TextEncoder().encode(String(value || "")).length;
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
    "access-control-allow-headers": "content-type, authorization"
  };
}
