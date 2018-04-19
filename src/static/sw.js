/* eslint-disable no-restricted-globals */

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open('sw').then(cache =>
    cache.addAll([
      './',
      'styles.css',
      'bundle.js',
    ])));
});

self.addEventListener('fetch', (event) => {
  event.respondWith(caches.match(event.request).then(response =>
    response || fetch(event.request)));
});
