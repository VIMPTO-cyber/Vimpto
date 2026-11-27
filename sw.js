// Service worker minimal : rend le site installable. Aucun cache : le site se charge toujours depuis Internet.
self.addEventListener("install", function () { self.skipWaiting(); });
self.addEventListener("activate", function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener("fetch", function (e) {
  if (e.request.mode === "navigate") {
    e.respondWith(fetch(e.request).catch(function () { return new Response("Pas de connexion Internet. Reconnecte-toi puis rouvre Vinto.", { status: 503, headers: { "Content-Type": "text/plain; charset=utf-8" } }); }));
  }
});
