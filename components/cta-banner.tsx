import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CtaBanner() {
  return (
    <section className="bg-gradient-to-r from-navy via-navy-light to-navy py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
          Invest in Prime Commercial Properties Today
        </h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
          Maximize your returns and grow your business with our expertly curated portfolio of premium commercial real
          estate opportunities.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-gold-dark" asChild>
            <Link href="/contact">
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-foreground/30 text-foreground hover:bg-foreground/10 bg-transparent"
            asChild
          >
            <Link href="/properties">Browse Properties</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
