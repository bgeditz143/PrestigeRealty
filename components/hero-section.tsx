import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

const features = ["Premium Office & Retail Spaces", "Data-Driven Investment Insights", "End-to-End Transaction Support"]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/luxury-modern-city-skyline-at-night-with-illuminat.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
      </div>

      <div className="relative container mx-auto px-4 py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 text-balance">
            Strategic Real Estate for <span className="text-primary">Business & Investment</span> Growth
          </h1>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Discover premium commercial properties that drive business success. Our expert team delivers tailored
            solutions for investors and enterprises seeking exceptional real estate opportunities.
          </p>

          <ul className="space-y-3 mb-10">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-foreground">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-gold-dark" asChild>
              <Link href="/contact">
                Get Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-foreground/30 text-foreground hover:bg-foreground/10 bg-transparent"
              asChild
            >
              <Link href="/properties">Explore Properties</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
