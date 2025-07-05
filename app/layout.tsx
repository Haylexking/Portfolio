import type React from "react"
import type { Metadata } from "next"
import { Nunito, Lora } from "next/font/google"
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
  title: "The Biochemist UX - Alexander Akerele",
  description: "UX/UI Designer combining analytical and creative skills to deliver intuitive user experiences",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "32x32",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} ${lora.variable}`}>{children}</body>
    </html>
  )
}
