import { Button } from "@/components/ui/button"
import { MapPin, TrendingUp, Maximize, Building } from "lucide-react"
import Link from "next/link"

const propertyDetails = [
  { icon: MapPin, label: "Location", value: "BKC, Mumbai" },
  { icon: Maximize, label: "Total Area", value: "2.5 Lac Sq. Ft." },
  { icon: TrendingUp, label: "Expected ROI", value: "12-15% p.a." },
  { icon: Building, label: "Property Type", value: "Grade A Office" },
]

export function HighlightProperty() {
  return (
    <section className="relative py-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/luxury-skyscraper-building-aerial-view-at-dusk-wit.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-navy/80" />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary font-medium mb-4">Featured Investment Opportunity</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">Prestige Business Tower</h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            A landmark commercial development offering premium Grade A office spaces with world-class amenities and
            exceptional investment returns.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {propertyDetails.map((detail) => (
              <div
                key={detail.label}
                className="bg-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-foreground/20"
              >
                <detail.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <p className="text-muted-foreground text-sm mb-1">{detail.label}</p>
                <p className="text-foreground font-semibold">{detail.value}</p>
              </div>
            ))}
          </div>

          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-gold-dark" asChild>
            <Link href="/properties/featured">Explore Property</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
