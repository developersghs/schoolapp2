import { UnifiedHeader } from "@/components/unified-header"
import { UnifiedNav } from "@/components/unified-nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, FileText, MessageCircle } from "lucide-react"

export default function NotificationsPage() {
  const notifications = [
    {
      id: 1,
      type: "event",
      title: "Parent-Teacher Meeting",
      description: "Reminder: Parent-Teacher Meeting scheduled for March 30th, 10:00 AM - 2:00 PM.",
      date: "March 25, 2025",
      icon: <Calendar className="h-5 w-5" />,
      read: false,
    },
    {
      id: 2,
      type: "assignment",
      title: "Science Project Due Soon",
      description: "Your Science Project is due on March 30th. Please ensure timely submission.",
      date: "March 24, 2025",
      icon: <FileText className="h-5 w-5" />,
      read: false,
    },
    {
      id: 3,
      type: "message",
      title: "New Message from Mrs. Sharma",
      description: "You have received a new message from your Mathematics teacher.",
      date: "March 20, 2025",
      icon: <MessageCircle className="h-5 w-5" />,
      read: true,
    },
    {
      id: 4,
      type: "event",
      title: "Annual Sports Day",
      description: "Annual Sports Day will be held on April 10th. Register for events by April 1st.",
      date: "March 18, 2025",
      icon: <Calendar className="h-5 w-5" />,
      read: true,
    },
    {
      id: 5,
      type: "assignment",
      title: "English Essay Submission",
      description: "Your English Essay has been received. Thank you for your submission.",
      date: "March 15, 2025",
      icon: <FileText className="h-5 w-5" />,
      read: true,
    },
    {
      id: 6,
      type: "message",
      title: "New Message from Principal",
      description: "Important announcement from the Principal regarding upcoming events.",
      date: "March 10, 2025",
      icon: <MessageCircle className="h-5 w-5" />,
      read: true,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <UnifiedHeader title="Notifications" />

      <main className="flex-1 container max-w-md mx-auto p-4">
        <div className="space-y-6 pb-16">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Notifications</h1>
              <p className="text-muted-foreground mt-1">Stay updated with important alerts and announcements</p>
            </div>
            <Button variant="outline" size="sm">
              Mark All Read
            </Button>
          </div>

          <div className="space-y-4">
            {notifications.map((notification) => (
              <Card key={notification.id} className={`border border-border ${notification.read ? "opacity-75" : ""}`}>
                <CardContent className="p-4">
                  <div className="flex items-start space-x-4">
                    <div className="mt-1 bg-accent rounded-full p-2">{notification.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold">{notification.title}</h3>
                        {!notification.read && <div className="h-2 w-2 rounded-full bg-primary"></div>}
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{notification.description}</p>
                      <p className="text-xs text-muted-foreground mt-2">{notification.date}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <UnifiedNav activeItem="notifications" />
    </div>
  )
}

