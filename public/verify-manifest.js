// This script can be run in the browser console to verify the manifest is accessible
;(async function verifyManifest() {
  try {
    const response = await fetch("/manifest.json")
    if (response.ok) {
      console.log("Manifest is accessible!")
      const manifest = await response.json()
      console.log("Manifest content:", manifest)
    } else {
      console.error("Manifest returned status:", response.status)
    }
  } catch (error) {
    console.error("Error accessing manifest:", error)
  }
})()

