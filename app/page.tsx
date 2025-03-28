import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { Calendar, BarChartIcon as ChartBar, Clock, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { UnifiedHeader } from "@/components/unified-header"
import { UnifiedNav } from "@/components/unified-nav"

export default function HomePage() {
  const quickAccess = [
    { icon: <Calendar className="h-8 w-8 mb-2" />, name: "Calendar", link: "/calendar" },
    { icon: <Clock className="h-8 w-8 mb-2" />, name: "Timetable", link: "/timetable" },
    { icon: <ChartBar className="h-8 w-8 mb-2" />, name: "Analytics", link: "/analytics" },
    { icon: <Users className="h-8 w-8 mb-2" />, name: "Classes", link: "/classes" },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <UnifiedHeader />

      <main className="flex-1 container max-w-md mx-auto p-4">
        <Tabs defaultValue="home" className="w-full">
          <TabsContent value="home" className="mt-0">
            <div className="space-y-4 pb-16">
              <Card className="border border-border overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/images/school-building.jpeg"
                      alt="School campus"
                      fill
                      className="object-cover grayscale-img"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Image
                          src="/icons/school-logo.png"
                          alt="Gulmohur High School"
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                        <h2 className="text-xl font-bold text-white">Gulmohur High School</h2>
                      </div>
                      <p className="text-white/80 text-sm">Stop not till the goal is reached.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-2 gap-4">
                {quickAccess.map((item, index) => (
                  <Link key={index} href={item.link} className="no-underline">
                    <Card className="h-full hover:bg-accent transition-colors border border-border">
                      <CardContent className="flex flex-col items-center justify-center p-4 text-center">
                        {item.icon}
                        <h3 className="font-medium">{item.name}</h3>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>

              <Card className="border border-border">
                <CardContent className="p-4">
                  <h2 className="text-xl font-bold mb-4">Quick Stats</h2>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Attendance</span>
                        <span className="text-sm font-medium">92%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: "92%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Academic Performance</span>
                        <span className="text-sm font-medium">85%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: "85%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Fee Payment</span>
                        <span className="text-sm font-medium">2/12 months</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: "16.67%" }}></div>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4" asChild>
                    <Link href="/analytics">View Detailed Analytics</Link>
                  </Button>
                </CardContent>
              </Card>

              <div className="text-center text-sm text-muted-foreground pt-4">
                Made by Akshat Bhardwaj and Ayush Mishra
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <UnifiedNav activeItem="home" />
    </div>
  )
}

