import { SchoolHeader } from "@/components/school-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Bell, Calendar, ChevronLeft, ChevronRight, Home, Info, User } from "lucide-react"
import Link from "next/link"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CalendarPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background dark">
      <SchoolHeader />

      <main className="flex-1 container max-w-md mx-auto p-4">
        <div className="space-y-6 pb-16">
          <div>
            <h1 className="text-2xl font-bold">Academic Calendar</h1>
            <p className="text-muted-foreground mt-1">View important dates, holidays, and examination schedules</p>
          </div>

          <CalendarView />

          <div className="space-y-4">
            <h2 className="text-xl font-bold">Important Dates</h2>
            <Card className="border border-border">
              <CardContent className="p-4 space-y-4">
                <h3 className="font-semibold">Academic Year 2024-2025</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">First Term Begins</span>
                    <span className="text-sm font-medium">April 1, 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Summer Break</span>
                    <span className="text-sm font-medium">May 15 - June 15, 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Second Term Begins</span>
                    <span className="text-sm font-medium">June 16, 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Half-Yearly Exams</span>
                    <span className="text-sm font-medium">September 10-20, 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Diwali Break</span>
                    <span className="text-sm font-medium">October 25 - November 5, 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Winter Break</span>
                    <span className="text-sm font-medium">December 24, 2025 - January 5, 2026</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Final Exams</span>
                    <span className="text-sm font-medium">February 15-28, 2026</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Academic Year Ends</span>
                    <span className="text-sm font-medium">March 15, 2026</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold">Upcoming Events</h2>
            <Card className="border border-border">
              <CardContent className="p-4 space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="flex flex-col items-center justify-center bg-accent rounded-md p-2 min-w-[60px]">
                    <Calendar className="h-5 w-5 mb-1" />
                    <span className="text-xs font-medium">Mar 30</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Parent-Teacher Meeting</h3>
                    <p className="text-xs text-muted-foreground mt-1">10:00 AM - 2:00 PM</p>
                    <p className="text-xs text-muted-foreground">School Auditorium</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex flex-col items-center justify-center bg-accent rounded-md p-2 min-w-[60px]">
                    <Calendar className="h-5 w-5 mb-1" />
                    <span className="text-xs font-medium">Apr 10</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Annual Sports Day</h3>
                    <p className="text-xs text-muted-foreground mt-1">9:00 AM - 4:00 PM</p>
                    <p className="text-xs text-muted-foreground">School Grounds</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex flex-col items-center justify-center bg-accent rounded-md p-2 min-w-[60px]">
                    <Calendar className="h-5 w-5 mb-1" />
                    <span className="text-xs font-medium">May 15</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Cultural Festival</h3>
                    <p className="text-xs text-muted-foreground mt-1">5:00 PM - 9:00 PM</p>
                    <p className="text-xs text-muted-foreground">School Auditorium</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-16 bg-background border-t z-10">
        <Tabs defaultValue="calendar" className="h-full">
          <TabsList className="h-full grid grid-cols-5">
            <TabsTrigger value="home" asChild>
              <Link href="/" className="flex flex-col items-center justify-center">
                <Home className="h-5 w-5" />
                <span className="text-xs mt-1">Home</span>
              </Link>
            </TabsTrigger>
            <TabsTrigger value="about" asChild>
              <Link href="/about" className="flex flex-col items-center justify-center">
                <Info className="h-5 w-5" />
                <span className="text-xs mt-1">About</span>
              </Link>
            </TabsTrigger>
            <TabsTrigger
              value="calendar"
              className="flex flex-col items-center justify-center data-[state=active]:text-primary"
            >
              <Calendar className="h-5 w-5" />
              <span className="text-xs mt-1">Calendar</span>
            </TabsTrigger>
            <TabsTrigger value="notifications" asChild>
              <Link href="/notifications" className="flex flex-col items-center justify-center">
                <Bell className="h-5 w-5" />
                <span className="text-xs mt-1">Alerts</span>
              </Link>
            </TabsTrigger>
            <TabsTrigger value="profile" asChild>
              <Link href="/student-portal" className="flex flex-col items-center justify-center">
                <User className="h-5 w-5" />
                <span className="text-xs mt-1">Profile</span>
              </Link>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  )
}

function CalendarView() {
  return (
    <Card className="border border-border">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold">March 2025</h2>
          <div className="flex space-x-2">
            <Button variant="outline" size="icon" className="h-8 w-8">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="h-8 w-8">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-1">
          <div className="text-center text-xs font-medium py-1">Sun</div>
          <div className="text-center text-xs font-medium py-1">Mon</div>
          <div className="text-center text-xs font-medium py-1">Tue</div>
          <div className="text-center text-xs font-medium py-1">Wed</div>
          <div className="text-center text-xs font-medium py-1">Thu</div>
          <div className="text-center text-xs font-medium py-1">Fri</div>
          <div className="text-center text-xs font-medium py-1">Sat</div>

          {/* Empty cells for days before the 1st */}
          <div className="text-center p-2"></div>
          <div className="text-center p-2"></div>
          <div className="text-center p-2"></div>
          <div className="text-center p-2"></div>
          <div className="text-center p-2"></div>

          {/* Calendar days */}
          <div className="text-center p-2 text-sm">1</div>
          <div className="text-center p-2 text-sm">2</div>
          <div className="text-center p-2 text-sm">3</div>
          <div className="text-center p-2 text-sm">4</div>
          <div className="text-center p-2 text-sm">5</div>
          <div className="text-center p-2 text-sm">6</div>
          <div className="text-center p-2 text-sm">7</div>
          <div className="text-center p-2 text-sm">8</div>
          <div className="text-center p-2 text-sm">9</div>
          <div className="text-center p-2 text-sm">10</div>
          <div className="text-center p-2 text-sm">11</div>
          <div className="text-center p-2 text-sm">12</div>
          <div className="text-center p-2 text-sm">13</div>
          <div className="text-center p-2 text-sm">14</div>
          <div className="text-center p-2 text-sm">15</div>
          <div className="text-center p-2 text-sm">16</div>
          <div className="text-center p-2 text-sm">17</div>
          <div className="text-center p-2 text-sm">18</div>
          <div className="text-center p-2 text-sm">19</div>
          <div className="text-center p-2 text-sm">20</div>
          <div className="text-center p-2 text-sm">21</div>
          <div className="text-center p-2 text-sm">22</div>
          <div className="text-center p-2 text-sm">23</div>
          <div className="text-center p-2 text-sm">24</div>
          <div className="text-center p-2 text-sm">25</div>
          <div className="text-center p-2 text-sm">26</div>
          <div className="text-center p-2 text-sm">27</div>
          <div className="text-center p-2 text-sm">28</div>
          <div className="text-center p-2 text-sm">29</div>
          <div className="text-center p-2 text-sm bg-accent rounded-md font-medium">30</div>
          <div className="text-center p-2 text-sm">31</div>
        </div>
      </CardContent>
    </Card>
  )
}

