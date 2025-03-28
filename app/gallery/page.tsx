import { UnifiedHeader } from "@/components/unified-header"
import { UnifiedNav } from "@/components/unified-nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function GalleryPage() {
  const galleryCategories = [
    {
      id: "events",
      name: "School Events",
      images: [
        { id: 1, src: "/images/gallery/event.jpeg", alt: "Annual Day Celebration" },
        { id: 2, src: "/images/gallery/staff.webp", alt: "Staff Meeting" },
      ],
    },
    {
      id: "campus",
      name: "Campus",
      images: [
        { id: 3, src: "/images/school-building.jpeg", alt: "School Building" },
        { id: 4, src: "/images/gallery/garden.jpeg", alt: "School Garden" },
      ],
    },
    {
      id: "facilities",
      name: "Facilities",
      images: [
        { id: 5, src: "/images/gallery/lab.jpeg", alt: "Chemistry Lab" },
        { id: 6, src: "/images/gallery/computer-lab.jpeg", alt: "Computer Lab" },
        { id: 7, src: "/images/gallery/library.jpeg", alt: "Library" },
        { id: 8, src: "/images/gallery/sports-court.jpeg", alt: "Sports Court" },
      ],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <UnifiedHeader title="Gallery" />

      <main className="flex-1 container max-w-md mx-auto p-4">
        <div className="space-y-6 pb-16">
          <div>
            <h1 className="text-2xl font-bold">Gallery</h1>
            <p className="text-muted-foreground mt-1">Explore photos from school events and activities</p>
          </div>

          <div className="space-y-6">
            {galleryCategories.map((category) => (
              <div key={category.id} className="space-y-4">
                <h2 className="text-xl font-bold">{category.name}</h2>
                <div className="grid grid-cols-2 gap-2">
                  {category.images.map((image) => (
                    <Card key={image.id} className="overflow-hidden border border-border">
                      <CardContent className="p-0">
                        <Image
                          src={image.src || "/placeholder.svg"}
                          alt={image.alt}
                          width={200}
                          height={150}
                          className="w-full h-32 object-cover grayscale-img"
                        />
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  View All {category.name} Photos
                </Button>
              </div>
            ))}
          </div>
        </div>
      </main>

      <UnifiedNav activeItem="more" />
    </div>
  )
}

