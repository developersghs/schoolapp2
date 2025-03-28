import Link from "next/link"
import { Bell, BookOpen, Home, MessageSquare } from "lucide-react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface UnifiedNavProps {
  activeItem: string
}

export function UnifiedNav({ activeItem }: UnifiedNavProps) {
  return (
    <>
      <div className="w-full text-center py-2 text-xs text-muted-foreground border-t">
        Made by Akshat Bhardwaj and Ayush Mishra
      </div>
      <div className="fixed bottom-0 left-0 right-0 h-16 bg-background border-t z-10">
        <Tabs defaultValue={activeItem} className="h-full">
          <TabsList className="h-full grid grid-cols-5">
            <TabsTrigger value="home" asChild>
              <Link href="/" className="flex flex-col items-center justify-center">
                <Home className="h-5 w-5" />
                <span className="text-xs mt-1">Home</span>
              </Link>
            </TabsTrigger>
            <TabsTrigger value="academics" asChild>
              <Link href="/academics" className="flex flex-col items-center justify-center">
                <BookOpen className="h-5 w-5" />
                <span className="text-xs mt-1">Academics</span>
              </Link>
            </TabsTrigger>
            <TabsTrigger value="communication" asChild>
              <Link href="/communication" className="flex flex-col items-center justify-center">
                <MessageSquare className="h-5 w-5" />
                <span className="text-xs mt-1">Messages</span>
              </Link>
            </TabsTrigger>
            <TabsTrigger value="notifications" asChild>
              <Link href="/notifications" className="flex flex-col items-center justify-center">
                <Bell className="h-5 w-5" />
                <span className="text-xs mt-1">Alerts</span>
              </Link>
            </TabsTrigger>
            <TabsTrigger value="more" asChild>
              <Link href="/more" className="flex flex-col items-center justify-center">
                <span className="grid grid-cols-2 gap-0.5">
                  <span className="h-2 w-2 bg-primary rounded-sm"></span>
                  <span className="h-2 w-2 bg-primary rounded-sm"></span>
                  <span className="h-2 w-2 bg-primary rounded-sm"></span>
                  <span className="h-2 w-2 bg-primary rounded-sm"></span>
                </span>
                <span className="text-xs mt-1">More</span>
              </Link>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </>
  )
}

