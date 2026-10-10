const C='gc-1791636851',F=["./", "index.html", "data.json", "audio/57d0e82d092c.mp3", "audio/b78b6d814ba8.mp3", "audio/ebacf61946ee.mp3"];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(F)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>clients.claim())));
self.addEventListener('fetch',e=>{const u=e.request.url;
if(u.includes('/audio/'))e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
else e.respondWith(fetch(e.request).catch(()=>caches.match(e.request,{ignoreSearch:true})))});
