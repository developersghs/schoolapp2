import { SchoolHeader } from "@/components/school-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bell, BookOpen, Home, Info, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background dark">
      <SchoolHeader />

      <main className="flex-1 container max-w-md mx-auto p-4">
        <div className="space-y-6 pb-16">
          <div>
            <h1 className="text-2xl font-bold">About Our School</h1>
            <p className="text-muted-foreground mt-1">
              Learn about Gulmohur High School's history, mission, and values
            </p>
          </div>

          <Card className="border border-border overflow-hidden">
            <CardContent className="p-0">
              <div className="relative w-full h-48">
                <Image src="/images/school-building.png" alt="School building" fill className="object-cover" />
              </div>
              <div className="p-4 space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <Image
                    src="/icons/school-logo.png"
                    alt="School Logo"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <h2 className="text-xl font-bold">Our History</h2>
                </div>
                <p className="text-sm text-muted-foreground">
                  Gulmohur High School, established in 1954 by the All India Women Conference (AIWC) in Jamshedpur's
                  Telco Colony, began as a modest kindergarten with 10 students and two teachers, marking it as the
                  area's first English medium school. Today, it has grown into a co-educational institution serving
                  approximately 3,000 students from Nursery to Class XII. The school is dedicated to fostering
                  21st-century skills such as critical thinking, collaboration, and communication, aiming to empower
                  students to reach their full potential and become compassionate leaders. In 2024, celebrating its 70th
                  anniversary, Gulmohur High School hosted 'Horizon,' an interschool event featuring 25 schools,
                  showcasing its commitment to academic excellence and holistic development.
                </p>

                <div>
                  <h2 className="text-xl font-bold">Our Mission</h2>
                  <p className="text-sm text-muted-foreground mt-2">
                    To empower every student to achieve their full potential and nurture compassionate leaders of
                    tomorrow, Gulmohur High School is dedicated to excellence in education through innovative teaching
                    and personalized support, we strive to inspire a lifelong love for learning and the development of
                    critical thinking skills in an evolving and interconnected world.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold">Our Vision</h2>
                  <p className="text-sm text-muted-foreground mt-2">
                    To become a nationally recognized center of educational excellence, celebrated for its exceptional
                    student outcomes across academics, sports, and fine arts. Our school will be at the forefront of
                    educational innovation and leveraging cutting-edge technology.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold">Core Values</h2>
                  <ul className="text-sm text-muted-foreground mt-2 space-y-2">
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-accent flex items-center justify-center mr-2 mt-0.5">
                        <span className="text-xs font-bold">1</span>
                      </div>
                      <span>
                        <strong>Excellence:</strong> Striving for the highest standards in academic and personal
                        achievement
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-accent flex items-center justify-center mr-2 mt-0.5">
                        <span className="text-xs font-bold">2</span>
                      </div>
                      <span>
                        <strong>Integrity:</strong> Upholding honesty, ethics, and moral principles in all actions
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-accent flex items-center justify-center mr-2 mt-0.5">
                        <span className="text-xs font-bold">3</span>
                      </div>
                      <span>
                        <strong>Respect:</strong> Valuing diversity and treating all individuals with dignity
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-accent flex items-center justify-center mr-2 mt-0.5">
                        <span className="text-xs font-bold">4</span>
                      </div>
                      <span>
                        <strong>Innovation:</strong> Encouraging creative thinking and problem-solving skills
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-accent flex items-center justify-center mr-2 mt-0.5">
                        <span className="text-xs font-bold">5</span>
                      </div>
                      <span>
                        <strong>Community:</strong> Fostering a sense of belonging and social responsibility
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-border">
            <CardContent className="p-4 space-y-4">
              <h2 className="text-xl font-bold">School Leadership</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="h-16 w-16 rounded-full bg-accent overflow-hidden flex items-center justify-center">
                    <User className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Mrs. Priti Sinha</h3>
                    <p className="text-sm text-muted-foreground">Principal</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="h-16 w-16 rounded-full bg-accent overflow-hidden flex items-center justify-center">
                    <User className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Mrs. Archana Srivastava</h3>
                    <p className="text-sm text-muted-foreground">Vice Principal</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-border">
            <CardContent className="p-4">
              <h2 className="text-xl font-bold">Contact Information</h2>
              <div className="space-y-2 mt-4">
                <p className="text-sm">
                  <strong>Address:</strong> Gulmohur High School Outer Road, Telco Town Jamshedpur-831004, Jharkhand,
                  India
                </p>
                <p className="text-sm">
                  <strong>Phone:</strong> 06572286811
                </p>
                <p className="text-sm">
                  <strong>Email:</strong> info@gulmohurschool.org
                </p>
                <p className="text-sm">
                  <strong>Website:</strong> www.gulmohurschool.org
                </p>
              </div>
              <Button className="w-full mt-4" variant="outline">
                Contact Us
              </Button>
            </CardContent>
          </Card>
        </div>
        <div className="mt-8 pt-4 border-t text-center">
          <p className="text-sm text-muted-foreground">Made by Akshat Bhardwaj and Ayush Mishra</p>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-16 bg-background border-t z-10">
        <Tabs defaultValue="about" className="h-full">
          <TabsList className="h-full grid grid-cols-5">
            <TabsTrigger value="home" asChild>
              <Link href="/" className="flex flex-col items-center justify-center">
                <Home className="h-5 w-5" />
                <span className="text-xs mt-1">Home</span>
              </Link>
            </TabsTrigger>
            <TabsTrigger
              value="about"
              className="flex flex-col items-center justify-center data-[state=active]:text-primary"
            >
              <Info className="h-5 w-5" />
              <span className="text-xs mt-1">About</span>
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
            <TabsTrigger value="profile" asChild>
              <Link href="/student-portal" className="flex flex-col items-center justify-center">
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

