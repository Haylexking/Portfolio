"use client"

import { Button } from "@/components/ui/button"
import { Twitter, Linkedin, Mail } from "lucide-react"
import Logo from "./logo"
import SectionTag from "./section-tag"

export default function ContactSection() {
  return (
    <section className="bg-gray-900 text-white py-12 sm:py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 sm:space-y-10">
          <div className="space-y-6 sm:space-y-8">
            <div className="flex justify-center mb-4 sm:mb-6">
              <SectionTag>Contact Me</SectionTag>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-title px-4">
              Let's Create Something Great Together!
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto font-body px-4">
              Have a project in mind or just want to say hello? Reach out, and let's bring your ideas to life. I'm
              excited to collaborate and turn your vision into reality.
            </p>
          </div>

          {/* Regular sized button, not full width */}
          <div className="pt-4 sm:pt-6">
            <a href="mailto:alexakerele24@gmail.com">
              <Button
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium font-title"
              >
                Get In Touch
              </Button>
            </a>
          </div>

          <div className="pt-8 sm:pt-12">
            <div className="flex justify-center space-x-4 sm:space-x-6 mb-8 sm:mb-12">
              <a
                href="https://twitter.com/Halexhanderkinglin"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/alexanderakerele"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="mailto:alexakerele24@gmail.com"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>

            {/* Responsive Logo */}
            <div className="flex justify-center">
              <Logo size="md" className="sm:hidden" />
              <Logo size="lg" className="hidden sm:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
