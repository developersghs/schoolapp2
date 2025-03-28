"use client"

import { useState } from "react"
import { UnifiedHeader } from "@/components/unified-header"
import { UnifiedNav } from "@/components/unified-nav"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function TimetablePage() {
  const [selectedClass, setSelectedClass] = useState("12A")

  // Timetable data for Class XII-A
  const timetableData = {
    classInfo: {
      name: "XII - A",
      teacher: "JASWINDER KAUR",
    },
    periods: [
      { id: "1st", time: "7:40 AM - 8:10 AM" },
      { id: "2nd", time: "8:10 AM - 8:50 AM" },
      { id: "3rd", time: "8:50 AM - 9:30 AM" },
      { id: "4th", time: "9:30 AM - 10:10 AM" },
      { id: "5th", time: "10:30 AM - 11:10 AM" },
      { id: "6th", time: "11:10 AM - 11:45 AM" },
      { id: "7th", time: "11:45 AM - 12:20 PM" },
      { id: "8th", time: "12:20 PM - 12:55 PM" },
    ],
    days: ["MON", "TUE", "WED", "THU", "FRI"],
    schedule: [
      // 1st Period
      [
        { subject: "INTERACTIVE SESSION/READING", color: "bg-amber-500" },
        { subject: "CAREER COUNSELLING/PERSONALITY DEVELOPMENT", color: "bg-emerald-600" },
        { subject: "MINDFULNESS", color: "bg-green-500" },
        { subject: "EXISTENTIAL INTELLIGENCE", color: "bg-sky-400" },
        { subject: "INTERACTIVE SESSION", color: "bg-amber-500" },
      ],
      // 2nd Period
      [
        { subject: "CLASS TEACHER", color: "bg-purple-700" },
        { subject: "BIOLOGY/COMPUTER SCIENCE", color: "bg-blue-800" },
        { subject: "ENGLISH LANGUAGE", color: "bg-orange-200" },
        { subject: "CHEMISTRY", color: "bg-pink-500" },
        { subject: "MATHEMATICS", color: "bg-purple-500" },
      ],
      // 3rd Period
      [
        { subject: "CHEMISTRY", color: "bg-pink-500" },
        { subject: "BIOLOGY/COMPUTER SCIENCE", color: "bg-blue-800" },
        { subject: "PHYSICS", color: "bg-green-400" },
        { subject: "BIOLOGY/COMPUTER SCIENCE", color: "bg-blue-800" },
        { subject: "CHEMISTRY", color: "bg-pink-500" },
      ],
      // 4th Period
      [
        { subject: "MATHEMATICS", color: "bg-purple-500" },
        { subject: "ENGLISH LITERATURE", color: "bg-orange-400" },
        { subject: "CHEMISTRY", color: "bg-pink-500" },
        { subject: "PHYSICS", color: "bg-green-400" },
        { subject: "PHYSICS", color: "bg-green-400" },
      ],
      // 5th Period
      [
        { subject: "LIBRARY", color: "bg-pink-400" },
        { subject: "PHYSICS PRACTICAL/CHEMISTRY PRACTICAL", color: "bg-green-500" },
        { subject: "BIOLOGY/COMPUTER SCIENCE", color: "bg-blue-800" },
        { subject: "MATHEMATICS", color: "bg-purple-500" },
        { subject: "BIOLOGY/COMPUTER SCIENCE", color: "bg-blue-800" },
      ],
      // 6th Period
      [
        { subject: "PHYSICS", color: "bg-green-400" },
        { subject: "PHYSICS PRACTICAL/CHEMISTRY PRACTICAL", color: "bg-green-500" },
        { subject: "BIOLOGY/COMPUTER SCIENCE", color: "bg-blue-800" },
        { subject: "MATHEMATICS", color: "bg-purple-500" },
        { subject: "MATHEMATICS", color: "bg-purple-500" },
      ],
      // 7th Period
      [
        { subject: "ENGLISH LANGUAGE", color: "bg-orange-200" },
        { subject: "PHYSICS PRACTICAL/CHEMISTRY PRACTICAL", color: "bg-green-500" },
        { subject: "PHYSICS", color: "bg-green-400" },
        { subject: "ENGLISH LITERATURE", color: "bg-orange-400" },
        { subject: "ENGLISH LANGUAGE", color: "bg-orange-200" },
      ],
      // 8th Period
      [
        { subject: "ENGLISH LITERATURE", color: "bg-orange-400" },
        { subject: "CHEMISTRY", color: "bg-pink-500" },
        { subject: "MATHEMATICS", color: "bg-purple-500" },
        { subject: "ENGLISH LITERATURE", color: "bg-orange-400" },
        { subject: "-", color: "bg-gray-200" },
      ],
    ],
  }

  const classes = [
    { id: "12A", name: "XII - A" },
    { id: "12B", name: "XII - B" },
    { id: "11A", name: "XI - A" },
    { id: "11B", name: "XI - B" },
    { id: "10A", name: "X - A" },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <UnifiedHeader title="Class Timetable" />

      <main className="flex-1 container max-w-md mx-auto p-4">
        <div className="space-y-6 pb-16">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Class Timetable</h1>
            <div className="w-32">
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
          </div>

          <Card className="border border-border">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle>CLASS: {timetableData.classInfo.name}</CardTitle>
                <div className="text-sm text-muted-foreground">CLASS TEACHER: {timetableData.classInfo.teacher}</div>
              </div>
            </CardHeader>
            <CardContent className="p-0 overflow-x-auto">
              <div className="min-w-full">
                <table className="w-full border-collapse text-xs">
                  <thead>
                    <tr>
                      <th className="border border-border p-2 bg-muted">PERIOD</th>
                      {timetableData.days.map((day) => (
                        <th key={day} className="border border-border p-2 bg-muted">
                          {day}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {timetableData.periods.map((period, rowIndex) => (
                      <tr key={period.id}>
                        <td className="border border-border p-2 bg-muted">
                          <div className="font-medium">{period.id}</div>
                          <div className="text-[10px] text-muted-foreground">{period.time}</div>
                        </td>
                        {timetableData.schedule[rowIndex].map((cell, colIndex) => (
                          <td
                            key={`${rowIndex}-${colIndex}`}
                            className={`border border-border p-1 text-center ${cell.color} text-white`}
                          >
                            {cell.subject}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <UnifiedNav activeItem="more" />
    </div>
  )
}

