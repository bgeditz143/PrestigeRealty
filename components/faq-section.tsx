"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What types of commercial properties do you offer?",
    answer:
      "We offer a comprehensive range of commercial properties including Grade A office spaces, retail outlets, shopping complexes, warehouses, industrial spaces, commercial land, and mixed-use developments across major cities in India and internationally.",
  },
  {
    question: "How do you help investors find the right property?",
    answer:
      "Our expert team conducts thorough market analysis, understands your investment goals, assesses risk tolerance, and presents curated options that align with your requirements. We provide detailed property reports, ROI projections, and end-to-end transaction support.",
  },
  {
    question: "Do you provide legal and documentation support?",
    answer:
      "Yes, we offer comprehensive legal support including title verification, due diligence, documentation assistance, registration support, and post-purchase compliance guidance. Our legal team ensures all transactions are secure and transparent.",
  },
  {
    question: "What cities do you operate in?",
    answer:
      "We have a strong presence in major Indian metros including Mumbai, Delhi-NCR, Bangalore, Chennai, Hyderabad, and Pune. Internationally, we operate in Dubai, Singapore, and select global markets for NRI investors.",
  },
  {
    question: "What are the payment and financing options available?",
    answer:
      "We offer flexible payment plans and can assist with bank loan arrangements through our partner financial institutions. Our team can help structure deals with construction-linked plans, subvention schemes, and customized payment schedules.",
  },
  {
    question: "How do I schedule a property visit?",
    answer:
      "You can schedule a property visit by contacting us through our website, calling our sales team, or visiting any of our offices. We offer both in-person site visits and virtual tours for your convenience.",
  },
]

export function FaqSection() {
  return (
    <section className="bg-light py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold-dark font-medium mb-2">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy text-balance">Frequently Asked Questions</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-lg border-0 shadow-md px-6"
              >
                <AccordionTrigger className="text-navy hover:text-gold-dark text-left font-semibold py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
