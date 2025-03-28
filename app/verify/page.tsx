"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { UnifiedHeader } from "@/components/unified-header"
import { UnifiedNav } from "@/components/unified-nav"

export default function VerifyPage() {
  const [manifestStatus, setManifestStatus] = useState<"loading" | "success" | "error">("loading")
  const [manifestContent, setManifestContent] = useState<any>(null)
  const [errorMessage, setErrorMessage] = useState<string>("")

  useEffect(() => {
    checkManifest()
  }, [])

  const checkManifest = async () => {
    try {
      setManifestStatus("loading")
      const response = await fetch("/manifest.json")

      if (response.ok) {
        const manifest = await response.json()
        setManifestContent(manifest)
        setManifestStatus("success")
      } else {
        setErrorMessage(`Manifest returned status: ${response.status}`)
        setManifestStatus("error")
      }
    } catch (error) {
      setErrorMessage(`Error accessing manifest: ${error instanceof Error ? error.message : String(error)}`)
      setManifestStatus("error")
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <UnifiedHeader title="Verify Manifest" />

      <main className="flex-1 p-4">
        <Card className="bg-gray-900 text-white border-gray-800">
          <CardHeader>
            <CardTitle>Manifest Verification</CardTitle>
          </CardHeader>
          <CardContent>
            {manifestStatus === "loading" && <p>Checking manifest...</p>}

            {manifestStatus === "error" && (
              <div className="text-red-500">
                <p>Error: {errorMessage}</p>
                <Button onClick={checkManifest} className="mt-4">
                  Try Again
                </Button>
              </div>
            )}

            {manifestStatus === "success" && (
              <div>
                <p className="text-green-500 mb-4">✓ Manifest is accessible!</p>
                <div className="bg-gray-800 p-4 rounded-md overflow-auto">
                  <pre>{JSON.stringify(manifestContent, null, 2)}</pre>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </main>

      <UnifiedNav />
    </div>
  )
}

