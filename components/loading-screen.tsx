"use client"

import { useEffect, useState } from "react"

interface LoadingScreenProps {
  onLoadingComplete: () => void
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [animationPhase, setAnimationPhase] = useState(0)

  useEffect(() => {
    // Phase 1: Logo draws in (0-1500ms)
    const phase1Timer = setTimeout(() => setAnimationPhase(1), 500)

    // Phase 2: Text appears (1500-2500ms)
    const phase2Timer = setTimeout(() => setAnimationPhase(2), 1500)

    // Phase 3: Fade out (2500-3000ms)
    const phase3Timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onLoadingComplete, 500)
    }, 2500)

    return () => {
      clearTimeout(phase1Timer)
      clearTimeout(phase2Timer)
      clearTimeout(phase3Timer)
    }
  }, [onLoadingComplete])

  return (
    <div
      className={`fixed inset-0 bg-gray-900 flex items-center justify-center z-50 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="text-center">
        {/* Animated Logo */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 via-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="overflow-visible"
              >
                {/* Central node - draws first */}
                <circle
                  cx="12"
                  cy="12"
                  r="2.5"
                  fill="white"
                  opacity="0.95"
                  className={`transition-all duration-700 ${animationPhase >= 1 ? "scale-100" : "scale-0"}`}
                  style={{ transformOrigin: "center" }}
                />

                {/* Surrounding nodes - draw in sequence */}
                <circle
                  cx="7"
                  cy="7"
                  r="1.8"
                  fill="white"
                  opacity="0.85"
                  className={`transition-all duration-500 delay-200 ${animationPhase >= 1 ? "scale-100" : "scale-0"}`}
                  style={{ transformOrigin: "center" }}
                />
                <circle
                  cx="17"
                  cy="7"
                  r="1.8"
                  fill="white"
                  opacity="0.85"
                  className={`transition-all duration-500 delay-400 ${animationPhase >= 1 ? "scale-100" : "scale-0"}`}
                  style={{ transformOrigin: "center" }}
                />
                <circle
                  cx="7"
                  cy="17"
                  r="1.8"
                  fill="white"
                  opacity="0.85"
                  className={`transition-all duration-500 delay-600 ${animationPhase >= 1 ? "scale-100" : "scale-0"}`}
                  style={{ transformOrigin: "center" }}
                />
                <circle
                  cx="17"
                  cy="17"
                  r="1.8"
                  fill="white"
                  opacity="0.85"
                  className={`transition-all duration-500 delay-800 ${animationPhase >= 1 ? "scale-100" : "scale-0"}`}
                  style={{ transformOrigin: "center" }}
                />

                {/* Connecting lines - draw after nodes */}
                <line
                  x1="9.2"
                  y1="9.2"
                  x2="14.8"
                  y2="14.8"
                  stroke="white"
                  strokeWidth="1.5"
                  opacity="0.7"
                  strokeLinecap="round"
                  className={`transition-all duration-700 delay-1000 ${
                    animationPhase >= 1 ? "opacity-70" : "opacity-0"
                  }`}
                  style={{
                    strokeDasharray: animationPhase >= 1 ? "none" : "10",
                    strokeDashoffset: animationPhase >= 1 ? "0" : "10",
                  }}
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
                  className={`transition-all duration-700 delay-1100 ${
                    animationPhase >= 1 ? "opacity-70" : "opacity-0"
                  }`}
                  style={{
                    strokeDasharray: animationPhase >= 1 ? "none" : "10",
                    strokeDashoffset: animationPhase >= 1 ? "0" : "10",
                  }}
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
                  className={`transition-all duration-700 delay-1200 ${
                    animationPhase >= 1 ? "opacity-60" : "opacity-0"
                  }`}
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
                  className={`transition-all duration-700 delay-1300 ${
                    animationPhase >= 1 ? "opacity-60" : "opacity-0"
                  }`}
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Animated Text */}
        <div
          className={`transition-all duration-800 ${
            animationPhase >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h1 className="text-2xl font-bold text-white font-title mb-1">The Biochemist</h1>
          <p className="text-blue-400 font-medium tracking-wider uppercase text-sm font-title">UX</p>
        </div>

        {/* Loading indicator */}
        <div className={`mt-8 transition-all duration-500 ${animationPhase >= 2 ? "opacity-100" : "opacity-0"}`}>
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-400"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
