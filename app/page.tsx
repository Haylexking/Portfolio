"use client"

import { useState } from "react"
import LoadingScreen from "@/components/loading-screen"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import FeaturedDesigns from "@/components/featured-designs"
import FAQsSection from "@/components/faqs-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}

      <div className={`transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}>
        <Header />
        <main>
          <HeroSection />
          <FeaturedDesigns />
          <FAQsSection />
          <ContactSection />
        </main>
      </div>
    </>
  )
}
