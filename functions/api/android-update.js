const RELEASE_API_URL = "https://api.github.com/repos/ggbondgh/nanstar-note/releases/latest";
const FALLBACK_APK_URL = "https://github.com/ggbondgh/nanstar-note/releases/latest/download/nanstar-note.apk";
const FALLBACK_UPDATE_URL = "https://github.com/ggbondgh/nanstar-note/releases/latest/download/update.json";

export async function onRequestOptions() {
  return new Response(null, { headers: corsHeaders() });
}

export async function onRequestGet() {
  const manifest = await fetchUpdateManifest();
  if (manifest?.versionCode) {
    return json(manifest);
  }

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
  const urls = [FALLBACK_UPDATE_URL, `${FALLBACK_UPDATE_URL}?t=${Date.now()}`];
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
        return manifest;
      }
    } catch {}
  }
  return null;
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
    "access-control-allow-headers": "content-type"
  };
}
