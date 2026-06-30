const DATA_KEY = "nanstar-note/default";

export async function onRequestOptions() {
  return new Response(null, { headers: corsHeaders() });
}

export async function onRequestGet({ env, request }) {
  const auth = authorize(env, request);
  if (auth) return auth;

  if (!env.NANSTAR_NOTES) {
    return json({ error: "Missing KV binding NANSTAR_NOTES" }, 500);
  }

  const raw = await env.NANSTAR_NOTES.get(DATA_KEY);
  return json(raw ? JSON.parse(raw) : { notes: [], updatedAt: 0 });
}

export async function onRequestPut({ env, request }) {
  const auth = authorize(env, request);
  if (auth) return auth;

  if (!env.NANSTAR_NOTES) {
    return json({ error: "Missing KV binding NANSTAR_NOTES" }, 500);
  }

  const payload = await request.json();
  if (!Array.isArray(payload.notes)) {
    return json({ error: "Invalid payload" }, 400);
  }

  const body = {
    notes: payload.notes,
    updatedAt: Date.now()
  };

  await env.NANSTAR_NOTES.put(DATA_KEY, JSON.stringify(body));
  return json({ ok: true, updatedAt: body.updatedAt });
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
