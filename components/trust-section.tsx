const partners = [
  { name: "Goldman Properties", logo: "/goldman-properties-real-estate-company-logo-minima.jpg" },
  { name: "Apex Developers", logo: "/apex-developers-construction-company-logo-minimal.jpg" },
  { name: "Metro Realty", logo: "/metro-realty-property-company-logo-minimal.jpg" },
  { name: "Prime Estates", logo: "/prime-estates-real-estate-investment-logo-minimal.jpg" },
  { name: "Urban Capital", logo: "/urban-capital-investment-firm-logo-minimal.jpg" },
  { name: "Skyline Group", logo: "/skyline-group-commercial-property-logo-minimal.jpg" },
]

export function TrustSection() {
  return (
    <section className="bg-secondary py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">Trusted By Industry Leaders</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-balance">
            15+ Years of Experience in Delivering Luxury with Excellence
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="bg-card/50 rounded-lg p-6 flex items-center justify-center hover:bg-card transition-colors"
            >
              <img
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                className="h-10 w-auto opacity-60 hover:opacity-100 transition-opacity filter grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
