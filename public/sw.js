const CACHE_NAME = "gulmohur-app-v2"
const urlsToCache = ["/", "/login", "/manifest.json", "/icons/school-logo.png", "/globals.css"]

self.addEventListener("install", (event) => {
  console.log("Service Worker: Installing...")
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        console.log("Service Worker: Opened cache")
        return cache.addAll(urlsToCache)
      })
      .catch((error) => {
        console.error("Service Worker: Cache error", error)
      }),
  )
})

self.addEventListener("fetch", (event) => {
  // Special handling for manifest.json
  if (event.request.url.endsWith("/manifest.json")) {
    console.log("Service Worker: Fetching manifest.json")
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          // Clone the response to store in cache
          const responseToCache = response.clone()
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache)
          })
          return response
        })
        .catch(() => {
          // If fetch fails, try to get from cache
          return caches.match(event.request)
        }),
    )
    return
  }

  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response
      }
      return fetch(event.request).then((response) => {
        if (!response || response.status !== 200 || response.type !== "basic") {
          return response
        }

        const responseToCache = response.clone()
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache)
        })

        return response
      })
    }),
  )
})

self.addEventListener("activate", (event) => {
  console.log("Service Worker: Activating...")
  const cacheWhitelist = [CACHE_NAME]
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log("Service Worker: Deleting old cache", cacheName)
            return caches.delete(cacheName)
          }
        }),
      )
    }),
  )
})

// Handle messages from clients
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting()
  }
})

