import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, ArrowRight } from "lucide-react"
import Link from "next/link"

const properties = [
  {
    id: 1,
    name: "Horizon Business Tower",
    location: "Financial District, Mumbai",
    description: "Grade A office space with panoramic city views and premium amenities.",
    price: "₹2.5 Cr onwards",
    type: "Office Space",
    image: "/modern-glass-office-tower-building-exterior-with-b.jpg",
  },
  {
    id: 2,
    name: "Metro Mall Complex",
    location: "South Delhi, New Delhi",
    description: "Prime retail destination with high footfall and excellent visibility.",
    price: "₹4.8 Cr onwards",
    type: "Retail Space",
    image: "/luxury-shopping-mall-interior-with-escalators-and-.jpg",
  },
  {
    id: 3,
    name: "Tech Park One",
    location: "Whitefield, Bangalore",
    description: "State-of-the-art IT park with world-class infrastructure.",
    price: "₹1.8 Cr onwards",
    type: "Commercial Space",
    image: "/modern-tech-park-campus-building-with-landscaped-g.jpg",
  },
  {
    id: 4,
    name: "Gateway Commercial Hub",
    location: "BKC, Mumbai",
    description: "Premium commercial property in India's most sought-after business district.",
    price: "₹6.2 Cr onwards",
    type: "Office Space",
    image: "/luxury-corporate-office-building-at-night-with-lig.jpg",
  },
  {
    id: 5,
    name: "Urban Square",
    location: "Cyber City, Gurgaon",
    description: "Mixed-use development with retail and office spaces.",
    price: "₹3.1 Cr onwards",
    type: "Mixed Use",
    image: "/mixed-use-commercial-development-building-modern-a.jpg",
  },
  {
    id: 6,
    name: "Prime Business Center",
    location: "Anna Salai, Chennai",
    description: "Strategically located commercial property with excellent connectivity.",
    price: "₹1.5 Cr onwards",
    type: "Commercial Space",
    image: "/business-center-building-exterior-modern-glass-fac.jpg",
  },
]

export function FeaturedProperties() {
  return (
    <section className="bg-light py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-gold-dark font-medium mb-2">Featured Listings</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-balance">
            Find Profitable & Prominent Property
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <Card
              key={property.id}
              className="bg-white border-0 shadow-lg overflow-hidden group hover:shadow-xl transition-shadow"
            >
              <div className="relative overflow-hidden">
                <img
                  src={property.image || "/placeholder.svg"}
                  alt={property.name}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-navy text-white text-xs font-medium px-3 py-1 rounded-full">
                  {property.type}
                </span>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-navy mb-2">{property.name}</h3>
                <div className="flex items-center gap-2 text-muted-foreground mb-3">
                  <MapPin className="h-4 w-4 text-gold-dark" />
                  <span className="text-sm">{property.location}</span>
                </div>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{property.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gold-dark font-bold">{property.price}</span>
                  <Button variant="ghost" size="sm" className="text-navy hover:text-gold-dark" asChild>
                    <Link href={`/properties/${property.id}`}>
                      View Details
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-navy text-white hover:bg-navy-light" asChild>
            <Link href="/properties">
              View All Properties
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
