import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Target, Eye, Award, Users, Building2, TrendingUp } from "lucide-react"
import Link from "next/link"

const values = [
  {
    icon: Target,
    title: "Excellence",
    description:
      "We strive for excellence in every transaction, ensuring our clients receive the highest quality service and properties.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "Complete transparency in all dealings, providing clear information and honest guidance throughout the process.",
  },
  {
    icon: Award,
    title: "Integrity",
    description:
      "We maintain the highest ethical standards, building trust through consistent and reliable business practices.",
  },
  {
    icon: Users,
    title: "Client Focus",
    description:
      "Our clients are at the center of everything we do, with personalized solutions tailored to their unique needs.",
  },
]

const milestones = [
  {
    year: "2009",
    title: "Company Founded",
    description: "Started with a vision to transform commercial real estate in India",
  },
  {
    year: "2012",
    title: "100 Properties Sold",
    description: "Reached our first major milestone with 100 successful transactions",
  },
  { year: "2015", title: "Expanded to 5 Cities", description: "Extended our presence across major metropolitan areas" },
  {
    year: "2018",
    title: "International Launch",
    description: "Opened offices in Dubai and Singapore for global investors",
  },
  { year: "2021", title: "500+ Projects", description: "Crossed 500 successful project completions" },
  { year: "2024", title: "Industry Leader", description: "Recognized as a leading commercial real estate consultancy" },
]

const team = [
  {
    name: "Rajesh Kumar",
    role: "Founder & CEO",
    image: "/professional-indian-businessman-in-suit-corporate-.jpg",
  },
  {
    name: "Priya Sharma",
    role: "Chief Operating Officer",
    image: "/professional-indian-businesswoman-executive-portra.jpg",
  },
  {
    name: "Amit Patel",
    role: "Head of Investments",
    image: "/professional-indian-man-finance-executive-corporat.jpg",
  },
  {
    name: "Sneha Reddy",
    role: "Director of Sales",
    image: "/professional-indian-woman-sales-director-corporate.jpg",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-medium mb-4">About Prestige Realty</p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Building Legacies in Commercial Real Estate
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                For over 15 years, Prestige Realty has been at the forefront of commercial real estate in India. We
                combine deep market expertise with personalized service to deliver exceptional results for businesses
                and investors.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our comprehensive approach covers everything from property identification and due diligence to
                transaction management and post-purchase support. We believe in building long-term relationships based
                on trust, transparency, and mutual success.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-primary text-primary-foreground hover:bg-gold-dark" asChild>
                  <Link href="/contact">Get in Touch</Link>
                </Button>
                <Button
                  variant="outline"
                  className="border-foreground/30 text-foreground hover:bg-foreground/10 bg-transparent"
                  asChild
                >
                  <Link href="/properties">View Properties</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img src="/modern-real-estate-office-interior-with-meeting-ro.jpg" alt="Prestige Realty Office" className="rounded-lg shadow-2xl" />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-xl hidden md:block">
                <p className="text-3xl font-bold">15+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-card rounded-lg p-8 border border-border">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses and investors with strategic real estate solutions that drive growth, maximize
                returns, and create lasting value. We are committed to delivering excellence through expertise,
                innovation, and unwavering client focus.
              </p>
            </div>
            <div className="bg-card rounded-lg p-8 border border-border">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted name in commercial real estate, recognized globally for our integrity, expertise,
                and the exceptional value we create for our clients. We aspire to shape the future of business spaces
                across the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold-dark font-medium mb-2">What Drives Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy text-balance">Our Core Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-lg p-8 text-center shadow-lg">
                <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-gold-dark" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Building2 className="h-10 w-10 text-primary mx-auto mb-4" />
              <p className="text-4xl font-bold text-foreground mb-2">500+</p>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div className="text-center">
              <TrendingUp className="h-10 w-10 text-primary mx-auto mb-4" />
              <p className="text-4xl font-bold text-foreground mb-2">₹5000 Cr+</p>
              <p className="text-muted-foreground">Transaction Value</p>
            </div>
            <div className="text-center">
              <Users className="h-10 w-10 text-primary mx-auto mb-4" />
              <p className="text-4xl font-bold text-foreground mb-2">10,000+</p>
              <p className="text-muted-foreground">Happy Clients</p>
            </div>
            <div className="text-center">
              <Award className="h-10 w-10 text-primary mx-auto mb-4" />
              <p className="text-4xl font-bold text-foreground mb-2">25+</p>
              <p className="text-muted-foreground">Industry Awards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary font-medium mb-2">Our Journey</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">Milestones & Achievements</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border" />
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex items-center gap-8 mb-12 ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                    <span className="text-primary font-bold text-lg">{milestone.year}</span>
                    <h3 className="text-xl font-semibold text-foreground mt-1">{milestone.title}</h3>
                    <p className="text-muted-foreground mt-2">{milestone.description}</p>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                  <div className="w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold-dark font-medium mb-2">Leadership</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy text-balance">Meet Our Team</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-lg overflow-hidden shadow-lg group">
                <div className="relative overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-navy">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-navy via-navy-light to-navy">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Ready to Work With Us?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your commercial real estate goals.
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-gold-dark" asChild>
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
