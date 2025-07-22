self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('freshstop-v1').then((cache) => cache.addAll(['/']))
  );
});