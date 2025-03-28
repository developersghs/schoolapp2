"use client"

import { useState } from "react"
import { AppHeader } from "@/components/app-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Calendar, CheckSquare, ClipboardList, Home, MessageSquare, User, Users } from "lucide-react"
import Link from "next/link"

export default function TeacherPortalPage() {
  const [activeClass, setActiveClass] = useState("10-A")

  const classes = [
    { id: "10-A", name: "Class 10-A", students: 32 },
    { id: "10-B", name: "Class 10-B", students: 30 },
    { id: "9-A", name: "Class 9-A", students: 35 },
    { id: "9-B", name: "Class 9-B", students: 33 },
  ]

  const recentActivities = [
    { id: 1, type: "attendance", description: "Marked attendance for Class 10-A", time: "Today, 9:15 AM" },
    { id: 2, type: "marks", description: "Updated Math test scores for Class 9-B", time: "Yesterday, 2:30 PM" },
    { id: 3, type: "message", description: "Sent message to Class 10-A parents group", time: "Yesterday, 11:45 AM" },
    { id: 4, type: "assignment", description: "Created new Science assignment for Class 9-A", time: "Mar 25, 2025" },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader title="Teacher Portal" showLogout={true} />

      <main className="flex-1 container max-w-md mx-auto p-4">
        <div className="space-y-6 pb-16">
          <Card className="border border-border">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="h-16 w-16 rounded-full bg-accent overflow-hidden flex items-center justify-center">
                  <User className="h-8 w-8" />
                </div>
                <div>
                  <h2 className="font-bold text-xl">Mrs. Sharma</h2>
                  <p className="text-sm text-muted-foreground">Mathematics Teacher</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-2 gap-4">
            <Link href="/teacher-portal/attendance" className="no-underline">
              <Card className="h-full hover:bg-accent transition-colors border border-border">
                <CardContent className="flex flex-col items-center justify-center p-4 text-center">
                  <CheckSquare className="h-8 w-8 mb-2" />
                  <h3 className="font-medium">Attendance</h3>
                </CardContent>
              </Card>
            </Link>
            <Link href="/teacher-portal/marks" className="no-underline">
              <Card className="h-full hover:bg-accent transition-colors border border-border">
                <CardContent className="flex flex-col items-center justify-center p-4 text-center">
                  <ClipboardList className="h-8 w-8 mb-2" />
                  <h3 className="font-medium">Enter Marks</h3>
                </CardContent>
              </Card>
            </Link>
            <Link href="/teacher-portal/messages" className="no-underline">
              <Card className="h-full hover:bg-accent transition-colors border border-border">
                <CardContent className="flex flex-col items-center justify-center p-4 text-center">
                  <MessageSquare className="h-8 w-8 mb-2" />
                  <h3 className="font-medium">Messages</h3>
                </CardContent>
              </Card>
            </Link>
            <Link href="/teacher-portal/classes" className="no-underline">
              <Card className="h-full hover:bg-accent transition-colors border border-border">
                <CardContent className="flex flex-col items-center justify-center p-4 text-center">
                  <Users className="h-8 w-8 mb-2" />
                  <h3 className="font-medium">My Classes</h3>
                </CardContent>
              </Card>
            </Link>
          </div>

          <Card className="border border-border">
            <CardHeader>
              <CardTitle>My Classes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {classes.map((cls) => (
                  <div
                    key={cls.id}
                    className={`p-3 rounded-md border border-border flex justify-between items-center cursor-pointer ${activeClass === cls.id ? "bg-accent" : ""}`}
                    onClick={() => setActiveClass(cls.id)}
                  >
                    <div className="flex items-center space-x-3">
                      <Users className="h-5 w-5" />
                      <div>
                        <h3 className="font-medium">{cls.name}</h3>
                        <p className="text-xs text-muted-foreground">{cls.students} students</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/teacher-portal/class/${cls.id}`}>View</Link>
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border border-border">
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="p-3 rounded-md border border-border">
                    <div className="flex items-start space-x-3">
                      <div className="mt-0.5">
                        {activity.type === "attendance" && <CheckSquare className="h-5 w-5" />}
                        {activity.type === "marks" && <ClipboardList className="h-5 w-5" />}
                        {activity.type === "message" && <MessageSquare className="h-5 w-5" />}
                        {activity.type === "assignment" && <BookOpen className="h-5 w-5" />}
                      </div>
                      <div>
                        <p className="text-sm">{activity.description}</p>
                        <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-16 bg-background border-t z-10">
        <Tabs defaultValue="home" className="h-full">
          <TabsList className="h-full grid grid-cols-5">
            <TabsTrigger
              value="home"
              className="flex flex-col items-center justify-center data-[state=active]:text-primary"
            >
              <Home className="h-5 w-5" />
              <span className="text-xs mt-1">Home</span>
            </TabsTrigger>
            <TabsTrigger value="classes" asChild>
              <Link href="/teacher-portal/classes" className="flex flex-col items-center justify-center">
                <Users className="h-5 w-5" />
                <span className="text-xs mt-1">Classes</span>
              </Link>
            </TabsTrigger>
            <TabsTrigger value="calendar" asChild>
              <Link href="/teacher-portal/calendar" className="flex flex-col items-center justify-center">
                <Calendar className="h-5 w-5" />
                <span className="text-xs mt-1">Calendar</span>
              </Link>
            </TabsTrigger>
            <TabsTrigger value="messages" asChild>
              <Link href="/teacher-portal/messages" className="flex flex-col items-center justify-center">
                <MessageSquare className="h-5 w-5" />
                <span className="text-xs mt-1">Messages</span>
              </Link>
            </TabsTrigger>
            <TabsTrigger value="profile" asChild>
              <Link href="/teacher-portal/profile" className="flex flex-col items-center justify-center">
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

