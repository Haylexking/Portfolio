"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="bg-gray-900 text-white py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Mobile: Single column, Desktop: Left column */}
          <div className="space-y-8 sm:space-y-10 lg:space-y-12">
            <div className="space-y-6 sm:space-y-8">
              <p className="text-base sm:text-lg text-gray-300 flex items-center gap-2 font-body">
                Hey There <span className="text-xl sm:text-2xl">👋</span>
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight font-title">
                I'm Alexander Akerele
              </h1>

              {/* Image appears here on mobile, hidden on desktop */}
              <div className="relative lg:hidden">
                <div className="relative w-full max-w-sm mx-auto">
                  <Image
                    src="\images\haylex-imagery.png"
                    alt="Alexander Akerele - UI/UX Designer"
                    width={500}
                    height={600}
                    className="rounded-2xl object-cover w-full h-auto"
                    priority
                  />
                  <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 bg-white/10 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-1 sm:py-2">
                    <p className="text-white text-xs sm:text-sm font-medium font-body">The Biochemist UX 🦄</p>
                  </div>
                </div>
              </div>

              <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed font-body">
                Welcome to where design meets science! As a biochemist turned UX designer, I combine my analytical and
                creative skills to deliver intuitive and delightful user experiences. Explore my projects and let's
                create something great together.
              </p>
            </div>

            {/* Regular sized button, not full width */}
            <div className="pt-4 sm:pt-6">
              <a href="mailto:alexakerele24@gmail.com">
                <Button
                  size="lg"
                  className="bg-white text-gray-900 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium font-title"
                >
                  Contact Me
                </Button>
              </a>
            </div>
          </div>

          {/* Desktop: Right column - Image only visible on desktop */}
          <div className="relative hidden lg:block">
            <div className="relative w-full max-w-sm sm:max-w-md mx-auto">
              <Image
                src="\images\haylex-imagery.png"
                alt="Alexander Akerele - UI/UX Designer"
                width={500}
                height={600}
                className="rounded-2xl object-cover w-full h-auto"
                priority
              />
              <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 bg-white/10 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-1 sm:py-2">
                <p className="text-white text-xs sm:text-sm font-medium font-body">The Biochemist UX 🦄</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
