"use client"

import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const stats = [
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 9700, suffix: "+", label: "Properties Sold" },
  { value: 680, suffix: "+", label: "Business Partners" },
  { value: 10000, suffix: "+", label: "Happy Clients" },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const stepValue = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += stepValue
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isVisible, value])

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-primary">
      {count.toLocaleString()}
      {suffix}
    </div>
  )
}

export function StatsSection() {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img src="/luxury-modern-office-building-interior-lobby.jpg" alt="Modern office interior" className="rounded-lg shadow-2xl" />
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-xl hidden md:block">
              <p className="text-3xl font-bold">15+</p>
              <p className="text-sm">Years Experience</p>
            </div>
          </div>

          <div>
            <p className="text-primary font-medium mb-2">About Our Company</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Transforming Visions into Valuable Real Estate Investments
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              With over 15 years of expertise in the commercial real estate sector, we have established ourselves as a
              trusted partner for businesses and investors alike. Our comprehensive approach combines market
              intelligence, strategic insights, and personalized service to deliver exceptional results.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  <p className="text-muted-foreground mt-2">{stat.label}</p>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-gold-dark" asChild>
              <Link href="/about">Know More About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
