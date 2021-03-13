const kadana = "kadana-v1"
const assets = [
  "/",
  "/index.html",
  
  "/app.js",
  "/images/eagle.png",
  
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(kadana).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })