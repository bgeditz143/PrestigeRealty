"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

const locations = [
  { id: "india", name: "India", cities: ["Mumbai", "Delhi", "Bangalore", "Chennai"] },
  { id: "uae", name: "UAE", cities: ["Dubai", "Abu Dhabi"] },
  { id: "singapore", name: "Singapore", cities: ["Singapore"] },
]

export function ContactSection() {
  const [selectedLocation, setSelectedLocation] = useState("india")

  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-primary font-medium mb-2">Get In Touch</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Let's Discuss Your Property Goals
            </h2>
            <p className="text-muted-foreground mb-8">
              Whether you're looking to invest, lease, or sell commercial property, our expert team is here to guide you
              through every step of the process.
            </p>

            <div className="mb-8">
              <p className="text-foreground font-medium mb-4">Select Region</p>
              <div className="flex flex-wrap gap-3">
                {locations.map((loc) => (
                  <button
                    key={loc.id}
                    onClick={() => setSelectedLocation(loc.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedLocation === loc.id
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    {loc.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Office Locations</h3>
                  <p className="text-muted-foreground">
                    {locations.find((l) => l.id === selectedLocation)?.cities.join(" • ")}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Phone</h3>
                  <p className="text-muted-foreground">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <p className="text-muted-foreground">info@prestigerealty.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Business Hours</h3>
                  <p className="text-muted-foreground">Mon - Sat: 9:00 AM - 7:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg p-8 border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <Input id="name" placeholder="John Doe" className="bg-input border-border" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input id="email" type="email" placeholder="john@example.com" className="bg-input border-border" />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <Input id="phone" placeholder="+91 98765 43210" className="bg-input border-border" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your property requirements..."
                  rows={5}
                  className="bg-input border-border resize-none"
                />
              </div>

              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-gold-dark">
                Send Inquiry
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
