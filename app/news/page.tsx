import { SchoolHeader } from "@/components/school-header"
import { NewsCard } from "@/components/news-card"
import { TabsList, TabsTrigger, Tabs } from "@/components/ui/tabs"
import { Bell, BookOpen, Home, Info, User } from "lucide-react"
import Link from "next/link"

export default function NewsPage() {
  const newsItems = [
    {
      id: 1,
      title: "Annual Sports Day Announced",
      date: "March 15, 2025",
      excerpt:
        "The annual sports day will be held on April 10th. All students are encouraged to participate in various athletic events. Parents are invited to attend and cheer for their children.",
      link: "/news/1",
    },
    {
      id: 2,
      title: "Science Exhibition Winners",
      date: "March 10, 2025",
      excerpt:
        "Congratulations to all participants and winners of this year's science exhibition. Special recognition goes to Class 10 students for their innovative projects on renewable energy.",
      link: "/news/2",
    },
    {
      id: 3,
      title: "New Computer Lab Inauguration",
      date: "March 5, 2025",
      excerpt:
        "We are pleased to announce the inauguration of our new state-of-the-art computer lab equipped with the latest technology to enhance digital learning experiences for our students.",
      link: "/news/3",
    },
    {
      id: 4,
      title: "Parent-Teacher Meeting Schedule",
      date: "March 1, 2025",
      excerpt:
        "The next parent-teacher meeting is scheduled for March 30th. Parents are requested to attend to discuss their child's academic progress and address any concerns.",
      link: "/news/4",
    },
    {
      id: 5,
      title: "Cultural Festival Preparations",
      date: "February 25, 2025",
      excerpt:
        "Preparations for the annual cultural festival are underway. Students interested in participating should register with their class teachers by March 15th.",
      link: "/news/5",
    },
    {
      id: 6,
      title: "School Achieves 100% Results in Board Exams",
      date: "February 20, 2025",
      excerpt:
        "We are proud to announce that our school has achieved 100% pass results in the recent board examinations. Congratulations to all students, teachers, and parents for this achievement.",
      link: "/news/6",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <SchoolHeader />

      <main className="flex-1 container max-w-md mx-auto p-4">
        <div className="space-y-6 pb-16">
          <div>
            <h1 className="text-2xl font-bold">News & Announcements</h1>
            <p className="text-muted-foreground mt-1">Stay updated with the latest happenings at our school</p>
          </div>

          <div className="space-y-4">
            {newsItems.map((news) => (
              <NewsCard key={news.id} title={news.title} date={news.date} excerpt={news.excerpt} link={news.link} />
            ))}
          </div>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-16 bg-background border-t z-10">
        <Tabs defaultValue="news" className="h-full">
          <TabsList className="h-full grid grid-cols-5">
            <TabsTrigger value="home" asChild>
              <Link href="/" className="flex flex-col items-center justify-center">
                <Home className="h-5 w-5" />
                <span className="text-xs mt-1">Home</span>
              </Link>
            </TabsTrigger>
            <TabsTrigger value="about" asChild>
              <Link href="/about" className="flex flex-col items-center justify-center">
                <Info className="h-5 w-5" />
                <span className="text-xs mt-1">About</span>
              </Link>
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

