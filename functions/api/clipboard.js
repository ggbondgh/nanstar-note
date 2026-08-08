import { authorize } from "./_auth.js";

const CLIPBOARD_TABLE_SQL = `
  CREATE TABLE IF NOT EXISTS note_transfer_texts (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL DEFAULT 'legacy',
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
  const auth = await authorize(env, request);
  if (auth instanceof Response) return auth;

  const db = await requireDatabase(env);
  if (db instanceof Response) return db;

  await ensureTable(db);
  const rows = await db
    .prepare("SELECT id, text, size_bytes, created_at FROM note_transfer_texts WHERE user_id = ? ORDER BY created_at ASC")
    .bind(auth.userId)
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
  const auth = await authorize(env, request);
  if (auth instanceof Response) return auth;

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
      `INSERT INTO note_transfer_texts (id, user_id, text, size_bytes, created_at)
       VALUES (?, ?, ?, ?, ?)`
    )
    .bind(message.id, auth.userId, message.text, message.sizeBytes, message.createdAt)
    .run();
  await trimMessages(db, auth.userId);

  return json({ ok: true, message });
}

export async function onRequestDelete({ env, request }) {
  const auth = await authorize(env, request);
  if (auth instanceof Response) return auth;

  const db = await requireDatabase(env);
  if (db instanceof Response) return db;

  await ensureTable(db);
  const url = new URL(request.url);
  if (url.searchParams.get("all") === "1") {
    await db.prepare("DELETE FROM note_transfer_texts WHERE user_id = ?").bind(auth.userId).run();
    return json({ ok: true });
  }

  const id = (url.searchParams.get("id") || "").trim();
  if (!id) return json({ error: "Missing message id" }, 400);

  await db.prepare("DELETE FROM note_transfer_texts WHERE id = ? AND user_id = ?").bind(id, auth.userId).run();
  return json({ ok: true });
}

async function requireDatabase(env) {
  const db = env.NANSTAR_NOTES_DB;
  if (!db) return json({ error: "Missing D1 binding NANSTAR_NOTES_DB" }, 500);
  return db;
}

async function ensureTable(db) {
  await db.prepare(CLIPBOARD_TABLE_SQL).run();
  await addColumnIfMissing(db, "note_transfer_texts", "user_id TEXT NOT NULL DEFAULT 'legacy'");
}

async function trimMessages(db, userId) {
  await db
    .prepare(
      `DELETE FROM note_transfer_texts
       WHERE user_id = ? AND id NOT IN (
         SELECT id FROM note_transfer_texts
         WHERE user_id = ?
         ORDER BY created_at DESC
         LIMIT ?
       )`
    )
    .bind(userId, userId, MAX_MESSAGES)
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
    "access-control-allow-headers": "content-type, authorization"
  };
}
