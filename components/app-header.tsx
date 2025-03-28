import Link from "next/link"
import Image from "next/image"
import { LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AppHeaderProps {
  title?: string
  showLogout?: boolean
}

export function AppHeader({ title = "Gulmohur High School", showLogout = false }: AppHeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-md items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/icons/school-logo.png"
            alt="Gulmohur High School"
            width={32}
            height={32}
            className="h-8 w-8 rounded-full"
          />
          <span className="font-bold text-primary">{title}</span>
        </Link>
        {showLogout && (
          <Button variant="ghost" size="icon" asChild>
            <Link href="/login">
              <LogOut className="h-5 w-5" />
              <span className="sr-only">Logout</span>
            </Link>
          </Button>
        )}
      </div>
    </header>
  )
}

