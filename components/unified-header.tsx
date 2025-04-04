import Link from "next/link"
import Image from "next/image"
import { Bell, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"

interface UnifiedHeaderProps {
  title?: string
  showLogout?: boolean
  showNotifications?: boolean
}

export function UnifiedHeader({
  title = "Gulmohur High School",
  showLogout = true,
  showNotifications = true,
}: UnifiedHeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-md items-center justify-between text-sm">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/icons/school-logo.png"
            alt="Gulmohur School"
            width={32}
            height={32}
            className="h-8 w-8 rounded-full"
          />
          <span className="font-bold text-primary">{title}</span>
        </Link>
        <div className="flex items-center space-x-1">
          {showNotifications && (
            <Button variant="ghost" size="icon" asChild>
              <Link href="/notifications">
                <Bell className="h-5 w-5" />
                <span className="sr-only">Notifications</span>
              </Link>
            </Button>
          )}
          {showLogout && (
            <Button variant="ghost" size="icon" asChild>
              <Link href="/login">
                <LogOut className="h-5 w-5" />
                <span className="sr-only">Logout</span>
              </Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}

