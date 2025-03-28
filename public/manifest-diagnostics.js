// Enhanced script to diagnose manifest issues
;(async function diagnoseManifest() {
  console.log("🔍 Starting manifest diagnostics...")

  // Check if manifest is accessible
  try {
    const response = await fetch("/manifest.json")
    if (response.ok) {
      console.log("✅ Manifest is accessible!")

      // Check content type
      const contentType = response.headers.get("content-type")
      if (contentType && contentType.includes("application/json")) {
        console.log("✅ Manifest has correct Content-Type:", contentType)
      } else {
        console.warn("⚠️ Manifest has incorrect Content-Type:", contentType)
        console.log("   Should be 'application/json' or 'application/manifest+json'")
      }

      // Parse and validate manifest content
      try {
        const manifest = await response.json()
        console.log("✅ Manifest parsed successfully")

        // Check required fields
        const requiredFields = ["name", "short_name", "start_url", "display", "icons"]
        const missingFields = requiredFields.filter((field) => !manifest[field])

        if (missingFields.length === 0) {
          console.log("✅ Manifest contains all required fields")
        } else {
          console.error("❌ Manifest is missing required fields:", missingFields.join(", "))
        }

        // Check icons
        if (manifest.icons && Array.isArray(manifest.icons)) {
          if (manifest.icons.length > 0) {
            console.log("✅ Manifest contains icons")

            // Check if icons are accessible
            for (const icon of manifest.icons) {
              if (icon.src) {
                try {
                  const iconResponse = await fetch(icon.src)
                  if (iconResponse.ok) {
                    console.log(`✅ Icon at ${icon.src} is accessible`)
                  } else {
                    console.error(`❌ Icon at ${icon.src} returned status: ${iconResponse.status}`)
                  }
                } catch (error) {
                  console.error(`❌ Error accessing icon at ${icon.src}:`, error)
                }
              }
            }
          } else {
            console.error("❌ Manifest icons array is empty")
          }
        } else {
          console.error("❌ Manifest icons property is missing or not an array")
        }

        console.log("📋 Full manifest content:", manifest)
      } catch (error) {
        console.error("❌ Error parsing manifest JSON:", error)
      }
    } else {
      console.error("❌ Manifest returned status:", response.status)
    }
  } catch (error) {
    console.error("❌ Error accessing manifest:", error)
  }

  // Check if manifest is referenced in HTML
  const manifestLink = document.querySelector('link[rel="manifest"]')
  if (manifestLink) {
    console.log("✅ Manifest is referenced in HTML")
    console.log("   href:", manifestLink.getAttribute("href"))
  } else {
    console.error("❌ Manifest is not referenced in HTML")
  }

  // Check service worker registration
  if ("serviceWorker" in navigator) {
    try {
      const registrations = await navigator.serviceWorker.getRegistrations()
      if (registrations.length > 0) {
        console.log("✅ Service worker is registered")
        registrations.forEach((registration) => {
          console.log("   Scope:", registration.scope)
        })
      } else {
        console.warn("⚠️ No service worker registrations found")
      }
    } catch (error) {
      console.error("❌ Error checking service worker registrations:", error)
    }
  } else {
    console.error("❌ Service workers not supported in this browser")
  }

  console.log("🏁 Manifest diagnostics complete")
})()

