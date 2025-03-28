"use client"

import { useState } from "react"
import { UnifiedHeader } from "@/components/unified-header"
import { UnifiedNav } from "@/components/unified-nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PlusCircle, Send, Users } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CommunicationPage() {
  const [activeTab, setActiveTab] = useState("class-groups")
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null)
  const [groupType, setGroupType] = useState("")
  const [groupName, setGroupName] = useState("")
  const [groupDescription, setGroupDescription] = useState("")
  const [messageText, setMessageText] = useState("")

  const classGroups = [
    {
      id: "10-a",
      name: "Class 10-A",
      unread: 3,
      lastMessage: "Please submit your assignments by Friday",
      time: "10:30 AM",
    },
    { id: "10-b", name: "Class 10-B", unread: 0, lastMessage: "Math test postponed to next week", time: "Yesterday" },
    { id: "9-a", name: "Class 9-A", unread: 1, lastMessage: "Science project guidelines updated", time: "Yesterday" },
    { id: "9-b", name: "Class 9-B", unread: 0, lastMessage: "Parent-teacher meeting scheduled", time: "Mar 25" },
  ]

  const teacherGroups = [
    {
      id: "math-dept",
      name: "Mathematics Department",
      unread: 2,
      lastMessage: "Meeting at 3 PM tomorrow",
      time: "11:45 AM",
    },
    { id: "all-teachers", name: "All Teachers", unread: 0, lastMessage: "Staff meeting on Friday", time: "Yesterday" },
    {
      id: "class-teachers",
      name: "Class Teachers",
      unread: 0,
      lastMessage: "Report card preparation guidelines",
      time: "Mar 26",
    },
  ]

  const parentGroups = [
    {
      id: "parent-10a",
      name: "Class 10-A Parents",
      unread: 1,
      lastMessage: "PTA meeting scheduled for next week",
      time: "9:15 AM",
    },
    {
      id: "parent-council",
      name: "Parent Council",
      unread: 0,
      lastMessage: "Annual day preparations",
      time: "Yesterday",
    },
  ]

  const renderGroups = (groups: typeof classGroups) => (
    <div className="space-y-2">
      {groups.map((group) => (
        <div
          key={group.id}
          className={`p-3 rounded-md border border-border flex justify-between items-center cursor-pointer ${selectedGroup === group.id ? "bg-accent" : ""}`}
          onClick={() => setSelectedGroup(group.id)}
        >
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center">
              <Users className="h-5 w-5" />
            </div>
            <div>
              <div className="font-medium">{group.name}</div>
              <div className="text-xs text-muted-foreground">{group.lastMessage}</div>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <div className="text-xs text-muted-foreground">{group.time}</div>
            {group.unread > 0 && (
              <div className="h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center mt-1">
                {group.unread}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )

  const handleSendMessage = () => {
    if (messageText.trim()) {
      // Logic to send message would go here
      setMessageText("")
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <UnifiedHeader title="Messages" />

      <main className="flex-1 container max-w-md mx-auto p-4">
        <div className="space-y-6 pb-16">
          <div>
            <h1 className="text-2xl font-bold">Communication</h1>
            <p className="text-muted-foreground mt-1">Connect with teachers, students, and parents</p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3 mb-4">
              <TabsTrigger value="class-groups">Class Groups</TabsTrigger>
              <TabsTrigger value="teacher-groups">Teacher Groups</TabsTrigger>
              <TabsTrigger value="parent-groups">Parent Groups</TabsTrigger>
            </TabsList>

            <TabsContent value="class-groups">
              <Card className="border border-border">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Class Groups</CardTitle>
                  <Button variant="outline" size="sm" className="h-8 px-2">
                    <PlusCircle className="h-4 w-4 mr-1" />
                    New Message
                  </Button>
                </CardHeader>
                <CardContent>{renderGroups(classGroups)}</CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="teacher-groups">
              <Card className="border border-border">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Teacher Groups</CardTitle>
                  <Button variant="outline" size="sm" className="h-8 px-2">
                    <PlusCircle className="h-4 w-4 mr-1" />
                    New Message
                  </Button>
                </CardHeader>
                <CardContent>{renderGroups(teacherGroups)}</CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="parent-groups">
              <Card className="border border-border">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Parent Groups</CardTitle>
                  <Button variant="outline" size="sm" className="h-8 px-2">
                    <PlusCircle className="h-4 w-4 mr-1" />
                    New Message
                  </Button>
                </CardHeader>
                <CardContent>{renderGroups(parentGroups)}</CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {selectedGroup && (
            <Card className="border border-border">
              <CardHeader className="pb-2">
                <CardTitle>
                  {activeTab === "class-groups"
                    ? classGroups.find((g) => g.id === selectedGroup)?.name
                    : activeTab === "teacher-groups"
                      ? teacherGroups.find((g) => g.id === selectedGroup)?.name
                      : parentGroups.find((g) => g.id === selectedGroup)?.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border border-border rounded-md p-3 space-y-4 max-h-[300px] overflow-y-auto">
                  <div className="flex flex-col items-start">
                    <div className="bg-secondary rounded-lg p-2 max-w-[80%]">
                      <p className="text-sm">Good morning everyone!</p>
                    </div>
                    <span className="text-xs text-muted-foreground mt-1">Mrs. Sharma • 9:30 AM</span>
                  </div>

                  <div className="flex flex-col items-end">
                    <div className="bg-accent rounded-lg p-2 max-w-[80%]">
                      <p className="text-sm">
                        I wanted to remind you about the upcoming test next week. Please ensure you've completed all the
                        assigned exercises.
                      </p>
                    </div>
                    <span className="text-xs text-muted-foreground mt-1">You • 9:45 AM</span>
                  </div>

                  <div className="flex flex-col items-start">
                    <div className="bg-secondary rounded-lg p-2 max-w-[80%]">
                      <p className="text-sm">Will the test cover Chapter 7 as well?</p>
                    </div>
                    <span className="text-xs text-muted-foreground mt-1">Mr. Patel • 10:15 AM</span>
                  </div>

                  <div className="flex flex-col items-end">
                    <div className="bg-accent rounded-lg p-2 max-w-[80%]">
                      <p className="text-sm">
                        Yes, the test will cover Chapters 5 through 7. I'll share a detailed syllabus by tomorrow.
                      </p>
                    </div>
                    <span className="text-xs text-muted-foreground mt-1">You • 10:30 AM</span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Textarea
                    placeholder="Type your message..."
                    className="min-h-[60px]"
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                  />
                  <Button className="px-3" onClick={handleSendMessage}>
                    <Send className="h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          <Card className="border border-border">
            <CardHeader>
              <CardTitle>Create New Group</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Group Type</label>
                  <Select value={groupType} onValueChange={setGroupType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select group type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="class">Class Group</SelectItem>
                      <SelectItem value="teacher">Teacher Group</SelectItem>
                      <SelectItem value="parent">Parent Group</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Group Name</label>
                  <Input
                    placeholder="Enter group name"
                    value={groupName}
                    onChange={(e) => setGroupName(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Description (Optional)</label>
                  <Textarea
                    placeholder="Enter group description"
                    value={groupDescription}
                    onChange={(e) => setGroupDescription(e.target.value)}
                  />
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Create Group</Button>
            </CardFooter>
          </Card>
        </div>
      </main>

      <UnifiedNav activeItem="communication" />
    </div>
  )
}

