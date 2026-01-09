"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Building2 } from "lucide-react"

const offices = [
  {
    city: "Mumbai",
    address: "123 Financial Tower, BKC, Mumbai - 400051",
    phone: "+91 22 4567 8900",
    email: "mumbai@prestigerealty.com",
  },
  {
    city: "Delhi",
    address: "456 Corporate Park, Connaught Place, New Delhi - 110001",
    phone: "+91 11 2345 6789",
    email: "delhi@prestigerealty.com",
  },
  {
    city: "Bangalore",
    address: "789 Tech Hub, Whitefield, Bangalore - 560066",
    phone: "+91 80 3456 7890",
    email: "bangalore@prestigerealty.com",
  },
  {
    city: "Dubai",
    address: "Business Bay Tower, Dubai, UAE",
    phone: "+971 4 567 8901",
    email: "dubai@prestigerealty.com",
  },
]

const inquiryTypes = [
  "Property Investment",
  "Office Space Leasing",
  "Retail Space",
  "Property Management",
  "General Inquiry",
]

export default function ContactPage() {
  const [selectedInquiry, setSelectedInquiry] = useState("")

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-primary font-medium mb-4">Contact Us</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Let's Start a Conversation
            </h1>
            <p className="text-muted-foreground text-lg">
              Whether you're looking to invest, lease, or sell, our team is ready to help you achieve your real estate
              goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-navy mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-navy mb-2">
                      First Name *
                    </label>
                    <Input id="firstName" placeholder="John" className="bg-light border-border" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-navy mb-2">
                      Last Name *
                    </label>
                    <Input id="lastName" placeholder="Doe" className="bg-light border-border" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">
                    Email Address *
                  </label>
                  <Input id="email" type="email" placeholder="john@example.com" className="bg-light border-border" />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-navy mb-2">
                    Phone Number *
                  </label>
                  <Input id="phone" placeholder="+91 98765 43210" className="bg-light border-border" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy mb-2">Inquiry Type</label>
                  <div className="flex flex-wrap gap-2">
                    {inquiryTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setSelectedInquiry(type)}
                        className={`px-4 py-2 rounded-full text-sm transition-colors ${
                          selectedInquiry === type
                            ? "bg-gold text-navy font-medium"
                            : "bg-light text-muted-foreground hover:bg-muted"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-navy mb-2">
                    Your Message *
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your requirements..."
                    rows={5}
                    className="bg-light border-border resize-none"
                  />
                </div>

                <Button type="submit" className="w-full bg-navy text-white hover:bg-navy-light" size="lg">
                  Send Inquiry
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <div className="bg-navy rounded-lg p-8 text-white mb-8">
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-white/80">+91 98765 43210</p>
                      <p className="text-white/80">+91 22 4567 8900</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-white/80">info@prestigerealty.com</p>
                      <p className="text-white/80">sales@prestigerealty.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Business Hours</h3>
                      <p className="text-white/80">Monday - Saturday</p>
                      <p className="text-white/80">9:00 AM - 7:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Image - Updated with city map image */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/mumbai-city-aerial-view-map-with-buildings-and-roa.jpg"
                  alt="Location Map"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary font-medium mb-2">Our Offices</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">Visit Us at Our Locations</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office) => (
              <div key={office.city} className="bg-card rounded-lg p-6 border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">{office.city}</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4 flex-shrink-0 mt-1" />
                    <span>{office.address}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="h-4 w-4 flex-shrink-0" />
                    <span>{office.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="h-4 w-4 flex-shrink-0" />
                    <span>{office.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
