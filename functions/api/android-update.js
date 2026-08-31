const RELEASE_API_URL = "https://api.github.com/repos/ggbondgh/nanstar-note/releases/latest";
const FALLBACK_APK_URL = "https://github.com/ggbondgh/nanstar-note/releases/latest/download/nanstar-note.apk";
const FALLBACK_UPDATE_URL = "https://github.com/ggbondgh/nanstar-note/releases/latest/download/update.json";
const TAGGED_UPDATE_URL = "https://github.com/ggbondgh/nanstar-note/releases/download/android-latest/update.json";

export async function onRequestOptions() {
  return new Response(null, { headers: corsHeaders() });
}

export async function onRequestGet({ request }) {
  logRequest("android-update:get", request);
  const manifest = await fetchUpdateManifest();
  if (manifest?.versionCode) {
    return json(manifest);
  }

  const response = await fetch(`${RELEASE_API_URL}?t=${Date.now()}`, {
    headers: {
      Accept: "application/vnd.github+json",
      "User-Agent": "nanstar-note-update-check"
    }
  });
  if (!response.ok) {
    return json({ error: `GitHub Release query failed: ${response.status}` }, response.status);
  }

  const release = await response.json();
  const releaseManifest = parseManifest(release.body);

  const apkAsset = Array.isArray(release.assets)
    ? release.assets.find((asset) => asset.name === "nanstar-note.apk")
    : null;

  return json({
    versionCode: Number(releaseManifest.versionCode || 0),
    versionName: releaseManifest.versionName || release.name || "",
    apkUrl: releaseManifest.apkUrl || apkAsset?.browser_download_url || FALLBACK_APK_URL,
    releaseUrl: releaseManifest.releaseUrl || release.html_url || "https://github.com/ggbondgh/nanstar-note/releases/latest"
  });
}

async function fetchUpdateManifest() {
  const urls = [TAGGED_UPDATE_URL, `${TAGGED_UPDATE_URL}?t=${Date.now()}`, FALLBACK_UPDATE_URL, `${FALLBACK_UPDATE_URL}?t=${Date.now()}`];
  const manifests = [];
  for (const url of urls) {
    try {
      const response = await fetch(url, {
        headers: {
          Accept: "application/json",
          "User-Agent": "nanstar-note-update-check"
        }
      });
      if (!response.ok) continue;
      const manifest = parseManifest(await response.text());
      if (manifest.versionCode || manifest.versionName || manifest.apkUrl || manifest.releaseUrl) {
        manifests.push(manifest);
      }
    } catch {}
  }
  return newestManifest(manifests);
}

function newestManifest(manifests = []) {
  return manifests
    .filter((manifest) => Number(manifest?.versionCode) > 0)
    .sort((a, b) => Number(b.versionCode) - Number(a.versionCode))[0] || null;
}

function parseManifest(raw) {
  try {
    return JSON.parse(raw || "{}");
  } catch {
    return {};
  }
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
    "access-control-allow-methods": "GET, OPTIONS",
    "access-control-allow-headers": "content-type, x-client-id, x-client-session-id, x-client-source, x-client-page, x-client-purpose"
  };
}

function logRequest(route, request) {
  const headers = request.headers;
  console.log(`[${route}]`, JSON.stringify({
    method: request.method,
    clientId: headers.get("x-client-id") || "",
    clientSessionId: headers.get("x-client-session-id") || "",
    clientSource: headers.get("x-client-source") || "",
    clientPage: headers.get("x-client-page") || "",
    clientPurpose: headers.get("x-client-purpose") || "",
    ip: headers.get("cf-connecting-ip") || "",
    userAgent: headers.get("user-agent") || "",
    referer: headers.get("referer") || ""
  }));
}
