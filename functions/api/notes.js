const DATA_KEY = "nanstar-note/default";
const TABLE_SQL = `
  CREATE TABLE IF NOT EXISTS note_documents (
    key TEXT PRIMARY KEY,
    data TEXT NOT NULL,
    updated_at INTEGER NOT NULL
  )
`;

export async function onRequestOptions() {
  return new Response(null, { headers: corsHeaders() });
}

export async function onRequestGet({ env, request }) {
  const auth = authorize(env, request);
  if (auth) return auth;

  const db = env.NANSTAR_NOTES_DB;
  if (!db) {
    return json({ error: "Missing D1 binding NANSTAR_NOTES_DB" }, 500);
  }

  await ensureTable(db);
  const row = await db.prepare("SELECT data FROM note_documents WHERE key = ?").bind(DATA_KEY).first();
  return json(row?.data ? JSON.parse(row.data) : { notes: [], updatedAt: 0 });
}

export async function onRequestPut({ env, request }) {
  const auth = authorize(env, request);
  if (auth) return auth;

  const db = env.NANSTAR_NOTES_DB;
  if (!db) {
    return json({ error: "Missing D1 binding NANSTAR_NOTES_DB" }, 500);
  }

  const payload = await request.json();
  if (!Array.isArray(payload.notes)) {
    return json({ error: "Invalid payload" }, 400);
  }

  const body = {
    notes: payload.notes,
    updatedAt: Date.now()
  };

  await ensureTable(db);
  await db
    .prepare(
      `INSERT INTO note_documents (key, data, updated_at)
       VALUES (?, ?, ?)
       ON CONFLICT(key) DO UPDATE SET data = excluded.data, updated_at = excluded.updated_at`
    )
    .bind(DATA_KEY, JSON.stringify(body), body.updatedAt)
    .run();

  return json({ ok: true, updatedAt: body.updatedAt });
}

async function ensureTable(db) {
  await db.prepare(TABLE_SQL).run();
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
      ...corsHeaders()
    }
  });
}

function corsHeaders() {
  return {
    "access-control-allow-origin": "*",
    "access-control-allow-methods": "GET, PUT, OPTIONS",
    "access-control-allow-headers": "content-type, authorization"
  };
}
