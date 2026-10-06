"use client"

import React, { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import Link from "next/link"

interface HeaderProps {
  isLight?: boolean
}

export default function Header({ isLight = false }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const isHome = pathname === "/"

  return (
    <nav className={`navbar-root ${isMenuOpen ? "open" : ""} ${isLight ? "is-light" : ""}`} id="main-nav">
      <div className="nav-inner">
        <Link href="/" className="nav-logo">
          The Biochemist<span>UX</span>
        </Link>
        
        <button className="nav-mobile-btn" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className="nav-links">
        {/* Conditional Home link: hide on homepage, show elsewhere */}
        {!isHome && <Link href="/">Home</Link>}
        
        <Link href="/work" className={pathname === "/work" ? "active" : ""}>
          Work
        </Link>
        <Link href="/#about">About</Link>
        <a 
          href="https://drive.google.com/file/d/19FNWhoxPL1cFg6tGDUYwHIH8Oz80onug/view?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Résumé
        </a>
        <a 
          href="https://www.linkedin.com/in/alexanderakerele" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          LinkedIn ↗
        </a>
      </div>

      {/* Single CTA Instance */}
      <a href="mailto:alexakerele24@gmail.com" className="nav-cta">
        Let's Talk →
      </a>
    </nav>
  )
}
