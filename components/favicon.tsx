"use client"

export default function Favicon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="8" fill="url(#gradient)" />
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="50%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>

      {/* Central node */}
      <circle cx="16" cy="16" r="3" fill="white" opacity="0.95" />

      {/* Surrounding nodes */}
      <circle cx="10" cy="10" r="2" fill="white" opacity="0.85" />
      <circle cx="22" cy="10" r="2" fill="white" opacity="0.85" />
      <circle cx="10" cy="22" r="2" fill="white" opacity="0.85" />
      <circle cx="22" cy="22" r="2" fill="white" opacity="0.85" />

      {/* Connecting lines */}
      <line x1="12" y1="12" x2="20" y2="20" stroke="white" strokeWidth="1.5" opacity="0.7" strokeLinecap="round" />
      <line x1="20" y1="12" x2="12" y2="20" stroke="white" strokeWidth="1.5" opacity="0.7" strokeLinecap="round" />
    </svg>
  )
}
