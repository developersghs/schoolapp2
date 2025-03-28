"use client"

import { useState } from "react"
import { UnifiedHeader } from "@/components/unified-header"
import { UnifiedNav } from "@/components/unified-nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, ChevronRight, X } from "lucide-react"
import Link from "next/link"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { format } from "date-fns"

export default function AttendancePage() {
  const [selectedClass, setSelectedClass] = useState("10-A")
  const [selectedDate, setSelectedDate] = useState(format(new Date(), "yyyy-MM-dd"))
  const [activeTab, setActiveTab] = useState("mark")
  const [attendance, setAttendance] = useState<Record<string, string>>({
    "1": "present",
    "2": "present",
    "3": "absent",
    "4": "present",
    "5": "late",
    "6": "present",
    "7": "present",
    "8": "present",
    "9": "present",
    "10": "present",
    "11": "absent",
    "12": "present",
  })

  const students = [
    { id: "1", name: "Rahul Sharma", rollNo: "15" },
    { id: "2", name: "Priya Patel", rollNo: "16" },
    { id: "3", name: "Amit Kumar", rollNo: "17" },
    { id: "4", name: "Sneha Singh", rollNo: "18" },
    { id: "5", name: "Vikram Verma", rollNo: "19" },
    { id: "6", name: "Neha Gupta", rollNo: "20" },
    { id: "7", name: "Raj Malhotra", rollNo: "21" },
    { id: "8", name: "Ananya Desai", rollNo: "22" },
    { id: "9", name: "Karan Mehra", rollNo: "23" },
    { id: "10", name: "Pooja Sharma", rollNo: "24" },
    { id: "11", name: "Arjun Singh", rollNo: "25" },
    { id: "12", name: "Divya Kapoor", rollNo: "26" },
  ]

  const classes = [
    { id: "10-A", name: "Class 10-A" },
    { id: "10-B", name: "Class 10-B" },
    { id: "9-A", name: "Class 9-A" },
    { id: "9-B", name: "Class 9-B" },
  ]

  const handleAttendanceChange = (studentId: string, status: string) => {
    setAttendance((prev) => ({
      ...prev,
      [studentId]: status,
    }))
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "present":
        return "bg-green-900 text-white"
      case "absent":
        return "bg-red-900 text-white"
      case "late":
        return "bg-yellow-900 text-white"
      default:
        return "bg-secondary"
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <UnifiedHeader title="Attendance" />

      <main className="flex-1 container max-w-md mx-auto p-4">
        <div className="space-y-6 pb-16">
          <div>
            <h1 className="text-2xl font-bold">Attendance Management</h1>
            <p className="text-muted-foreground mt-1">Mark and view attendance records</p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="mark">Mark Attendance</TabsTrigger>
              <TabsTrigger value="summary">Attendance Summary</TabsTrigger>
            </TabsList>

            <TabsContent value="mark">
              <Card className="border border-border">
                <CardHeader>
                  <CardTitle>Mark Attendance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Select Class</label>
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
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Select Date</label>
                      <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full h-10 px-3 rounded-md border border-border bg-background"
                      />
                    </div>
                  </div>

                  <div className="border border-border rounded-md overflow-hidden">
                    <div className="grid grid-cols-[1fr,auto,auto,auto] gap-2 p-3 bg-secondary">
                      <div className="text-sm font-medium">Student</div>
                      <div className="text-sm font-medium text-center w-16">Present</div>
                      <div className="text-sm font-medium text-center w-16">Absent</div>
                      <div className="text-sm font-medium text-center w-16">Late</div>
                    </div>
                    <div className="divide-y divide-border">
                      {students.map((student) => (
                        <div key={student.id} className="grid grid-cols-[1fr,auto,auto,auto] gap-2 p-3 items-center">
                          <div>
                            <div className="font-medium">{student.name}</div>
                            <div className="text-xs text-muted-foreground">Roll No: {student.rollNo}</div>
                          </div>
                          <button
                            className={`w-16 h-8 rounded-md flex items-center justify-center ${attendance[student.id] === "present" ? "bg-green-900 text-white" : "bg-secondary"}`}
                            onClick={() => handleAttendanceChange(student.id, "present")}
                          >
                            <Check className="h-4 w-4" />
                          </button>
                          <button
                            className={`w-16 h-8 rounded-md flex items-center justify-center ${attendance[student.id] === "absent" ? "bg-red-900 text-white" : "bg-secondary"}`}
                            onClick={() => handleAttendanceChange(student.id, "absent")}
                          >
                            <X className="h-4 w-4" />
                          </button>
                          <button
                            className={`w-16 h-8 rounded-md flex items-center justify-center ${attendance[student.id] === "late" ? "bg-yellow-900 text-white" : "bg-secondary"}`}
                            onClick={() => handleAttendanceChange(student.id, "late")}
                          >
                            <span className="text-xs">Late</span>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Save Attendance</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="summary">
              <Card className="border border-border">
                <CardHeader>
                  <CardTitle>Attendance Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-secondary rounded-md p-3 text-center">
                        <div className="text-2xl font-bold">
                          {Object.values(attendance).filter((status) => status === "present").length}
                        </div>
                        <div className="text-xs text-muted-foreground">Present</div>
                      </div>
                      <div className="bg-secondary rounded-md p-3 text-center">
                        <div className="text-2xl font-bold">
                          {Object.values(attendance).filter((status) => status === "absent").length}
                        </div>
                        <div className="text-xs text-muted-foreground">Absent</div>
                      </div>
                      <div className="bg-secondary rounded-md p-3 text-center">
                        <div className="text-2xl font-bold">
                          {Object.values(attendance).filter((status) => status === "late").length}
                        </div>
                        <div className="text-xs text-muted-foreground">Late</div>
                      </div>
                    </div>

                    <div className="border border-border rounded-md p-3">
                      <div className="text-sm font-medium mb-2">Attendance Rate</div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary"
                          style={{
                            width: `${(Object.values(attendance).filter((status) => status === "present").length / students.length) * 100}%`,
                          }}
                        ></div>
                      </div>
                      <div className="text-xs text-muted-foreground mt-2 text-right">
                        {Math.round(
                          (Object.values(attendance).filter((status) => status === "present").length /
                            students.length) *
                            100,
                        )}
                        % Present
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/attendance/history">
                      View Attendance History
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <UnifiedNav activeItem="attendance" />
    </div>
  )
}

