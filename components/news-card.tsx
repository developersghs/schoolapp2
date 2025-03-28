import { Card, CardContent } from "@/components/ui/card"
import { CalendarIcon } from "lucide-react"
import Link from "next/link"

interface NewsCardProps {
  title: string
  date: string
  excerpt: string
  link?: string
}

export function NewsCard({ title, date, excerpt, link = "#" }: NewsCardProps) {
  return (
    <Link href={link} className="no-underline">
      <Card className="hover:bg-accent transition-colors border border-border">
        <CardContent className="p-4">
          <h3 className="font-semibold">{title}</h3>
          <div className="flex items-center text-xs text-muted-foreground mt-1 mb-2">
            <CalendarIcon className="h-3 w-3 mr-1" />
            {date}
          </div>
          <p className="text-sm text-muted-foreground">{excerpt}</p>
        </CardContent>
      </Card>
    </Link>
  )
}

