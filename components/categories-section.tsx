import { Building2, ShoppingBag, Warehouse, LandPlot } from "lucide-react"

const categories = [
  {
    icon: Building2,
    title: "Office Spaces",
    description: "Premium corporate offices in prime business districts with modern amenities.",
  },
  {
    icon: ShoppingBag,
    title: "Retail Outlets",
    description: "High-visibility retail spaces in malls, high streets, and commercial complexes.",
  },
  {
    icon: Warehouse,
    title: "Commercial Spaces",
    description: "Versatile commercial properties for warehousing, manufacturing, and logistics.",
  },
  {
    icon: LandPlot,
    title: "Commercial Land",
    description: "Strategic land parcels for commercial development and investment.",
  },
]

export function CategoriesSection() {
  return (
    <section className="bg-light py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-gold-dark font-medium mb-2">Property Categories</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-balance">
            Maximizing Returns with Smart Property Investments
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div
              key={category.title}
              className="bg-white rounded-lg p-8 text-center group hover:bg-navy transition-colors duration-300 shadow-lg"
            >
              <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <category.icon className="h-8 w-8 text-gold-dark group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-navy group-hover:text-foreground mb-3 transition-colors">
                {category.title}
              </h3>
              <p className="text-muted-foreground group-hover:text-muted-foreground/80 transition-colors">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
