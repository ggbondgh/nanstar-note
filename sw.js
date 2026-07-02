const CACHE = "nanstar-note-v14";
const ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./script.js",
  "./assets/icon.svg",
  "./manifest.webmanifest",
  "./sw.js"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const requestUrl = new URL(event.request.url);
  if (requestUrl.origin === self.location.origin && requestUrl.pathname.startsWith("/api/")) {
    event.respondWith(fetch(event.request));
    return;
  }

  if (event.request.method !== "GET") return;

  const isCoreAsset = requestUrl.origin === self.location.origin && (
    event.request.mode === "navigate"
    || event.request.destination === "document"
    || requestUrl.pathname === "/"
    || requestUrl.pathname.endsWith(".html")
    || requestUrl.pathname.endsWith(".css")
    || requestUrl.pathname.endsWith(".js")
    || requestUrl.pathname.endsWith(".webmanifest")
  );

  if (isCoreAsset) {
    event.respondWith((async () => {
      try {
        const response = await fetch(event.request);
        if (response.ok) {
          const cache = await caches.open(CACHE);
          cache.put(event.request, response.clone());
        }
        return response;
      } catch (error) {
        const cached = await caches.match(event.request);
        if (cached) return cached;
        const fallback = await caches.match("./index.html");
        if (fallback) return fallback;
        throw error;
      }
    })());
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) =>
      cached || fetch(event.request).then((response) => {
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE).then((cache) => cache.put(event.request, clone));
        }
        return response;
      })
    )
  );
});
