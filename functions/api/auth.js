import {
  accountIsValid,
  authorize,
  createSession,
  deleteSession,
  ensureAuthTables,
  hashPassword,
  json,
  normalizeAccount,
  publicUser,
  safeNickname,
  verifyPassword,
  corsHeaders
} from "./_auth.js";

export async function onRequestOptions() {
  return new Response(null, { headers: corsHeaders() });
}

export async function onRequestGet({ env, request }) {
  const auth = await authorize(env, request);
  if (auth instanceof Response) return auth;
  return json({ user: auth.user, legacy: Boolean(auth.legacy) });
}

export async function onRequestPost({ env, request }) {
  const db = env.NANSTAR_NOTES_DB;
  if (!db) return json({ error: "Missing D1 binding NANSTAR_NOTES_DB" }, 500);
  await ensureAuthTables(db);

  let payload;
  try {
    payload = await request.json();
  } catch {
    return json({ error: "Invalid payload" }, 400);
  }

  const action = String(payload?.action || "").trim();
  const account = normalizeAccount(payload?.email || payload?.account);
  const password = String(payload?.password || "");
  if (!accountIsValid(account)) return json({ error: "Invalid account" }, 400);
  if (password.length < 6) return json({ error: "Password is too short" }, 400);

  if (action === "register") {
    const existing = await db.prepare("SELECT id FROM nanstar_users WHERE email = ?").bind(account).first();
    if (existing) return json({ error: "Account already exists" }, 409);

    const now = Date.now();
    const id = crypto.randomUUID();
    const nickname = safeNickname(payload?.nickname, account.split("@")[0] || "Nanstar");
    const passwordState = await hashPassword(password);
    await db
      .prepare(
        `INSERT INTO nanstar_users (id, email, nickname, password_hash, password_salt, created_at, updated_at)
         VALUES (?, ?, ?, ?, ?, ?, ?)`
      )
      .bind(id, account, nickname, passwordState.hash, passwordState.salt, now, now)
      .run();
    const token = await createSession(db, id);
    return json({ token, user: { id, email: account, nickname } });
  }

  if (action === "login") {
    const user = await db
      .prepare("SELECT id, email, nickname, password_hash, password_salt FROM nanstar_users WHERE email = ?")
      .bind(account)
      .first();
    if (!user || !(await verifyPassword(password, user.password_salt, user.password_hash))) {
      return json({ error: "Invalid credentials" }, 401);
    }
    const token = await createSession(db, String(user.id));
    return json({ token, user: publicUser(user) });
  }

  return json({ error: "Unknown action" }, 400);
}

export async function onRequestPut({ env, request }) {
  const auth = await authorize(env, request);
  if (auth instanceof Response) return auth;
  if (auth.legacy) return json({ error: "Legacy token profile cannot be edited" }, 400);

  const db = env.NANSTAR_NOTES_DB;
  if (!db) return json({ error: "Missing D1 binding NANSTAR_NOTES_DB" }, 500);
  let payload;
  try {
    payload = await request.json();
  } catch {
    return json({ error: "Invalid payload" }, 400);
  }
  const nickname = safeNickname(payload?.nickname, auth.user.email?.split("@")[0] || "Nanstar");
  await db
    .prepare("UPDATE nanstar_users SET nickname = ?, updated_at = ? WHERE id = ?")
    .bind(nickname, Date.now(), auth.userId)
    .run();
  return json({ user: { ...auth.user, nickname } });
}

export async function onRequestDelete({ env, request }) {
  const db = env.NANSTAR_NOTES_DB;
  if (db) await deleteSession(db, request);
  return json({ ok: true });
}
