/* Service worker Puente — app shell hors ligne.
   Stratégie :
   - document (index.html / navigations) : NETWORK-FIRST, pour toujours récupérer
     la dernière version après un push, avec repli sur le cache si hors ligne.
   - autres ressources même origine (manifest, icônes) : CACHE-FIRST.
   - cross-origin (CDN Supabase, Google Fonts) : on ne s'en mêle pas (passe au réseau). */
const CACHE = 'puente-v2';
const SHELL = ['/', '/index.html', '/manifest.webmanifest', '/icon-192.png', '/icon-512.png', '/icon-180.png'];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => Promise.allSettled(SHELL.map(u => c.add(u))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  let url;
  try { url = new URL(req.url); } catch (_) { return; }
  if (url.origin !== self.location.origin) return; /* laisse passer le cross-origin */

  const isDoc = req.mode === 'navigate' || url.pathname === '/' || url.pathname.endsWith('/index.html');

  if (isDoc) {
    /* network-first : la version fraîche gagne, cache en secours hors ligne */
    e.respondWith(
      fetch(req)
        .then(r => {
          const copy = r.clone();
          caches.open(CACHE).then(c => c.put('/index.html', copy)).catch(() => {});
          return r;
        })
        .catch(() => caches.match('/index.html').then(r => r || caches.match('/')))
    );
    return;
  }

  /* cache-first pour les ressources statiques de même origine */
  e.respondWith(
    caches.match(req).then(cached => cached || fetch(req).then(r => {
      if (r && r.ok) {
        const copy = r.clone();
        caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {});
      }
      return r;
    }))
  );
});
