"use client"

import { Button } from "@/components/ui/button"
import SectionTag from "./section-tag"
import Image from "next/image"

export default function FeaturedDesigns() {
  return (
    <section className="bg-gray-900 text-white py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-12 text-left">
          <div className="mb-4 sm:mb-6">
            <SectionTag>Design Projects</SectionTag>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-title">Featured Designs</h2>
        </div>

        <div className="space-y-12 sm:space-y-16">
          {/* iDonate Case Study */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 overflow-hidden relative">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center relative z-10">
              <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
                <div className="space-y-4 sm:space-y-6">
                  <div className="mb-3 sm:mb-4">
                    <SectionTag className="bg-blue-800/50 text-blue-100 border-blue-600">Case Study</SectionTag>
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-title">iDonate</h3>
                  <p className="text-blue-100 text-base sm:text-lg leading-relaxed font-body">
                    An online items-only charity platform that connects people and promotes shared living amongst
                    thriving communities
                  </p>
                </div>

                <div className="pt-2 sm:pt-4">
                  <a
                    href="https://behance.net/gallery/152008977/iDonate-App-Case-Study"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="bg-white text-blue-800 hover:bg-blue-50 border-white font-title"
                    >
                      View Case Study
                    </Button>
                  </a>
                </div>
              </div>

              <div className="relative order-1 lg:order-2">
                <div className="rounded-2xl sm:rounded-3xl shadow-2xl max-w-xs sm:max-w-md mx-auto transform hover:scale-105 transition-transform duration-300 overflow-hidden">
                  {/* Smart fitting: zoom to fill space, align left */}
                  <div className="aspect-video bg-white rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-white">
                    <Image
                      src="/images/idonate-mockup.png"
                      alt="iDonate Project Mockup"
                      width={600}
                      height={400}
                      className="w-full h-full object-cover object-left"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ondo State Ministry Case Study */}
          <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
                <div className="space-y-4 sm:space-y-6">
                  <div className="mb-3 sm:mb-4">
                    <SectionTag className="bg-orange-800/50 text-orange-100 border-orange-600">Case Study</SectionTag>
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white font-title">
                    Ondo State Ministry of Information Website
                  </h3>
                  <p className="text-orange-100 text-base sm:text-lg leading-relaxed font-body">
                    Designed a comprehensive platform for citizens to access state news, historical data, and
                    directories of various parastatals. Explore how the design improves access to vital state
                    information.
                  </p>
                </div>

                <div className="pt-2 sm:pt-4">
                  <a href="https://ondo-moi-ya31.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      className="bg-white text-orange-800 hover:bg-orange-50 border-white font-title"
                    >
                      View Website
                    </Button>
                  </a>
                </div>
              </div>

              <div className="relative order-1 lg:order-2">
                <div className="rounded-2xl sm:rounded-3xl shadow-2xl max-w-xs sm:max-w-md mx-auto transform hover:scale-105 transition-transform duration-300 overflow-hidden">
                  <div className="aspect-video bg-white rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-white">
                    <Image
                      src="/images/ondo-state-mockup.png"
                      alt="Ondo State Ministry Project Mockup"
                      width={600}
                      height={400}
                      className="w-full h-full object-cover object-left"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Kukeat Case Study */}
          <div className="bg-gradient-to-br from-green-600 to-teal-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
                <div className="space-y-4 sm:space-y-6">
                  <div className="mb-3 sm:mb-4">
                    <SectionTag className="bg-green-800/50 text-green-100 border-green-600">Case Study</SectionTag>
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-title">Kukeat</h3>
                  <p className="text-green-100 text-base sm:text-lg leading-relaxed font-body">
                    Designed a seamless foodstuff ordering platform that lets users order from the market with ease and
                    receive speedy home deliveries. Discover how the design enhances user convenience and streamlines
                    the ordering process.
                  </p>
                </div>

                <div className="pt-2 sm:pt-4">
                  <a href="https://kukeat.com" target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      className="bg-white text-green-800 hover:bg-green-50 border-white font-title"
                    >
                      View Website
                    </Button>
                  </a>
                </div>
              </div>

              <div className="relative order-1 lg:order-2">
                <div className="rounded-2xl sm:rounded-3xl shadow-2xl max-w-xs sm:max-w-md mx-auto transform hover:scale-105 transition-transform duration-300 overflow-hidden">
                  <div className="aspect-video bg-white rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-white">
                    <Image
                      src="/images/kukeat-mockup.png"
                      alt="Kukeat Project Mockup"
                      width={600}
                      height={400}
                      className="w-full h-full object-cover object-left"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
