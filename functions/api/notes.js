const DATA_KEY = "nanstar-note/default";
const FOLDER_REGISTRY_KEY = "nanstar-note/folders";
const TABLE_SQL = `
  CREATE TABLE IF NOT EXISTS note_documents (
    key TEXT PRIMARY KEY,
    data TEXT NOT NULL,
    updated_at INTEGER NOT NULL
  )
`;
const CRDT_TABLE_SQL = `
  CREATE TABLE IF NOT EXISTS note_crdt_updates (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    update_data TEXT NOT NULL,
    created_at INTEGER NOT NULL
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
  const url = new URL(request.url);
  if (url.searchParams.get("crdt") === "1") {
    return getCrdtUpdates(db, Number(url.searchParams.get("since")) || 0);
  }

  const rows = await db
    .prepare("SELECT key, data FROM note_documents WHERE key IN (?, ?)")
    .bind(DATA_KEY, FOLDER_REGISTRY_KEY)
    .all();
  const documents = rows?.results || [];
  const mainDoc = documents.find((row) => row.key === DATA_KEY);
  const folderDoc = documents.find((row) => row.key === FOLDER_REGISTRY_KEY);
  const payload = mainDoc?.data ? JSON.parse(mainDoc.data) : { notes: [], updatedAt: 0 };
  if (folderDoc?.data) {
    try {
      const parsedFolders = JSON.parse(folderDoc.data);
      payload.folders = Array.isArray(parsedFolders) ? parsedFolders : Array.isArray(parsedFolders?.folders) ? parsedFolders.folders : [];
    } catch {}
  }
  return json(payload);
}

export async function onRequestPost({ env, request }) {
  const auth = authorize(env, request);
  if (auth) return auth;

  const db = env.NANSTAR_NOTES_DB;
  if (!db) {
    return json({ error: "Missing D1 binding NANSTAR_NOTES_DB" }, 500);
  }

  const payload = await request.json();
  const updates = Array.isArray(payload?.updates) ? payload.updates : [];
  if (!updates.length || updates.some((item) => typeof item !== "string" || !item)) {
    return json({ error: "Invalid CRDT updates" }, 400);
  }

  await ensureTable(db);
  const now = Date.now();
  const statements = updates.map((update) => db
    .prepare("INSERT INTO note_crdt_updates (update_data, created_at) VALUES (?, ?)")
    .bind(update, now));
  await db.batch(statements);
  const latest = await latestCrdtId(db);
  return json({ ok: true, latestId: latest, updatedAt: now });
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
  if (payload.folders !== undefined && !Array.isArray(payload.folders)) {
    return json({ error: "Invalid folders payload" }, 400);
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

  if (Array.isArray(payload.folders)) {
    await db
      .prepare(
         `INSERT INTO note_documents (key, data, updated_at)
          VALUES (?, ?, ?)
          ON CONFLICT(key) DO UPDATE SET data = excluded.data, updated_at = excluded.updated_at`
      )
      .bind(FOLDER_REGISTRY_KEY, JSON.stringify(payload.folders), body.updatedAt)
      .run();
  }

  return json({ ok: true, updatedAt: body.updatedAt });
}

async function ensureTable(db) {
  await db.prepare(TABLE_SQL).run();
  await db.prepare(CRDT_TABLE_SQL).run();
}

async function getCrdtUpdates(db, sinceId) {
  const latest = await latestCrdtId(db);
  const rows = await db
    .prepare("SELECT id, update_data FROM note_crdt_updates WHERE id > ? ORDER BY id ASC LIMIT 500")
    .bind(Math.max(0, Number(sinceId) || 0))
    .all();
  const updates = (rows?.results || []).map((row) => ({ id: Number(row.id), update: row.update_data }));
  const legacy = await getLegacyPayload(db);
  return json({
    version: 2,
    latestId: latest,
    updates,
    legacy
  });
}

async function latestCrdtId(db) {
  const result = await db.prepare("SELECT COALESCE(MAX(id), 0) AS latest_id FROM note_crdt_updates").first();
  return Number(result?.latest_id) || 0;
}

async function getLegacyPayload(db) {
  const rows = await db
    .prepare("SELECT key, data FROM note_documents WHERE key IN (?, ?)")
    .bind(DATA_KEY, FOLDER_REGISTRY_KEY)
    .all();
  const documents = rows?.results || [];
  const mainDoc = documents.find((row) => row.key === DATA_KEY);
  const folderDoc = documents.find((row) => row.key === FOLDER_REGISTRY_KEY);
  const payload = mainDoc?.data ? JSON.parse(mainDoc.data) : { notes: [], updatedAt: 0 };
  if (folderDoc?.data) {
    try {
      const parsedFolders = JSON.parse(folderDoc.data);
      payload.folders = Array.isArray(parsedFolders) ? parsedFolders : Array.isArray(parsedFolders?.folders) ? parsedFolders.folders : [];
    } catch {}
  }
  return payload;
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
    "access-control-allow-methods": "GET, POST, PUT, OPTIONS",
    "access-control-allow-headers": "content-type, authorization"
  };
}
