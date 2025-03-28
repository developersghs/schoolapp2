"use client"

import { useState } from "react"
import { AppHeader } from "@/components/app-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, ChevronRight, Home, MessageSquare, User, Users } from "lucide-react"
import Link from "next/link"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"

export default function MarksEntryPage() {
  const [selectedClass, setSelectedClass] = useState("10-A")
  const [selectedSubject, setSelectedSubject] = useState("mathematics")
  const [selectedExam, setSelectedExam] = useState("unit_test_1")
  const [marks, setMarks] = useState<Record<string, string>>({
    "1": "85",
    "2": "92",
    "3": "78",
    "4": "88",
    "5": "76",
    "6": "90",
    "7": "82",
    "8": "95",
    "9": "79",
    "10": "87",
    "11": "73",
    "12": "91",
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

  const subjects = [
    { id: "mathematics", name: "Mathematics" },
    { id: "science", name: "Science" },
    { id: "english", name: "English" },
    { id: "social_studies", name: "Social Studies" },
    { id: "hindi", name: "Hindi" },
  ]

  const exams = [
    { id: "unit_test_1", name: "Unit Test 1" },
    { id: "mid_term", name: "Mid Term Examination" },
    { id: "unit_test_2", name: "Unit Test 2" },
    { id: "final_term", name: "Final Term Examination" },
  ]

  const handleMarksChange = (studentId: string, value: string) => {
    // Only allow numbers between 0-100
    if (value === "" || (/^\d+$/.test(value) && Number.parseInt(value) <= 100)) {
      setMarks((prev) => ({
        ...prev,
        [studentId]: value,
      }))
    }
  }

  const calculateStats = () => {
    const validMarks = Object.values(marks)
      .filter((mark) => mark !== "")
      .map((mark) => Number.parseInt(mark))

    if (validMarks.length === 0) return { avg: 0, highest: 0, lowest: 0 }

    const sum = validMarks.reduce((acc, curr) => acc + curr, 0)
    const avg = Math.round(sum / validMarks.length)
    const highest = Math.max(...validMarks)
    const lowest = Math.min(...validMarks)

    return { avg, highest, lowest }
  }

  const stats = calculateStats()

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader title="Enter Marks" showLogout={true} />

      <main className="flex-1 container max-w-md mx-auto p-4">
        <div className="space-y-6 pb-16">
          <Card className="border border-border">
            <CardHeader>
              <CardTitle>Enter Student Marks</CardTitle>
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
                  <label className="text-sm font-medium">Select Subject</label>
                  <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select subject" />
                    </SelectTrigger>
                    <SelectContent>
                      {subjects.map((subject) => (
                        <SelectItem key={subject.id} value={subject.id}>
                          {subject.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Select Examination</label>
                <Select value={selectedExam} onValueChange={setSelectedExam}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select examination" />
                  </SelectTrigger>
                  <SelectContent>
                    {exams.map((exam) => (
                      <SelectItem key={exam.id} value={exam.id}>
                        {exam.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="border border-border rounded-md overflow-hidden">
                <div className="grid grid-cols-[1fr,auto] gap-2 p-3 bg-secondary">
                  <div className="text-sm font-medium">Student</div>
                  <div className="text-sm font-medium text-center w-20">Marks</div>
                </div>
                <div className="divide-y divide-border">
                  {students.map((student) => (
                    <div key={student.id} className="grid grid-cols-[1fr,auto] gap-2 p-3 items-center">
                      <div>
                        <div className="font-medium">{student.name}</div>
                        <div className="text-xs text-muted-foreground">Roll No: {student.rollNo}</div>
                      </div>
                      <Input
                        type="text"
                        value={marks[student.id] || ""}
                        onChange={(e) => handleMarksChange(student.id, e.target.value)}
                        className="w-20 text-center"
                        placeholder="0-100"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Save Marks</Button>
            </CardFooter>
          </Card>

          <Card className="border border-border">
            <CardHeader>
              <CardTitle>Class Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-secondary rounded-md p-3 text-center">
                    <div className="text-2xl font-bold">{stats.avg}</div>
                    <div className="text-xs text-muted-foreground">Average</div>
                  </div>
                  <div className="bg-secondary rounded-md p-3 text-center">
                    <div className="text-2xl font-bold">{stats.highest}</div>
                    <div className="text-xs text-muted-foreground">Highest</div>
                  </div>
                  <div className="bg-secondary rounded-md p-3 text-center">
                    <div className="text-2xl font-bold">{stats.lowest}</div>
                    <div className="text-xs text-muted-foreground">Lowest</div>
                  </div>
                </div>

                <div className="border border-border rounded-md p-3">
                  <div className="text-sm font-medium mb-2">Performance Distribution</div>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>90-100</span>
                        <span>
                          {Object.values(marks).filter((mark) => mark !== "" && Number.parseInt(mark) >= 90).length}{" "}
                          students
                        </span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary"
                          style={{
                            width: `${(Object.values(marks).filter((mark) => mark !== "" && Number.parseInt(mark) >= 90).length / students.length) * 100}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>80-89</span>
                        <span>
                          {
                            Object.values(marks).filter(
                              (mark) => mark !== "" && Number.parseInt(mark) >= 80 && Number.parseInt(mark) < 90,
                            ).length
                          }{" "}
                          students
                        </span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary"
                          style={{
                            width: `${(Object.values(marks).filter((mark) => mark !== "" && Number.parseInt(mark) >= 80 && Number.parseInt(mark) < 90).length / students.length) * 100}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>70-79</span>
                        <span>
                          {
                            Object.values(marks).filter(
                              (mark) => mark !== "" && Number.parseInt(mark) >= 70 && Number.parseInt(mark) < 80,
                            ).length
                          }{" "}
                          students
                        </span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary"
                          style={{
                            width: `${(Object.values(marks).filter((mark) => mark !== "" && Number.parseInt(mark) >= 70 && Number.parseInt(mark) < 80).length / students.length) * 100}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Below 70</span>
                        <span>
                          {Object.values(marks).filter((mark) => mark !== "" && Number.parseInt(mark) < 70).length}{" "}
                          students
                        </span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary"
                          style={{
                            width: `${(Object.values(marks).filter((mark) => mark !== "" && Number.parseInt(mark) < 70).length / students.length) * 100}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/teacher-portal/marks/history">
                  View Previous Marks
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-16 bg-background border-t z-10">
        <Tabs defaultValue="home" className="h-full">
          <TabsList className="h-full grid grid-cols-5">
            <TabsTrigger value="home" asChild>
              <Link href="/teacher-portal" className="flex flex-col items-center justify-center">
                <Home className="h-5 w-5" />
                <span className="text-xs mt-1">Home</span>
              </Link>
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

