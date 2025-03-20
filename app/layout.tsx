import type React from "react"
import "./globals.css"
import { Plus_Jakarta_Sans } from "next/font/google"
import type { Metadata } from "next"

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
})

export const metadata: Metadata = {
  title: "Khizar Alam | Portfolio",
  description: "Portfolio website of Khizar Alam, a creative developer specializing in web and mobile development.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={jakarta.variable} suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  )
}



import './globals.css'