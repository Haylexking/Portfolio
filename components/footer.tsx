"use client"

import React from "react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer>
      <Link href="/" className="f-logo">
        The Biochemist<span>UX</span>
      </Link>
      <div className="f-links">
        <Link href="/work">Work</Link>
        <Link href="/#about">About</Link>
        <a href="mailto:alexakerele24@gmail.com">Email</a>
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
          LinkedIn
        </a>
      </div>
      <span className="f-copy">© {new Date().getFullYear()} Alexander Akerele — All rights reserved.</span>
    </footer>
  )
}
