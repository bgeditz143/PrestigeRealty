import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  MapPin,
  Maximize,
  Building2,
  TrendingUp,
  Car,
  Shield,
  Zap,
  ArrowUpDown,
  Phone,
  Mail,
  ArrowLeft,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"

const property = {
  id: 1,
  name: "Horizon Business Tower",
  location: "Financial District, Mumbai",
  fullAddress: "Plot No. 45, Financial District, Bandra Kurla Complex, Mumbai - 400051",
  description:
    "Horizon Business Tower is a landmark Grade A commercial development offering premium office spaces in the heart of Mumbai's financial district. With state-of-the-art infrastructure, world-class amenities, and unparalleled connectivity, this property represents the pinnacle of corporate real estate.",
  price: "₹2.5 Cr onwards",
  pricePerSqFt: "₹25,000 per sq.ft",
  type: "Office Space",
  area: "2,500 - 10,000 sq.ft",
  totalArea: "5,00,000 sq.ft",
  floors: "45 Floors",
  roi: "12-15% p.a.",
  possession: "Ready to Move",
  images: [
    "/modern-office-building-exterior-glass-facade-dayli.jpg",
    "/corporate-office-interior-open-floor-plan-modern-d.jpg",
    "/office-building-lobby-with-reception-desk-marble-f.jpg",
    "/conference-room-in-modern-office-building-with-gla.jpg",
  ],
  amenities: [
    { icon: Car, name: "Multi-level Parking", description: "500+ covered parking spaces" },
    { icon: Shield, name: "24/7 Security", description: "Advanced surveillance & access control" },
    { icon: Zap, name: "100% Power Backup", description: "Uninterrupted power supply" },
    { icon: ArrowUpDown, name: "High-Speed Elevators", description: "12 elevators with smart dispatching" },
  ],
  highlights: [
    "LEED Gold Certified Green Building",
    "Central Air Conditioning",
    "High-speed Fiber Optic Internet",
    "Food Court & Cafeteria",
    "Conference & Meeting Rooms",
    "Dedicated Service Elevators",
    "Fire Safety Systems",
    "Landscaped Terraces",
  ],
}

export default function PropertyDetailPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Breadcrumb */}
      <section className="pt-28 pb-4 bg-background">
        <div className="container mx-auto px-4">
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground" asChild>
            <Link href="/properties">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Properties
            </Link>
          </Button>
        </div>
      </section>

      {/* Property Images */}
      <section className="bg-background pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:row-span-2">
              <img
                src={property.images[0] || "/placeholder.svg"}
                alt={property.name}
                className="w-full h-full min-h-[300px] md:min-h-[500px] object-cover rounded-lg"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {property.images.slice(1).map((img, index) => (
                <img
                  key={index}
                  src={img || "/placeholder.svg"}
                  alt={`${property.name} - ${index + 2}`}
                  className="w-full h-40 md:h-60 object-cover rounded-lg"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Property Details */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <span className="inline-block bg-primary/20 text-primary text-sm font-medium px-3 py-1 rounded-full mb-4">
                  {property.type}
                </span>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{property.name}</h1>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>{property.fullAddress}</span>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                <div className="bg-card rounded-lg p-4 border border-border">
                  <Maximize className="h-6 w-6 text-primary mb-2" />
                  <p className="text-muted-foreground text-sm">Area Range</p>
                  <p className="font-semibold text-foreground">{property.area}</p>
                </div>
                <div className="bg-card rounded-lg p-4 border border-border">
                  <Building2 className="h-6 w-6 text-primary mb-2" />
                  <p className="text-muted-foreground text-sm">Total Floors</p>
                  <p className="font-semibold text-foreground">{property.floors}</p>
                </div>
                <div className="bg-card rounded-lg p-4 border border-border">
                  <TrendingUp className="h-6 w-6 text-primary mb-2" />
                  <p className="text-muted-foreground text-sm">Expected ROI</p>
                  <p className="font-semibold text-foreground">{property.roi}</p>
                </div>
                <div className="bg-card rounded-lg p-4 border border-border">
                  <CheckCircle className="h-6 w-6 text-primary mb-2" />
                  <p className="text-muted-foreground text-sm">Possession</p>
                  <p className="font-semibold text-foreground">{property.possession}</p>
                </div>
              </div>

              {/* Description */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-foreground mb-4">About This Property</h2>
                <p className="text-muted-foreground leading-relaxed">{property.description}</p>
              </div>

              {/* Amenities */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-foreground mb-6">Amenities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {property.amenities.map((amenity) => (
                    <div
                      key={amenity.name}
                      className="flex items-start gap-4 bg-card rounded-lg p-4 border border-border"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <amenity.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{amenity.name}</h3>
                        <p className="text-muted-foreground text-sm">{amenity.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Key Highlights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {property.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-lg p-6 border border-border sticky top-28">
                <div className="mb-6">
                  <p className="text-muted-foreground text-sm">Price Starting From</p>
                  <p className="text-3xl font-bold text-primary">{property.price}</p>
                  <p className="text-muted-foreground text-sm mt-1">{property.pricePerSqFt}</p>
                </div>

                <div className="space-y-4 mb-6">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-gold-dark" size="lg">
                    Schedule a Visit
                  </Button>
                  <Button variant="outline" className="w-full border-foreground/30 bg-transparent" size="lg">
                    Download Brochure
                  </Button>
                </div>

                <div className="border-t border-border pt-6">
                  <h3 className="font-semibold text-foreground mb-4">Contact Sales Team</h3>
                  <div className="space-y-3">
                    <a
                      href="tel:+919876543210"
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Phone className="h-5 w-5" />
                      <span>+91 98765 43210</span>
                    </a>
                    <a
                      href="mailto:sales@prestigerealty.com"
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                      <span>sales@prestigerealty.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
