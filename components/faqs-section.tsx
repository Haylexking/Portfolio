"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "I offer comprehensive UX/UI design services including user research, wireframing, prototyping, visual design, usability testing, and design system creation. I specialize in web and mobile applications with a focus on user-centered design principles.",
  },
  {
    question: "Can you work on both long-term and short-term projects?",
    answer:
      "I'm flexible with project timelines and can adapt to both short-term sprint work and long-term strategic design initiatives. Whether you need a quick design audit or a complete product redesign, I can accommodate your timeline and requirements.",
  },
  {
    question: "What is your availability?",
    answer:
      "I'm currently available for new projects and typically respond to inquiries within 24 hours. My availability varies depending on current commitments, but I always strive to accommodate urgent requests and can discuss flexible arrangements based on your project needs.",
  },
  {
    question: "How can I contact you for a project?",
    answer:
      "You can reach out through the contact form on this website, send me an email directly, or connect with me on LinkedIn. I prefer to start with a brief conversation about your project goals and requirements before moving forward with a detailed proposal.",
  },
]

export default function FAQsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-gray-900 text-white py-12 sm:py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 text-left font-title">FAQs</h2>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-700 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 sm:px-6 py-4 sm:py-6 text-left flex justify-between items-center hover:bg-gray-800 transition-colors"
              >
                <span className="text-base sm:text-lg font-medium pr-4 font-title">{faq.question}</span>
                <ChevronRight
                  className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 flex-shrink-0 ${
                    openIndex === index ? "rotate-90" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <div className="pt-2 border-t border-gray-700">
                    <p className="text-gray-300 leading-relaxed font-body text-sm sm:text-base">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
