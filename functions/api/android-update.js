const RELEASE_API_URL = "https://api.github.com/repos/ggbondgh/nanstar-note/releases/latest";
const FALLBACK_APK_URL = "https://github.com/ggbondgh/nanstar-note/releases/latest/download/nanstar-note.apk";

export async function onRequestOptions() {
  return new Response(null, { headers: corsHeaders() });
}

export async function onRequestGet() {
  const response = await fetch(RELEASE_API_URL, {
    headers: {
      Accept: "application/vnd.github+json",
      "User-Agent": "nanstar-note-update-check"
    }
  });
  if (!response.ok) {
    return json({ error: `GitHub Release query failed: ${response.status}` }, response.status);
  }

  const release = await response.json();
  let manifest = {};
  try {
    manifest = JSON.parse(release.body || "{}");
  } catch {}

  const apkAsset = Array.isArray(release.assets)
    ? release.assets.find((asset) => asset.name === "nanstar-note.apk")
    : null;

  return json({
    versionCode: Number(manifest.versionCode || 0),
    versionName: manifest.versionName || release.name || "",
    apkUrl: manifest.apkUrl || apkAsset?.browser_download_url || FALLBACK_APK_URL,
    releaseUrl: manifest.releaseUrl || release.html_url || "https://github.com/ggbondgh/nanstar-note/releases/latest"
  });
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
    "access-control-allow-headers": "content-type"
  };
}
