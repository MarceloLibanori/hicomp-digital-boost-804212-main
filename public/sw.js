// Service Worker for HiComp Hidráulica
// Version 1.0.0 - Basic caching strategy for B2B site

const CACHE_VERSION = 'hicomp-v1';
const STATIC_CACHE = `${CACHE_VERSION}-static`;
const DYNAMIC_CACHE = `${CACHE_VERSION}-dynamic`;
const MAX_DYNAMIC_CACHE_SIZE = 50;

// Assets to cache immediately on install
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.ico',
  '/icon-192x192.png',
  '/icon-512x512.png'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('[SW] Installing service worker...');
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('[SW] Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => self.skipWaiting())
      .catch((err) => console.error('[SW] Install failed:', err))
  );
});

// Activate event - cleanup old caches
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating service worker...');
  event.waitUntil(
    caches.keys()
      .then((keys) => {
        return Promise.all(
          keys
            .filter((key) => key !== STATIC_CACHE && key !== DYNAMIC_CACHE)
            .map((key) => {
              console.log('[SW] Removing old cache:', key);
              return caches.delete(key);
            })
        );
      })
      .then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip cross-origin requests
  if (url.origin !== location.origin) {
    return;
  }

  // Skip API calls and analytics
  if (url.pathname.includes('/api/') || url.hostname.includes('google-analytics') || url.hostname.includes('googletagmanager')) {
    return;
  }

  event.respondWith(
    caches.match(request)
      .then((cachedResponse) => {
        // Cache hit - return from cache
        if (cachedResponse) {
          // Update cache in background for non-HTML files
          if (!request.url.endsWith('.html')) {
            fetch(request).then((response) => {
              if (response.ok) {
                caches.open(DYNAMIC_CACHE).then((cache) => {
                  cache.put(request, response);
                });
              }
            }).catch(() => {});
          }
          return cachedResponse;
        }

        // Cache miss - fetch from network
        return fetch(request)
          .then((response) => {
            // Only cache successful GET requests
            if (!response || response.status !== 200 || request.method !== 'GET') {
              return response;
            }

            // Clone the response
            const responseToCache = response.clone();

            // Cache assets (JS, CSS, images)
            if (
              request.url.includes('/assets/') ||
              /\.(js|css|png|jpg|jpeg|webp|svg|woff2?)$/.test(request.url)
            ) {
              caches.open(DYNAMIC_CACHE).then((cache) => {
                cache.put(request, responseToCache);
                limitCacheSize(DYNAMIC_CACHE, MAX_DYNAMIC_CACHE_SIZE);
              });
            }

            return response;
          })
          .catch((err) => {
            console.error('[SW] Fetch failed:', err);

            // Return offline fallback for HTML pages
            if (request.headers.get('accept').includes('text/html')) {
              return caches.match('/index.html');
            }
          });
      })
  );
});

// Helper: Limit cache size
function limitCacheSize(cacheName, maxSize) {
  caches.open(cacheName).then((cache) => {
    cache.keys().then((keys) => {
      if (keys.length > maxSize) {
        cache.delete(keys[0]).then(() => {
          limitCacheSize(cacheName, maxSize);
        });
      }
    });
  });
}
