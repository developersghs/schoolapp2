"use client"

import { useState } from "react"
import { AppHeader } from "@/components/app-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Bell, BookOpen, ChevronRight, CreditCard, FileText, GraduationCap, Home, Info, User } from "lucide-react"
import Link from "next/link"

export default function StudentPortalPage() {
  const [selectedMonth, setSelectedMonth] = useState("april")

  const months = [
    { id: "april", name: "April 2025", amount: 5000, status: "paid", dueDate: "April 10, 2025" },
    { id: "may", name: "May 2025", amount: 5000, status: "paid", dueDate: "May 10, 2025" },
    { id: "june", name: "June 2025", amount: 5000, status: "pending", dueDate: "June 10, 2025" },
    { id: "july", name: "July 2025", amount: 5000, status: "pending", dueDate: "July 10, 2025" },
    { id: "august", name: "August 2025", amount: 5000, status: "pending", dueDate: "August 10, 2025" },
    { id: "september", name: "September 2025", amount: 5000, status: "pending", dueDate: "September 10, 2025" },
    { id: "october", name: "October 2025", amount: 5000, status: "pending", dueDate: "October 10, 2025" },
    { id: "november", name: "November 2025", amount: 5000, status: "pending", dueDate: "November 10, 2025" },
    { id: "december", name: "December 2025", amount: 5000, status: "pending", dueDate: "December 10, 2025" },
    { id: "january", name: "January 2026", amount: 5000, status: "pending", dueDate: "January 10, 2026" },
    { id: "february", name: "February 2026", amount: 5000, status: "pending", dueDate: "February 10, 2026" },
    { id: "march", name: "March 2026", amount: 5000, status: "pending", dueDate: "March 10, 2026" },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader title="Student Portal" showLogout={true} />

      <main className="flex-1 container max-w-md mx-auto p-4">
        <div className="space-y-6 pb-16">
          <Card className="border border-border">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="h-16 w-16 rounded-full bg-accent overflow-hidden flex items-center justify-center">
                  <User className="h-8 w-8" />
                </div>
                <div>
                  <h2 className="font-bold text-xl">Akshat Bhardwaj</h2>
                  <p className="text-sm text-muted-foreground">Class 12-A | Roll No: 4</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="dashboard">
            <TabsList className="grid w-full grid-cols-3 mb-4">
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="academics">Academics</TabsTrigger>
              <TabsTrigger value="fees">Fee Payment</TabsTrigger>
            </TabsList>

            <TabsContent value="dashboard">
              <div className="grid grid-cols-2 gap-4">
                <Link href="/student-portal/attendance" className="no-underline">
                  <Card className="h-full hover:bg-accent transition-colors border border-border">
                    <CardContent className="flex flex-col items-center justify-center p-4 text-center">
                      <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center mb-2">
                        <User className="h-6 w-6" />
                      </div>
                      <h3 className="font-medium">Attendance</h3>
                    </CardContent>
                  </Card>
                </Link>
                <Link href="/academics" className="no-underline">
                  <Card className="h-full hover:bg-accent transition-colors border border-border">
                    <CardContent className="flex flex-col items-center justify-center p-4 text-center">
                      <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center mb-2">
                        <GraduationCap className="h-6 w-6" />
                      </div>
                      <h3 className="font-medium">Grades</h3>
                    </CardContent>
                  </Card>
                </Link>
                <Link href="/student-portal/assignments" className="no-underline">
                  <Card className="h-full hover:bg-accent transition-colors border border-border">
                    <CardContent className="flex flex-col items-center justify-center p-4 text-center">
                      <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center mb-2">
                        <FileText className="h-6 w-6" />
                      </div>
                      <h3 className="font-medium">Assignments</h3>
                    </CardContent>
                  </Card>
                </Link>
                <Link href="/student-portal/timetable" className="no-underline">
                  <Card className="h-full hover:bg-accent transition-colors border border-border">
                    <CardContent className="flex flex-col items-center justify-center p-4 text-center">
                      <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center mb-2">
                        <BookOpen className="h-6 w-6" />
                      </div>
                      <h3 className="font-medium">Timetable</h3>
                    </CardContent>
                  </Card>
                </Link>
              </div>

              <Card className="border border-border mt-6">
                <CardHeader>
                  <CardTitle>Attendance Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Present</span>
                        <span className="text-sm font-medium">92%</span>
                      </div>
                      <Progress value={92} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Absent</span>
                        <span className="text-sm font-medium">5%</span>
                      </div>
                      <Progress value={5} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Late</span>
                        <span className="text-sm font-medium">3%</span>
                      </div>
                      <Progress value={3} className="h-2" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="/student-portal/attendance" className="flex items-center justify-center">
                      View Details
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="academics">
              <Card className="border border-border">
                <CardHeader>
                  <CardTitle>Academic Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Mathematics</span>
                        <span className="text-sm font-medium">85%</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Science</span>
                        <span className="text-sm font-medium">78%</span>
                      </div>
                      <Progress value={78} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">English</span>
                        <span className="text-sm font-medium">92%</span>
                      </div>
                      <Progress value={92} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Social Studies</span>
                        <span className="text-sm font-medium">88%</span>
                      </div>
                      <Progress value={88} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Hindi</span>
                        <span className="text-sm font-medium">75%</span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-2">
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="/academics" className="flex items-center justify-center">
                      View Detailed Analytics
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="/academics?tab=exams" className="flex items-center justify-center">
                      Exam Schedule
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="fees">
              <Card className="border border-border">
                <CardHeader>
                  <CardTitle>Monthly Fee Payment</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border border-border rounded-md p-3">
                      <div className="text-sm font-medium mb-2">Payment Status</div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary"
                          style={{
                            width: `${(months.filter((month) => month.status === "paid").length / months.length) * 100}%`,
                          }}
                        ></div>
                      </div>
                      <div className="text-xs text-muted-foreground mt-2 text-right">
                        {months.filter((month) => month.status === "paid").length} of {months.length} months paid
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="text-sm font-medium">Monthly Fees</div>
                      <div className="max-h-[300px] overflow-y-auto space-y-2">
                        {months.map((month) => (
                          <div
                            key={month.id}
                            className={`p-3 rounded-md border border-border flex justify-between items-center cursor-pointer ${selectedMonth === month.id ? "bg-accent" : ""}`}
                            onClick={() => setSelectedMonth(month.id)}
                          >
                            <div>
                              <div className="font-medium">{month.name}</div>
                              <div className="text-xs text-muted-foreground">Due: {month.dueDate}</div>
                            </div>
                            <div className="flex flex-col items-end">
                              <div className="font-medium">₹{month.amount}</div>
                              <div
                                className={`text-xs ${month.status === "paid" ? "text-green-500" : "text-yellow-500"}`}
                              >
                                {month.status === "paid" ? "Paid" : "Pending"}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" disabled={months.find((m) => m.id === selectedMonth)?.status === "paid"}>
                    <CreditCard className="mr-2 h-4 w-4" />
                    {months.find((m) => m.id === selectedMonth)?.status === "paid"
                      ? "Already Paid"
                      : `Pay ₹${months.find((m) => m.id === selectedMonth)?.amount} for ${months.find((m) => m.id === selectedMonth)?.name}`}
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-16 bg-background border-t z-10">
        <Tabs defaultValue="profile" className="h-full">
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
            <TabsTrigger value="academics" asChild>
              <Link href="/academics" className="flex flex-col items-center justify-center">
                <BookOpen className="h-5 w-5" />
                <span className="text-xs mt-1">Academics</span>
              </Link>
            </TabsTrigger>
            <TabsTrigger value="notifications" asChild>
              <Link href="/notifications" className="flex flex-col items-center justify-center">
                <Bell className="h-5 w-5" />
                <span className="text-xs mt-1">Alerts</span>
              </Link>
            </TabsTrigger>
            <TabsTrigger
              value="profile"
              className="flex flex-col items-center justify-center data-[state=active]:text-primary"
            >
              <User className="h-5 w-5" />
              <span className="text-xs mt-1">Profile</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  )
}

