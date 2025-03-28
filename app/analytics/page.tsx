"use client"

import { useState } from "react"
import { UnifiedHeader } from "@/components/unified-header"
import { UnifiedNav } from "@/components/unified-nav"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Line, LineChart, Bar, BarChart, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

export default function AnalyticsPage() {
  const [selectedSubject, setSelectedSubject] = useState("all")
  const [selectedClass, setSelectedClass] = useState("all")
  const [selectedPeriod, setSelectedPeriod] = useState("term")

  // Generate random performance data
  const generatePerformanceData = () => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    return months.map((month) => {
      const baseScore = 60 + Math.floor(Math.random() * 25)
      return {
        month,
        score: baseScore,
        average: baseScore - 5 - Math.floor(Math.random() * 10),
      }
    })
  }

  // Generate random subject data
  const generateSubjectData = () => {
    const subjects = ["Mathematics", "Science", "English", "Social Studies", "Hindi", "Computer"]
    return subjects.map((subject) => {
      return {
        subject,
        score: 60 + Math.floor(Math.random() * 30),
        classAverage: 55 + Math.floor(Math.random() * 20),
      }
    })
  }

  // Generate random attendance data
  const generateAttendanceData = () => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    return months.map((month) => {
      const attendance = 80 + Math.floor(Math.random() * 20)
      return {
        month,
        attendance,
        classAverage: attendance - 5 - Math.floor(Math.random() * 10),
      }
    })
  }

  const performanceData = generatePerformanceData()
  const subjectData = generateSubjectData()
  const attendanceData = generateAttendanceData()

  // Calculate overall statistics
  const overallScore = Math.round(subjectData.reduce((acc, item) => acc + item.score, 0) / subjectData.length)
  const overallAttendance = Math.round(
    attendanceData.reduce((acc, item) => acc + item.attendance, 0) / attendanceData.length,
  )
  const overallRank = 5 // Placeholder

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <UnifiedHeader title="Analytics" />

      <main className="flex-1 container max-w-md mx-auto p-4">
        <div className="space-y-6 pb-16">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Student Analytics</h1>
            <Select value={selectedClass} onValueChange={setSelectedClass}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Class" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Classes</SelectItem>
                <SelectItem value="12A">XII - A</SelectItem>
                <SelectItem value="12B">XII - B</SelectItem>
                <SelectItem value="11A">XI - A</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Card className="border border-border">
            <CardHeader className="pb-2">
              <CardTitle>Performance Overview</CardTitle>
              <CardDescription>Academic year 2023-24</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-3 gap-4 pt-0">
              <div className="text-center">
                <div className="text-3xl font-bold">{overallScore}%</div>
                <div className="text-xs text-muted-foreground">Overall Score</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">{overallAttendance}%</div>
                <div className="text-xs text-muted-foreground">Attendance</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">#{overallRank}</div>
                <div className="text-xs text-muted-foreground">Class Rank</div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="performance">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="performance">Performance</TabsTrigger>
              <TabsTrigger value="subjects">Subjects</TabsTrigger>
              <TabsTrigger value="attendance">Attendance</TabsTrigger>
            </TabsList>

            <div className="flex justify-between items-center mt-4">
              <div className="text-sm font-medium">Trend Analysis</div>
              <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="term">Term</SelectItem>
                  <SelectItem value="year">Year</SelectItem>
                  <SelectItem value="month">Month</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <TabsContent value="performance" className="mt-2">
              <Card className="border border-border">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Performance Trend</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <ChartContainer
                    config={{
                      score: {
                        label: "Your Score",
                        color: "hsl(var(--chart-1))",
                      },
                      average: {
                        label: "Class Average",
                        color: "hsl(var(--chart-2))",
                      },
                    }}
                    className="h-[300px]"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={performanceData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis domain={[0, 100]} />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Legend />
                        <Line type="monotone" dataKey="score" stroke="var(--color-score)" strokeWidth={2} />
                        <Line
                          type="monotone"
                          dataKey="average"
                          stroke="var(--color-average)"
                          strokeWidth={2}
                          strokeDasharray="5 5"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="subjects" className="mt-2">
              <div className="flex justify-between items-center mb-2">
                <div className="text-sm font-medium">Subject Performance</div>
                <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Subjects</SelectItem>
                    <SelectItem value="math">Mathematics</SelectItem>
                    <SelectItem value="science">Science</SelectItem>
                    <SelectItem value="english">English</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Card className="border border-border">
                <CardContent className="p-0">
                  <ChartContainer
                    config={{
                      score: {
                        label: "Your Score",
                        color: "hsl(var(--chart-1))",
                      },
                      classAverage: {
                        label: "Class Average",
                        color: "hsl(var(--chart-2))",
                      },
                    }}
                    className="h-[300px]"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={subjectData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="subject" />
                        <YAxis domain={[0, 100]} />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Legend />
                        <Bar dataKey="score" fill="var(--color-score)" />
                        <Bar dataKey="classAverage" fill="var(--color-classAverage)" />
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="attendance" className="mt-2">
              <Card className="border border-border">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Attendance Trend</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <ChartContainer
                    config={{
                      attendance: {
                        label: "Your Attendance",
                        color: "hsl(var(--chart-1))",
                      },
                      classAverage: {
                        label: "Class Average",
                        color: "hsl(var(--chart-2))",
                      },
                    }}
                    className="h-[300px]"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={attendanceData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis domain={[0, 100]} />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Legend />
                        <Line type="monotone" dataKey="attendance" stroke="var(--color-attendance)" strokeWidth={2} />
                        <Line
                          type="monotone"
                          dataKey="classAverage"
                          stroke="var(--color-classAverage)"
                          strokeWidth={2}
                          strokeDasharray="5 5"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <Card className="border border-border">
            <CardHeader className="pb-2">
              <CardTitle>Class Performance</CardTitle>
              <CardDescription>Comparison with class average</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Mathematics</span>
                  <span className="text-sm font-medium">85%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: "85%" }}></div>
                </div>
                <div className="flex justify-end mt-1">
                  <span className="text-xs text-muted-foreground">Class Average: 72%</span>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Science</span>
                  <span className="text-sm font-medium">78%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: "78%" }}></div>
                </div>
                <div className="flex justify-end mt-1">
                  <span className="text-xs text-muted-foreground">Class Average: 68%</span>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">English</span>
                  <span className="text-sm font-medium">92%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: "92%" }}></div>
                </div>
                <div className="flex justify-end mt-1">
                  <span className="text-xs text-muted-foreground">Class Average: 75%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <UnifiedNav activeItem="analytics" />
    </div>
  )
}

