"use client"

import { useState } from "react"
import { UnifiedHeader } from "@/components/unified-header"
import { UnifiedNav } from "@/components/unified-nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AcademicsPage() {
  const [selectedSubject, setSelectedSubject] = useState("all")
  const [selectedTerm, setSelectedTerm] = useState("current")
  const [activeTab, setActiveTab] = useState("performance")

  const subjects = [
    { id: "all", name: "All Subjects" },
    { id: "mathematics", name: "Mathematics" },
    { id: "science", name: "Science" },
    { id: "english", name: "English" },
    { id: "social_studies", name: "Social Studies" },
    { id: "hindi", name: "Hindi" },
  ]

  const terms = [
    { id: "current", name: "Current Term" },
    { id: "term1", name: "Term 1" },
    { id: "term2", name: "Term 2" },
    { id: "final", name: "Final" },
  ]

  const subjectPerformance = [
    { subject: "Mathematics", score: 85, classAvg: 78, highest: 95 },
    { subject: "Science", score: 78, classAvg: 75, highest: 92 },
    { subject: "English", score: 92, classAvg: 80, highest: 96 },
    { subject: "Social Studies", score: 88, classAvg: 82, highest: 94 },
    { subject: "Hindi", score: 75, classAvg: 72, highest: 90 },
  ]

  const examSchedule = [
    { id: 1, subject: "Mathematics", date: "April 10, 2025", time: "9:00 AM - 12:00 PM", venue: "Examination Hall A" },
    { id: 2, subject: "Science", date: "April 12, 2025", time: "9:00 AM - 12:00 PM", venue: "Examination Hall B" },
    { id: 3, subject: "English", date: "April 14, 2025", time: "9:00 AM - 12:00 PM", venue: "Examination Hall A" },
    {
      id: 4,
      subject: "Social Studies",
      date: "April 16, 2025",
      time: "9:00 AM - 12:00 PM",
      venue: "Examination Hall B",
    },
    { id: 5, subject: "Hindi", date: "April 18, 2025", time: "9:00 AM - 12:00 PM", venue: "Examination Hall A" },
  ]

  const calculateOverallPerformance = () => {
    const totalScore = subjectPerformance.reduce((acc, subject) => acc + subject.score, 0)
    return Math.round(totalScore / subjectPerformance.length)
  }

  const overallPerformance = calculateOverallPerformance()

  const getPerformanceColor = (score: number) => {
    if (score >= 90) return "bg-green-900"
    if (score >= 80) return "bg-blue-900"
    if (score >= 70) return "bg-yellow-900"
    return "bg-red-900"
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <UnifiedHeader title="Academics" />

      <main className="flex-1 container max-w-md mx-auto p-4">
        <div className="space-y-6 pb-16">
          <div>
            <h1 className="text-2xl font-bold">Academic Performance</h1>
            <p className="text-muted-foreground mt-1">View your performance, statistics, and exam schedule</p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3 mb-4">
              <TabsTrigger value="performance">Performance</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="exams">Exam Schedule</TabsTrigger>
            </TabsList>

            <TabsContent value="performance">
              <Card className="border border-border mb-6">
                <CardHeader>
                  <CardTitle>Filters</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Subject</label>
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
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Term</label>
                      <Select value={selectedTerm} onValueChange={setSelectedTerm}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select term" />
                        </SelectTrigger>
                        <SelectContent>
                          {terms.map((term) => (
                            <SelectItem key={term.id} value={term.id}>
                              {term.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-border">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Overall Performance</CardTitle>
                    <div className="text-2xl font-bold">{overallPerformance}%</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-4">
                      {subjectPerformance.map((subject, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <div className="font-medium">{subject.subject}</div>
                            <div className="text-sm font-medium">{subject.score}%</div>
                          </div>
                          <div className="space-y-1">
                            <div className="h-2 bg-secondary rounded-full overflow-hidden">
                              <div
                                className={`h-full ${getPerformanceColor(subject.score)}`}
                                style={{ width: `${subject.score}%` }}
                              ></div>
                            </div>
                            <div className="flex justify-between text-xs text-muted-foreground">
                              <span>Class Avg: {subject.classAvg}%</span>
                              <span>Highest: {subject.highest}%</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/analytics">
                      View Detailed Analytics
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="analytics">
              <Card className="border border-border">
                <CardHeader>
                  <CardTitle>Performance Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="text-sm font-medium">Performance Trend</div>
                      <div className="h-[200px] bg-secondary rounded-md p-4">
                        <div className="h-full flex items-end space-x-2">
                          {[65, 72, 78, 75, 82, 85].map((score, index) => (
                            <div key={index} className="flex-1 flex flex-col items-center">
                              <div
                                className={`w-full ${getPerformanceColor(score)}`}
                                style={{ height: `${score}%` }}
                              ></div>
                              <div className="text-xs mt-2">Test {index + 1}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="text-sm font-medium">Subject Comparison</div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-secondary rounded-md p-3 text-center">
                          <div className="text-2xl font-bold">3rd</div>
                          <div className="text-xs text-muted-foreground">Class Rank</div>
                        </div>
                        <div className="bg-secondary rounded-md p-3 text-center">
                          <div className="text-2xl font-bold">85%</div>
                          <div className="text-xs text-muted-foreground">Percentile</div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="text-sm font-medium">Strengths & Weaknesses</div>
                      <div className="border border-border rounded-md p-3 space-y-3">
                        <div>
                          <div className="text-xs font-medium mb-1">Strongest Subject</div>
                          <div className="flex justify-between items-center">
                            <div>English</div>
                            <div className="text-sm">92%</div>
                          </div>
                        </div>
                        <div>
                          <div className="text-xs font-medium mb-1">Weakest Subject</div>
                          <div className="flex justify-between items-center">
                            <div>Hindi</div>
                            <div className="text-sm">75%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="exams">
              <Card className="border border-border">
                <CardHeader>
                  <CardTitle>Upcoming Examinations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {examSchedule.map((exam) => (
                      <div key={exam.id} className="border border-border rounded-md p-3 space-y-2">
                        <div className="flex justify-between items-center">
                          <div className="font-medium">{exam.subject}</div>
                          <div className="text-sm">{exam.date}</div>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          <div>{exam.time}</div>
                          <div>{exam.venue}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/academics/syllabus">
                      View Exam Syllabus
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <UnifiedNav activeItem="academics" />
    </div>
  )
}

