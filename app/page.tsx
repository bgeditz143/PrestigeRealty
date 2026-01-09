import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { TrustSection } from "@/components/trust-section"
import { FeaturedProperties } from "@/components/featured-properties"
import { StatsSection } from "@/components/stats-section"
import { HighlightProperty } from "@/components/highlight-property"
import { CategoriesSection } from "@/components/categories-section"
import { AmenitiesSection } from "@/components/amenities-section"
import { CtaBanner } from "@/components/cta-banner"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TrustSection />
      <FeaturedProperties />
      <StatsSection />
      <HighlightProperty />
      <CategoriesSection />
      <AmenitiesSection />
      <CtaBanner />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
