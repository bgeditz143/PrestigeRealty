"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Search, SlidersHorizontal, ArrowRight, X } from "lucide-react"
import Link from "next/link"

const allProperties = [
  {
    id: 1,
    name: "Horizon Business Tower",
    location: "Financial District, Mumbai",
    city: "Mumbai",
    description: "Grade A office space with panoramic city views and premium amenities.",
    price: "₹2.5 Cr onwards",
    type: "Office Space",
    area: "2,500 - 10,000 sq.ft",
    image: "/modern-glass-office-tower-building-exterior-with-b.jpg",
  },
  {
    id: 2,
    name: "Metro Mall Complex",
    location: "South Delhi, New Delhi",
    city: "Delhi",
    description: "Prime retail destination with high footfall and excellent visibility.",
    price: "₹4.8 Cr onwards",
    type: "Retail Space",
    area: "1,000 - 5,000 sq.ft",
    image: "/luxury-shopping-mall-interior-with-escalators-and-.jpg",
  },
  {
    id: 3,
    name: "Tech Park One",
    location: "Whitefield, Bangalore",
    city: "Bangalore",
    description: "State-of-the-art IT park with world-class infrastructure.",
    price: "₹1.8 Cr onwards",
    type: "Commercial Space",
    area: "3,000 - 15,000 sq.ft",
    image: "/modern-tech-park-campus-building-with-green-landsc.jpg",
  },
  {
    id: 4,
    name: "Gateway Commercial Hub",
    location: "BKC, Mumbai",
    city: "Mumbai",
    description: "Premium commercial property in India's most sought-after business district.",
    price: "₹6.2 Cr onwards",
    type: "Office Space",
    area: "5,000 - 20,000 sq.ft",
    image: "/luxury-corporate-office-building-at-night-with-lig.jpg",
  },
  {
    id: 5,
    name: "Urban Square",
    location: "Cyber City, Gurgaon",
    city: "Gurgaon",
    description: "Mixed-use development with retail and office spaces.",
    price: "₹3.1 Cr onwards",
    type: "Mixed Use",
    area: "2,000 - 8,000 sq.ft",
    image: "/mixed-use-commercial-development-building-modern-a.jpg",
  },
  {
    id: 6,
    name: "Prime Business Center",
    location: "Anna Salai, Chennai",
    city: "Chennai",
    description: "Strategically located commercial property with excellent connectivity.",
    price: "₹1.5 Cr onwards",
    type: "Commercial Space",
    area: "1,500 - 6,000 sq.ft",
    image: "/business-center-building-exterior-modern-glass-fac.jpg",
  },
  {
    id: 7,
    name: "Skyline Retail Plaza",
    location: "Banjara Hills, Hyderabad",
    city: "Hyderabad",
    description: "Premium retail spaces in one of Hyderabad's most affluent neighborhoods.",
    price: "₹2.8 Cr onwards",
    type: "Retail Space",
    area: "800 - 4,000 sq.ft",
    image: "/luxury-retail-plaza-exterior-with-storefronts-and-.jpg",
  },
  {
    id: 8,
    name: "Industrial Hub",
    location: "Chakan, Pune",
    city: "Pune",
    description: "Industrial and warehousing spaces with excellent logistics connectivity.",
    price: "₹1.2 Cr onwards",
    type: "Industrial",
    area: "10,000 - 50,000 sq.ft",
    image: "/modern-industrial-warehouse-building-exterior-with.jpg",
  },
  {
    id: 9,
    name: "Executive Towers",
    location: "Lower Parel, Mumbai",
    city: "Mumbai",
    description: "Premium office spaces in Mumbai's thriving business corridor.",
    price: "₹3.5 Cr onwards",
    type: "Office Space",
    area: "2,000 - 12,000 sq.ft",
    image: "/executive-office-tower-building-modern-architectur.jpg",
  },
]

const cities = ["All Cities", "Mumbai", "Delhi", "Bangalore", "Chennai", "Hyderabad", "Pune", "Gurgaon"]
const propertyTypes = ["All Types", "Office Space", "Retail Space", "Commercial Space", "Industrial", "Mixed Use"]

export default function PropertiesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCity, setSelectedCity] = useState("All Cities")
  const [selectedType, setSelectedType] = useState("All Types")
  const [showFilters, setShowFilters] = useState(false)

  const filteredProperties = allProperties.filter((property) => {
    const matchesSearch =
      property.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.location.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCity = selectedCity === "All Cities" || property.city === selectedCity
    const matchesType = selectedType === "All Types" || property.type === selectedType
    return matchesSearch && matchesCity && matchesType
  })

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-primary font-medium mb-4">Our Portfolio</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Explore Premium Commercial Properties
            </h1>
            <p className="text-muted-foreground text-lg">
              Discover our curated selection of prime commercial real estate across India's top business destinations.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="bg-secondary py-8 sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search by name or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-input border-border"
              />
            </div>
            <div className="flex gap-4 w-full md:w-auto">
              <Button
                variant="outline"
                className="flex-1 md:flex-none border-border bg-transparent"
                onClick={() => setShowFilters(!showFilters)}
              >
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>

          {showFilters && (
            <div className="mt-4 p-4 bg-card rounded-lg border border-border">
              <div className="flex flex-wrap gap-4">
                <div className="flex-1 min-w-[200px]">
                  <label className="block text-sm font-medium text-foreground mb-2">City</label>
                  <div className="flex flex-wrap gap-2">
                    {cities.map((city) => (
                      <button
                        key={city}
                        onClick={() => setSelectedCity(city)}
                        className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                          selectedCity === city
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground hover:bg-muted/80"
                        }`}
                      >
                        {city}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex-1 min-w-[200px]">
                  <label className="block text-sm font-medium text-foreground mb-2">Property Type</label>
                  <div className="flex flex-wrap gap-2">
                    {propertyTypes.map((type) => (
                      <button
                        key={type}
                        onClick={() => setSelectedType(type)}
                        className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                          selectedType === type
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground hover:bg-muted/80"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              {(selectedCity !== "All Cities" || selectedType !== "All Types") && (
                <div className="mt-4 flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Active filters:</span>
                  {selectedCity !== "All Cities" && (
                    <button
                      onClick={() => setSelectedCity("All Cities")}
                      className="flex items-center gap-1 px-2 py-1 rounded-full bg-primary/20 text-primary text-sm"
                    >
                      {selectedCity}
                      <X className="h-3 w-3" />
                    </button>
                  )}
                  {selectedType !== "All Types" && (
                    <button
                      onClick={() => setSelectedType("All Types")}
                      className="flex items-center gap-1 px-2 py-1 rounded-full bg-primary/20 text-primary text-sm"
                    >
                      {selectedType}
                      <X className="h-3 w-3" />
                    </button>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <p className="text-navy font-medium">Showing {filteredProperties.length} properties</p>
          </div>

          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property) => (
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
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{property.description}</p>
                    <p className="text-sm text-muted-foreground mb-4">Area: {property.area}</p>
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
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No properties found matching your criteria.</p>
              <Button
                className="mt-4"
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCity("All Cities")
                  setSelectedType("All Types")
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
