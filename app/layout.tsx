import type React from "react"
import type { Metadata } from "next"

import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Pacifico as V0_Font_Pacifico } from 'next/font/google'

// Initialize fonts
const _pacifico = V0_Font_Pacifico({ subsets: ['latin'], weight: ["400"] })

export const metadata: Metadata = {
  title: "CCMTB - Central Coast Mountain Bike Club",
  description: "Explore Ourimbah MTB Park - 95km of trails on the Central Coast",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
