import type React from "react"
import type { Metadata } from "next"
import { Nunito, Lora } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
})

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Alexander Akerele — The Biochemist UX | Product Designer",
  description: "Product designer turning complex systems into clear, human experiences. 5+ years shipping Fintech, AI, Mobile, and Web platforms.",
  metadataBase: new URL("https://portfolio-eight-rho-87.vercel.app"),
  authors: [{ name: "Alexander Akerele" }],
  keywords: [
    "Alexander Akerele",
    "The Biochemist UX",
    "Product Designer",
    "UX Designer",
    "UI Designer",
    "Fintech UX",
    "Design Systems",
    "Lagos Nigeria Product Designer"
  ],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" }
    ],
    apple: "/favicon.svg"
  },
  openGraph: {
    title: "Alexander Akerele — The Biochemist UX | Product Designer",
    description: "Product designer turning complex systems into clear, human experiences. 5+ years shipping Fintech, AI, Mobile, and Web platforms.",
    url: "https://portfolio-eight-rho-87.vercel.app",
    siteName: "Alexander Akerele Portfolio",
    images: [
      {
        url: "/images/haylex-imagery.png",
        width: 1200,
        height: 630,
        alt: "Alexander Akerele — The Biochemist UX"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Alexander Akerele — The Biochemist UX",
    description: "Product designer turning complex systems into clear, human experiences.",
    images: ["/images/haylex-imagery.png"]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} ${lora.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
