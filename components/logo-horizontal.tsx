"use client"

import Link from "next/link"

export default function LogoHorizontal({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center space-x-3 hover:opacity-80 transition-opacity ${className}`}>
      {/* Icon/Symbol */}
      <div className="relative">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg flex items-center justify-center">
          {/* Molecule/Network inspired design */}
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="6" cy="6" r="2" fill="white" opacity="0.9" />
            <circle cx="14" cy="6" r="2" fill="white" opacity="0.7" />
            <circle cx="10" cy="14" r="2" fill="white" opacity="0.8" />
            <line x1="6" y1="6" x2="14" y2="6" stroke="white" strokeWidth="1" opacity="0.6" />
            <line x1="6" y1="6" x2="10" y2="14" stroke="white" strokeWidth="1" opacity="0.6" />
            <line x1="14" y1="6" x2="10" y2="14" stroke="white" strokeWidth="1" opacity="0.6" />
          </svg>
        </div>
      </div>

      {/* Text */}
      <span className="text-xl font-bold text-white">
        The Biochemist <span className="text-blue-400 font-medium">UX</span>
      </span>
    </Link>
  )
}
