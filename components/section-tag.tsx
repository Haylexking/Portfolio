"use client"

import type React from "react"

interface SectionTagProps {
  children: React.ReactNode
  className?: string
}

export default function SectionTag({ children, className = "" }: SectionTagProps) {
  return (
    <div
      className={`inline-block bg-gray-800 text-gray-300 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm uppercase tracking-wider font-title border border-gray-700 ${className}`}
    >
      {children}
    </div>
  )
}
