import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portfolio - The Biochemist UX",
  description: "Explore my UX/UI design portfolio featuring creative solutions and real impact projects.",
}

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
