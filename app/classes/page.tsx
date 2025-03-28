"use client"

import { useState } from "react"
import { UnifiedHeader } from "@/components/unified-header"
import { UnifiedNav } from "@/components/unified-nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, ClipboardList, MessageSquare, User } from "lucide-react"
import Link from "next/link"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ClassesPage() {
  const [selectedClass, setSelectedClass] = useState("10-A")

  const classes = [
    { id: "10-A", name: "Class 10-A", students: 32, teacher: "Mrs. Sharma" },
    { id: "10-B", name: "Class 10-B", students: 30, teacher: "Mr. Patel" },
    { id: "9-A", name: "Class 9-A", students: 35, teacher: "Mrs. Gupta" },
    { id: "9-B", name: "Class 9-B", students: 33, teacher: "Mr. Singh" },
  ]

  const students = [
    { id: "1", name: "Rahul Sharma", rollNo: "15", attendance: "92%", performance: "85%" },
    { id: "2", name: "Priya Patel", rollNo: "16", attendance: "95%", performance: "92%" },
    { id: "3", name: "Amit Kumar", rollNo: "17", attendance: "88%", performance: "78%" },
    { id: "4", name: "Sneha Singh", rollNo: "18", attendance: "90%", performance: "88%" },
    { id: "5", name: "Vikram Verma", rollNo: "19", attendance: "85%", performance: "76%" },
    { id: "6", name: "Neha Gupta", rollNo: "20", attendance: "93%", performance: "90%" },
    { id: "7", name: "Raj Malhotra", rollNo: "21", attendance: "91%", performance: "82%" },
    { id: "8", name: "Ananya Desai", rollNo: "22", attendance: "97%", performance: "95%" },
  ]

  const subjects = [
    { id: "mathematics", name: "Mathematics", teacher: "Mrs. Sharma", schedule: "Mon, Wed, Fri (9:00 AM - 10:00 AM)" },
    { id: "science", name: "Science", teacher: "Mr. Patel", schedule: "Tue, Thu, Sat (10:00 AM - 11:00 AM)" },
    { id: "english", name: "English", teacher: "Mrs. Gupta", schedule: "Mon, Wed, Fri (11:00 AM - 12:00 PM)" },
    { id: "social_studies", name: "Social Studies", teacher: "Mr. Singh", schedule: "Tue, Thu (12:00 PM - 1:00 PM)" },
    { id: "hindi", name: "Hindi", teacher: "Mrs. Verma", schedule: "Mon, Fri (2:00 PM - 3:00 PM)" },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <UnifiedHeader title="Classes" />

      <main className="flex-1 container max-w-md mx-auto p-4">
        <div className="space-y-6 pb-16">
          <div>
            <h1 className="text-2xl font-bold">Class Management</h1>
            <p className="text-muted-foreground mt-1">View and manage class information</p>
          </div>

          <Card className="border border-border mb-6">
            <CardHeader>
              <CardTitle>Select Class</CardTitle>
            </CardHeader>
            <CardContent>
              <Select value={selectedClass} onValueChange={setSelectedClass}>
                <SelectTrigger>
                  <SelectValue placeholder="Select class" />
                </SelectTrigger>
                <SelectContent>
                  {classes.map((cls) => (
                    <SelectItem key={cls.id} value={cls.id}>
                      {cls.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          <Tabs defaultValue="overview">
            <TabsList className="grid w-full grid-cols-3 mb-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="students">Students</TabsTrigger>
              <TabsTrigger value="subjects">Subjects</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <Card className="border border-border">
                <CardHeader>
                  <CardTitle>{classes.find((cls) => cls.id === selectedClass)?.name} Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-secondary rounded-md p-3 text-center">
                        <div className="text-2xl font-bold">
                          {classes.find((cls) => cls.id === selectedClass)?.students}
                        </div>
                        <div className="text-xs text-muted-foreground">Students</div>
                      </div>
                      <div className="bg-secondary rounded-md p-3 text-center">
                        <div className="text-2xl font-bold">{subjects.length}</div>
                        <div className="text-xs text-muted-foreground">Subjects</div>
                      </div>
                    </div>

                    <div className="border border-border rounded-md p-3">
                      <div className="text-sm font-medium mb-2">Class Teacher</div>
                      <div className="flex items-center space-x-3">
                        <div className="h-10 w-10 rounded-full bg-accent overflow-hidden flex items-center justify-center">
                          <User className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="font-medium">{classes.find((cls) => cls.id === selectedClass)?.teacher}</div>
                          <div className="text-xs text-muted-foreground">Mathematics Teacher</div>
                        </div>
                      </div>
                    </div>

                    <div className="border border-border rounded-md p-3">
                      <div className="text-sm font-medium mb-2">Class Performance</div>
                      <div className="space-y-2">
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span>Attendance</span>
                            <span>92%</span>
                          </div>
                          <div className="h-2 bg-secondary rounded-full overflow-hidden">
                            <div className="h-full bg-primary" style={{ width: "92%" }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span>Academic Performance</span>
                            <span>85%</span>
                          </div>
                          <div className="h-2 bg-secondary rounded-full overflow-hidden">
                            <div className="h-full bg-primary" style={{ width: "85%" }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-2">
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="/analytics" className="flex items-center justify-center">
                      View Class Analytics
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href={`/communication?class=${selectedClass}`} className="flex items-center justify-center">
                      <MessageSquare className="mr-1 h-4 w-4" />
                      Message Class
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="students">
              <Card className="border border-border">
                <CardHeader>
                  <CardTitle>Students in {classes.find((cls) => cls.id === selectedClass)?.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {students.map((student) => (
                      <div key={student.id} className="p-3 rounded-md border border-border">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-3">
                            <div className="h-10 w-10 rounded-full bg-accent overflow-hidden flex items-center justify-center">
                              <User className="h-5 w-5" />
                            </div>
                            <div>
                              <div className="font-medium">{student.name}</div>
                              <div className="text-xs text-muted-foreground">Roll No: {student.rollNo}</div>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm" asChild>
                            <Link href={`/profile?student=${student.id}`}>View</Link>
                          </Button>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-3">
                          <div>
                            <div className="text-xs text-muted-foreground mb-1">Attendance</div>
                            <div className="h-2 bg-secondary rounded-full overflow-hidden">
                              <div className="h-full bg-primary" style={{ width: student.attendance }}></div>
                            </div>
                          </div>
                          <div>
                            <div className="text-xs text-muted-foreground mb-1">Performance</div>
                            <div className="h-2 bg-secondary rounded-full overflow-hidden">
                              <div className="h-full bg-primary" style={{ width: student.performance }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/attendance">
                      View Attendance
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="subjects">
              <Card className="border border-border">
                <CardHeader>
                  <CardTitle>Subjects for {classes.find((cls) => cls.id === selectedClass)?.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {subjects.map((subject) => (
                      <div key={subject.id} className="p-3 rounded-md border border-border">
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="font-medium">{subject.name}</div>
                            <div className="text-xs text-muted-foreground">Teacher: {subject.teacher}</div>
                          </div>
                          <Button variant="ghost" size="sm" asChild>
                            <Link href={`/marks?subject=${subject.id}&class=${selectedClass}`}>
                              <ClipboardList className="h-4 w-4 mr-1" />
                              Marks
                            </Link>
                          </Button>
                        </div>
                        <div className="text-xs text-muted-foreground mt-2">Schedule: {subject.schedule}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/academics">
                      View Academic Performance
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <UnifiedNav activeItem="more" />
    </div>
  )
}

