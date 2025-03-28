// This script verifies that the logo is correctly displayed
document.addEventListener("DOMContentLoaded", () => {
  const logoImages = document.querySelectorAll('img[src*="school-logo"]')
  console.log(`Found ${logoImages.length} logo images on the page`)

  logoImages.forEach((img, index) => {
    console.log(`Logo ${index + 1}: ${img.src}`)
    img.addEventListener("error", () => {
      console.error(`Error loading logo image: ${img.src}`)
    })
    img.addEventListener("load", () => {
      console.log(`Successfully loaded logo image: ${img.src}`)
    })
  })
})

