"use client"

import { useState } from "react"
import { UnifiedHeader } from "@/components/unified-header"
import { UnifiedNav } from "@/components/unified-nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CreditCard, Edit, LogOut, User } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"

export default function ProfilePage() {
  const [selectedMonth, setSelectedMonth] = useState("april")
  const [selectedRole, setSelectedRole] = useState("student")
  const [email, setEmail] = useState("akshat@example.com")
  const [password, setPassword] = useState("••••••••")
  const [language, setLanguage] = useState("en")
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [smsNotifications, setSmsNotifications] = useState(true)

  const roles = [
    { id: "student", name: "Student" },
    { id: "teacher", name: "Teacher" },
    { id: "parent", name: "Parent" },
    { id: "admin", name: "Administrator" },
  ]

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
      <UnifiedHeader title="Profile" />

      <main className="flex-1 container max-w-md mx-auto p-4">
        <div className="space-y-6 pb-16">
          <Card className="border border-border">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="h-16 w-16 rounded-full bg-accent overflow-hidden flex items-center justify-center">
                  <User className="h-8 w-8" />
                </div>
                <div className="flex-1">
                  <h2 className="font-bold text-xl"> Babar Azam</h2>
                  <p className="text-sm text-muted-foreground">Class 11-A | Roll No: 1</p>
                </div>
                <Button variant="ghost" size="icon">
                  <Edit className="h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="info">
            <TabsList className="grid w-full grid-cols-3 mb-4">
              <TabsTrigger value="info">Information</TabsTrigger>
              <TabsTrigger value="fees">Fee Payment</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="info">
              <Card className="border border-border">
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm font-medium">Full Name</div>
                        <div className="mt-1">Babar Azam</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium">Date of Birth</div>
                        <div className="mt-1">21 Nov 2024</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium">Gender</div>
                        <div className="mt-1">Female</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium">Blood Group</div>
                        <div className="mt-1">D+</div>
                      </div>
                    </div>

                    <div className="pt-2">
                      <div className="text-sm font-medium">Address</div>
                      <div className="mt-1">Telco Colony, Jamshedpur, Jharkhand, 831004</div>
                    </div>

                    <div className="pt-2">
                      <div className="text-sm font-medium">Contact Information</div>
                      <div className="grid grid-cols-2 gap-4 mt-1">
                        <div>
                          <div className="text-xs text-muted-foreground">Email</div>
                          <div>@example.com</div>
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground">Phone</div>
                          <div>+91 9875678919</div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2">
                      <div className="text-sm font-medium">Parent/Guardian Information</div>
                      <div className="grid grid-cols-2 gap-4 mt-1">
                        <div>
                          <div className="text-xs text-muted-foreground">Father's Name</div>
                          <div>Virat Kohli</div>
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground">Mother's Name</div>
                          <div>Mamata Banerjee</div>
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground">Parent's Email</div>
                          <div>@example.com</div>
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground">Parent's Phone</div>
                          <div>+91 9876518742</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Edit Information
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border border-border mt-6">
                <CardHeader>
                  <CardTitle>Academic Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm font-medium">Class</div>
                        <div className="mt-1">12-A</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium">Roll Number</div>
                        <div className="mt-1">4</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium">Admission Number</div>
                        <div className="mt-1">104/14</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium">Academic Year</div>
                        <div className="mt-1">2025-26</div>
                      </div>
                    </div>

                    <div className="pt-2">
                      <div className="text-sm font-medium">Class Teacher</div>
                      <div className="mt-1">Mrs. Jaswinder Kaur</div>
                    </div>

                    <div className="pt-2">
                      <div className="text-sm font-medium">Role</div>
                      <div className="flex items-center space-x-4 mt-1">
                        <Select value={selectedRole} onValueChange={setSelectedRole}>
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select role" />
                          </SelectTrigger>
                          <SelectContent>
                            {roles.map((role) => (
                              <SelectItem key={role.id} value={role.id}>
                                {role.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <Button variant="outline" size="sm">
                          Update Role
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
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

            <TabsContent value="settings">
              <Card className="border border-border">
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Password</label>
                      <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Language</label>
                      <Select value={language} onValueChange={setLanguage}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select language" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="hi">Hindi</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Notifications</label>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="email-notifications"
                          className="h-4 w-4"
                          checked={emailNotifications}
                          onChange={(e) => setEmailNotifications(e.target.checked)}
                        />
                        <label htmlFor="email-notifications" className="text-sm">
                          Email Notifications
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="sms-notifications"
                          className="h-4 w-4"
                          checked={smsNotifications}
                          onChange={(e) => setSmsNotifications(e.target.checked)}
                        />
                        <label htmlFor="sms-notifications" className="text-sm">
                          SMS Notifications
                        </label>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                  <Button className="w-full">Save Settings</Button>
                  <Button variant="outline" className="w-full text-red-500">
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
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

