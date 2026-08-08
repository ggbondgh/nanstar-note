const AUTH_USERS_SQL = `
  CREATE TABLE IF NOT EXISTS nanstar_users (
    id TEXT PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    nickname TEXT NOT NULL,
    password_hash TEXT NOT NULL,
    password_salt TEXT NOT NULL,
    created_at INTEGER NOT NULL,
    updated_at INTEGER NOT NULL
  )
`;

const AUTH_SESSIONS_SQL = `
  CREATE TABLE IF NOT EXISTS nanstar_sessions (
    token_hash TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    created_at INTEGER NOT NULL,
    expires_at INTEGER NOT NULL
  )
`;

const SESSION_TTL_MS = 1000 * 60 * 60 * 24 * 60;
const PASSWORD_ITERATIONS = 150000;
const FALLBACK_PASSWORD_ITERATIONS = 12000;

export async function ensureAuthTables(db) {
  await db.prepare(AUTH_USERS_SQL).run();
  await db.prepare(AUTH_SESSIONS_SQL).run();
  await addColumnIfMissing(db, "nanstar_users", "nickname TEXT NOT NULL DEFAULT 'Nanstar'");
  await addColumnIfMissing(db, "nanstar_users", "password_hash TEXT NOT NULL DEFAULT ''");
  await addColumnIfMissing(db, "nanstar_users", "password_salt TEXT NOT NULL DEFAULT ''");
  await addColumnIfMissing(db, "nanstar_users", "created_at INTEGER NOT NULL DEFAULT 0");
  await addColumnIfMissing(db, "nanstar_users", "updated_at INTEGER NOT NULL DEFAULT 0");
  await addColumnIfMissing(db, "nanstar_sessions", "user_id TEXT NOT NULL DEFAULT ''");
  await addColumnIfMissing(db, "nanstar_sessions", "created_at INTEGER NOT NULL DEFAULT 0");
  await addColumnIfMissing(db, "nanstar_sessions", "expires_at INTEGER NOT NULL DEFAULT 0");
}

export async function authorize(env, request) {
  const token = bearerToken(request);
  if (!token) return json({ error: "Unauthorized" }, 401);

  if (env.NOTE_SYNC_TOKEN && token === env.NOTE_SYNC_TOKEN) {
    return {
      userId: "legacy",
      legacy: true,
      user: {
        id: "legacy",
        email: "legacy-token",
        nickname: "旧 Token"
      }
    };
  }

  const db = env.NANSTAR_NOTES_DB;
  if (!db) return json({ error: "Missing D1 binding NANSTAR_NOTES_DB" }, 500);
  await ensureAuthTables(db);

  const tokenHash = await sha256Hex(token);
  const row = await db
    .prepare(
      `SELECT s.user_id, s.expires_at, u.email, u.nickname
       FROM nanstar_sessions s
       JOIN nanstar_users u ON u.id = s.user_id
       WHERE s.token_hash = ?`
    )
    .bind(tokenHash)
    .first();

  if (!row || Number(row.expires_at) <= Date.now()) {
    if (row) await db.prepare("DELETE FROM nanstar_sessions WHERE token_hash = ?").bind(tokenHash).run();
    return json({ error: "Unauthorized" }, 401);
  }

  return {
    userId: String(row.user_id),
    legacy: false,
    user: {
      id: String(row.user_id),
      email: String(row.email || ""),
      nickname: String(row.nickname || "")
    }
  };
}

export async function createSession(db, userId) {
  const token = `ns_${base64Url(randomBytes(32))}`;
  const now = Date.now();
  await db
    .prepare(
      `INSERT INTO nanstar_sessions (token_hash, user_id, created_at, expires_at)
       VALUES (?, ?, ?, ?)`
    )
    .bind(await sha256Hex(token), userId, now, now + SESSION_TTL_MS)
    .run();
  return token;
}

export async function deleteSession(db, request) {
  const token = bearerToken(request);
  if (!token) return;
  await db.prepare("DELETE FROM nanstar_sessions WHERE token_hash = ?").bind(await sha256Hex(token)).run();
}

export function normalizeAccount(value) {
  return String(value || "").trim().toLowerCase();
}

export function accountIsValid(value) {
  return /^\S{3,160}$/.test(value);
}

export function safeNickname(value, fallback = "Nanstar") {
  const nickname = String(value || "").replace(/\s+/g, " ").trim();
  return (nickname || fallback).slice(0, 32);
}

export async function hashPassword(password, salt = base64Url(randomBytes(16))) {
  try {
    return { salt, hash: `pbkdf2$${await derivePbkdf2Hash(password, salt)}` };
  } catch {
    return { salt, hash: `sha256x$${await deriveFallbackHash(password, salt)}` };
  }
}

export async function verifyPassword(password, salt, expectedHash) {
  const expected = String(expectedHash || "");
  if (expected.startsWith("sha256x$")) {
    return timingSafeEqual(`sha256x$${await deriveFallbackHash(password, salt)}`, expected);
  }
  try {
    const hash = await derivePbkdf2Hash(password, salt);
    return timingSafeEqual(`pbkdf2$${hash}`, expected) || timingSafeEqual(hash, expected);
  } catch {
    const hash = await deriveFallbackHash(password, salt);
    return timingSafeEqual(`sha256x$${hash}`, expected) || timingSafeEqual(hash, expected);
  }
}

export function randomId() {
  if (typeof crypto.randomUUID === "function") return crypto.randomUUID();
  return `id_${base64Url(randomBytes(16))}`;
}

async function derivePbkdf2Hash(password, salt) {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(String(password || "")),
    "PBKDF2",
    false,
    ["deriveBits"]
  );
  const bits = await crypto.subtle.deriveBits(
    {
      name: "PBKDF2",
      hash: "SHA-256",
      salt: base64UrlToBytes(salt),
      iterations: PASSWORD_ITERATIONS
    },
    key,
    256
  );
  return base64Url(new Uint8Array(bits));
}

async function deriveFallbackHash(password, salt) {
  let bytes = new TextEncoder().encode(`${salt}:${String(password || "")}`);
  for (let index = 0; index < FALLBACK_PASSWORD_ITERATIONS; index += 1) {
    bytes = new Uint8Array(await crypto.subtle.digest("SHA-256", bytes));
  }
  return base64Url(bytes);
}

export function publicUser(row) {
  return {
    id: String(row.id),
    email: String(row.email || ""),
    nickname: String(row.nickname || "")
  };
}

export function bearerToken(request) {
  const header = request.headers.get("authorization") || "";
  return header.replace(/^Bearer\s+/i, "").trim();
}

export function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
      ...corsHeaders()
    }
  });
}

export function corsHeaders() {
  return {
    "access-control-allow-origin": "*",
    "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
    "access-control-allow-headers": "content-type, authorization, x-file-name, x-file-size, x-note-id"
  };
}

async function sha256Hex(value) {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(String(value || "")));
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

function randomBytes(length) {
  const bytes = new Uint8Array(length);
  crypto.getRandomValues(bytes);
  return bytes;
}

function base64Url(bytes) {
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function base64UrlToBytes(value) {
  const padded = String(value || "").replace(/-/g, "+").replace(/_/g, "/").padEnd(Math.ceil(String(value || "").length / 4) * 4, "=");
  const binary = atob(padded);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) bytes[index] = binary.charCodeAt(index);
  return bytes;
}

function timingSafeEqual(left, right) {
  if (left.length !== right.length) return false;
  let result = 0;
  for (let index = 0; index < left.length; index += 1) {
    result |= left.charCodeAt(index) ^ right.charCodeAt(index);
  }
  return result === 0;
}

async function addColumnIfMissing(db, table, columnSql) {
  try {
    await db.prepare(`ALTER TABLE ${table} ADD COLUMN ${columnSql}`).run();
  } catch {}
}
