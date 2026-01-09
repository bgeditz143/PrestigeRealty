"use client"

import { useState } from "react"
import { Car, Shield, Zap, ArrowUpDown, Wifi, Wind, Leaf, Users } from "lucide-react"

const images = [
  "/modern-underground-parking-garage-with-cars-and-li.jpg",
  "/luxurious-office-lobby-interior-with-marble-floors.jpg",
  "/rooftop-garden-terrace-on-commercial-building-with.jpg",
]

const amenities = [
  { icon: Car, title: "Basement Parking", description: "Multi-level secure parking" },
  { icon: Shield, title: "24/7 Security", description: "Advanced surveillance systems" },
  { icon: Zap, title: "Power Backup", description: "100% power backup facility" },
  { icon: ArrowUpDown, title: "High-Speed Elevators", description: "Multiple elevator banks" },
  { icon: Wifi, title: "High-Speed Internet", description: "Fiber optic connectivity" },
  { icon: Wind, title: "Central AC", description: "VRV air conditioning system" },
  { icon: Leaf, title: "Green Spaces", description: "Landscaped gardens & terraces" },
  { icon: Users, title: "Conference Rooms", description: "Fully equipped meeting spaces" },
]

export function AmenitiesSection() {
  const [activeImage, setActiveImage] = useState(0)

  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={images[activeImage] || "/placeholder.svg"}
                alt="Property amenity"
                className="w-full h-[500px] object-cover transition-opacity duration-500"
              />
            </div>
            <div className="flex gap-4 mt-4">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`w-24 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                    activeImage === index ? "border-primary" : "border-transparent"
                  }`}
                >
                  <img
                    src={img || "/placeholder.svg"}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-primary font-medium mb-2">World-Class Amenities</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-balance">
              Premium Features for Modern Businesses
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {amenities.map((amenity) => (
                <div
                  key={amenity.title}
                  className="bg-card rounded-lg p-4 flex items-start gap-4 hover:bg-muted transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <amenity.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{amenity.title}</h3>
                    <p className="text-muted-foreground text-sm">{amenity.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
