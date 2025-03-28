import { Card, CardContent } from "@/components/ui/card"
import { CalendarIcon } from "lucide-react"

export function UpcomingEvents() {
  const events = [
    {
      id: 1,
      title: "Annual Sports Day",
      date: "April 10, 2025",
      time: "9:00 AM - 4:00 PM",
      location: "School Grounds",
    },
    {
      id: 2,
      title: "Parent-Teacher Meeting",
      date: "March 30, 2025",
      time: "10:00 AM - 2:00 PM",
      location: "School Auditorium",
    },
    {
      id: 3,
      title: "Cultural Festival",
      date: "May 15, 2025",
      time: "5:00 PM - 9:00 PM",
      location: "School Auditorium",
    },
  ]

  return (
    <div className="space-y-3">
      {events.map((event) => (
        <Card key={event.id} className="border border-border">
          <CardContent className="p-4">
            <div className="flex">
              <div className="mr-4 flex flex-col items-center justify-center bg-accent rounded-md p-2 min-w-[60px]">
                <CalendarIcon className="h-5 w-5 mb-1" />
                <span className="text-xs font-medium">{event.date.split(",")[0]}</span>
              </div>
              <div>
                <h3 className="font-semibold">{event.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">{event.date}</p>
                <p className="text-xs text-muted-foreground">{event.time}</p>
                <p className="text-xs text-muted-foreground">{event.location}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

