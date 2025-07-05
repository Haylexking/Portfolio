"use client"

import Link from "next/link"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export default function Logo({ className = "", size = "md" }: LogoProps) {
  const sizes = {
    sm: { container: "w-8 h-8", text: "text-lg", subtext: "text-xs" },
    md: { container: "w-10 h-10", text: "text-xl", subtext: "text-sm" },
    lg: { container: "w-12 h-12", text: "text-2xl", subtext: "text-base" },
  }

  const currentSize = sizes[size]

  return (
    <Link href="/" className={`flex items-center space-x-3 hover:opacity-80 transition-opacity ${className}`}>
      {/* Refined Icon */}
      <div className="relative">
        <div
          className={`${currentSize.container} bg-gradient-to-br from-blue-400 via-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg`}
        >
          {/* DNA/Molecular Structure inspired design */}
          <svg
            width={size === "sm" ? "18" : size === "lg" ? "26" : "22"}
            height={size === "sm" ? "18" : size === "lg" ? "26" : "22"}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Central node */}
            <circle cx="12" cy="12" r="2.5" fill="white" opacity="0.95" />

            {/* Surrounding nodes */}
            <circle cx="7" cy="7" r="1.8" fill="white" opacity="0.85" />
            <circle cx="17" cy="7" r="1.8" fill="white" opacity="0.85" />
            <circle cx="7" cy="17" r="1.8" fill="white" opacity="0.85" />
            <circle cx="17" cy="17" r="1.8" fill="white" opacity="0.85" />

            {/* Connecting lines */}
            <line
              x1="9.2"
              y1="9.2"
              x2="14.8"
              y2="14.8"
              stroke="white"
              strokeWidth="1.5"
              opacity="0.7"
              strokeLinecap="round"
            />
            <line
              x1="14.8"
              y1="9.2"
              x2="9.2"
              y2="14.8"
              stroke="white"
              strokeWidth="1.5"
              opacity="0.7"
              strokeLinecap="round"
            />
            <line
              x1="12"
              y1="9.5"
              x2="12"
              y2="14.5"
              stroke="white"
              strokeWidth="1.2"
              opacity="0.6"
              strokeLinecap="round"
            />
            <line
              x1="9.5"
              y1="12"
              x2="14.5"
              y2="12"
              stroke="white"
              strokeWidth="1.2"
              opacity="0.6"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {/* Text */}
      <div className="flex flex-col">
        <span className={`${currentSize.text} font-bold text-white leading-tight`}>The Biochemist</span>
        <span className={`${currentSize.subtext} font-medium text-blue-400 tracking-wider uppercase`}>UX</span>
      </div>
    </Link>
  )
}
