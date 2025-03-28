import Link from "next/link"
import { UnifiedHeader } from "@/components/unified-header"
import { UnifiedNav } from "@/components/unified-nav"
import { Card, CardContent } from "@/components/ui/card"
import {
  BookOpen,
  Calendar,
  Clock,
  CreditCard,
  FileText,
  GraduationCap,
  HelpCircle,
  Info,
  LifeBuoy,
  MessageSquare,
  Settings,
  User,
  Users,
} from "lucide-react"

export default function MorePage() {
  const tools = [
    { icon: <User className="h-5 w-5" />, name: "Profile", link: "/profile" },
    { icon: <Calendar className="h-5 w-5" />, name: "Calendar", link: "/calendar" },
    { icon: <Clock className="h-5 w-5" />, name: "Timetable", link: "/timetable" },
    { icon: <CreditCard className="h-5 w-5" />, name: "Fee Payment", link: "/fees" },
    { icon: <FileText className="h-5 w-5" />, name: "Assignments", link: "/assignments" },
    { icon: <BookOpen className="h-5 w-5" />, name: "Library", link: "/library" },
    { icon: <GraduationCap className="h-5 w-5" />, name: "Academics", link: "/academics" },
    { icon: <MessageSquare className="h-5 w-5" />, name: "Communication", link: "/communication" },
    { icon: <Users className="h-5 w-5" />, name: "Classes", link: "/classes" },
    { icon: <Settings className="h-5 w-5" />, name: "Settings", link: "/settings" },
  ]

  const support = [
    { icon: <HelpCircle className="h-5 w-5" />, name: "Help Center", link: "/help" },
    { icon: <LifeBuoy className="h-5 w-5" />, name: "Support", link: "/support" },
    { icon: <Info className="h-5 w-5" />, name: "About", link: "/about" },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <UnifiedHeader title="More" />

      <main className="flex-1 container max-w-md mx-auto p-4">
        <div className="space-y-6 pb-16">
          <div>
            <h1 className="text-2xl font-bold">More</h1>
            <p className="text-muted-foreground mt-1">Access all features and tools</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-3">All Features</h2>
            <div className="grid grid-cols-3 gap-4">
              {tools.map((tool, index) => (
                <Link key={index} href={tool.link} className="no-underline">
                  <Card className="h-full hover:bg-accent transition-colors border border-border">
                    <CardContent className="flex flex-col items-center justify-center p-4 text-center">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                        {tool.icon}
                      </div>
                      <h3 className="text-sm font-medium">{tool.name}</h3>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-3">Support</h2>
            <div className="grid grid-cols-3 gap-4">
              {support.map((item, index) => (
                <Link key={index} href={item.link} className="no-underline">
                  <Card className="h-full hover:bg-accent transition-colors border border-border">
                    <CardContent className="flex flex-col items-center justify-center p-4 text-center">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                        {item.icon}
                      </div>
                      <h3 className="text-sm font-medium">{item.name}</h3>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          <div className="text-center text-sm text-muted-foreground pt-4">
            <p>Version 1.0.0</p>
            <p className="mt-1">Made by Akshat Bhardwaj and Ayush Mishra</p>
          </div>
        </div>
      </main>

      <UnifiedNav activeItem="more" />
    </div>
  )
}

