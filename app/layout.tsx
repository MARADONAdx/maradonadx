import type React from "react"
import "./globals.css"
import type { Metadata, Viewport } from "next"
import { SecurityWidget } from "@/components/security-widget"
import { MouseGlow } from "@/components/mouse-glow"

export const metadata: Metadata = {
  title: "MARADONAvx - Creative Developer Portfolio",
  description: "Creative Director and UI/UX Designer, working in web development and print media.",
  keywords: "web developer, ui/ux designer, creative director, portfolio",
  authors: [{ name: "MARADONAvx" }],
  generator: "v0.dev",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <MouseGlow />
        <SecurityWidget />
        {children}

        {/* 🔐 Disable Inspect Script */}
        <script src="/disable-inspect.js"></script>
      </body>
    </html>
  )
}
