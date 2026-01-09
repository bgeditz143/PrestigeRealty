import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  Building2,
  TrendingUp,
  FileSearch,
  HandshakeIcon,
  BarChart3,
  Shield,
  ArrowRight,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Building2,
    title: "Property Acquisition",
    description:
      "We help you find and acquire the perfect commercial property that aligns with your business objectives and investment goals.",
    features: [
      "Market research & property identification",
      "Property valuation & due diligence",
      "Negotiation & deal structuring",
      "Documentation & registration support",
    ],
  },
  {
    icon: TrendingUp,
    title: "Investment Advisory",
    description:
      "Expert guidance on commercial real estate investments to maximize returns while managing risk effectively.",
    features: [
      "Portfolio strategy development",
      "Risk assessment & mitigation",
      "ROI analysis & projections",
      "Market timing recommendations",
    ],
  },
  {
    icon: FileSearch,
    title: "Due Diligence",
    description: "Comprehensive property verification services to ensure secure and transparent transactions.",
    features: [
      "Title search & verification",
      "Legal document review",
      "Physical property inspection",
      "Compliance & regulatory checks",
    ],
  },
  {
    icon: HandshakeIcon,
    title: "Leasing Services",
    description: "End-to-end leasing solutions for both property owners and businesses seeking commercial spaces.",
    features: ["Tenant sourcing & screening", "Lease negotiation", "Rent optimization", "Property management support"],
  },
  {
    icon: BarChart3,
    title: "Market Research",
    description: "Data-driven insights and analysis to help you make informed real estate decisions.",
    features: ["Location analysis", "Competitive benchmarking", "Price trend analysis", "Demand-supply assessment"],
  },
  {
    icon: Shield,
    title: "Legal Support",
    description: "Comprehensive legal assistance for all your commercial real estate transactions.",
    features: ["Contract drafting & review", "Regulatory compliance", "Dispute resolution", "Property registration"],
  },
]

const process = [
  {
    step: "01",
    title: "Consultation",
    description: "We understand your requirements, investment goals, and preferences through detailed discussions.",
  },
  {
    step: "02",
    title: "Property Search",
    description: "Our team identifies and shortlists properties that match your criteria from our extensive portfolio.",
  },
  {
    step: "03",
    title: "Due Diligence",
    description: "Comprehensive verification of property titles, legal status, and physical condition.",
  },
  {
    step: "04",
    title: "Transaction",
    description: "Complete support through negotiations, documentation, and final transaction closure.",
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-primary font-medium mb-4">Our Services</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Comprehensive Real Estate Solutions
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              From property acquisition to investment advisory, we offer a complete suite of services designed to meet
              all your commercial real estate needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 rounded-lg bg-gold/20 flex items-center justify-center mb-6">
                  <service.icon className="h-7 w-7 text-gold-dark" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-gold-dark flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary font-medium mb-2">How We Work</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">Our Process</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={item.step} className="relative">
                <div className="bg-card rounded-lg p-8 border border-border h-full">
                  <span className="text-5xl font-bold text-primary/20">{item.step}</span>
                  <h3 className="text-xl font-bold text-foreground mt-4 mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-8 w-8 text-primary/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-navy via-navy-light to-navy">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Ready to Get Started?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Let our experts help you navigate the commercial real estate market with confidence.
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-gold-dark" asChild>
            <Link href="/contact">
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
