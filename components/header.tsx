"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Logo from "./logo"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-[#f0f0f0]/90 backdrop-blur-[14px] text-[#272525] border-b border-[#e4e4e0] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/portfolio" className="text-[#69666e] hover:text-[#272525] font-medium transition-colors">
              Portfolio
            </Link>
            <a
              href="https://drive.google.com/file/d/19FNWhoxPL1cFg6tGDUYwHIH8Oz80onug/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="bg-[#72d560] text-[#272525] hover:opacity-85 border-[#3ba229] font-bold">
                Resume
              </Button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-6">
            <nav className="flex flex-col space-y-4">
              <Link href="/portfolio" className="text-[#69666e] hover:text-[#272525] font-medium transition-colors">
                Portfolio
              </Link>
              <a
                href="https://drive.google.com/file/d/19FNWhoxPL1cFg6tGDUYwHIH8Oz80onug/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="bg-[#72d560] text-[#272525] hover:opacity-85 border-[#3ba229] font-bold w-fit">
                  Resume
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
