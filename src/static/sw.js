/* eslint-disable no-restricted-globals */

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open('sw').then(cache => cache.addAll([
    './',
    'styles.css',
    'bundle.js',
  ])));
});
