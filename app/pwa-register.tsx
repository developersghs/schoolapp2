"use client"

import { useEffect } from "react"

export function PWARegister() {
  useEffect(() => {
    // Register the manifest
    const linkElement = document.querySelector('link[rel="manifest"]')
    if (!linkElement) {
      const newLink = document.createElement("link")
      newLink.rel = "manifest"
      newLink.href = "/manifest.json"
      document.head.appendChild(newLink)
      console.log("Manifest link dynamically added")
    }

    // Register service worker
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/sw.js")
          .then((registration) => {
            console.log("ServiceWorker registration successful with scope: ", registration.scope)
          })
          .catch((err) => {
            console.log("ServiceWorker registration failed: ", err)
          })
      })
    }

    // Run diagnostics
    const script = document.createElement("script")
    script.src = "/manifest-diagnostics.js"
    script.async = true
    document.body.appendChild(script)
  }, [])

  return null
}

