"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Check, ArrowRight } from "lucide-react"

export default function GamePanelsPage() {

  const products = [
    {
      title: "FF CHEAT PANEL PREMIUM",
      price: "15$/m",
      description: "Full-featured Free Fire PC cheat panel. Complete control, always undetected, and updated with every patch.",
      features: ["Auto Aim", "Wall Hack", "Speed Hack", "Always Undetected", "24/7 Support", "Regular Updates"],
      badge: "BEST SELLER",
    },
    {
      title: "ANDROID PANEL",
      price: "15$/m",
      description: "Powerful Android cheat panel for Free Fire mobile. Works on all Android versions with anti-ban protection.",
      features: ["Aimbot", "ESP / Wallhack", "No Recoil", "Anti-Ban Shield", "Easy Install", "Regular Updates"],
      badge: "POPULAR",
    },
    {
      title: "iOS XIT",
      price: "20$/m",
      description: "Exclusive iOS exploit for Free Fire. Advanced features only available on our platform, updated weekly.",
      features: ["XIT Aimbot", "Item ESP", "Speed Boost", "Rank Push Safe", "iOS 15–17", "Premium Support"],
      badge: "PREMIUM",
    },
  ]

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">

      {/* Background Video */}
      <video
        autoPlay loop muted playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-30"
      >
        <source src="/videos/background.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-purple-950/20 to-black/90" />



      <div className="relative z-30 min-h-screen flex flex-col">

        {/* Header */}
        <header className="flex items-center justify-between px-8 py-5 border-b border-purple-500/10 backdrop-blur-sm">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/images/logo.png" alt="MARADONAvx" width={36} height={36} className="rounded-full" priority />
            <span className="text-white font-bold text-xl tracking-wide">
              MARADONA<span className="text-purple-400">vx</span>
            </span>
          </Link>
          <Link
            href="https://discord.gg/Mr3aJbWA"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/40"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
            </svg>
            Discord
          </Link>
        </header>

        <main className="flex-1 px-6 py-16 max-w-6xl mx-auto w-full">

          {/* Back link */}
          <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-purple-400 text-sm transition-colors duration-200 mb-12 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
            Back to Home
          </Link>

          {/* Page header */}
          <div className="mb-16 text-center">
            <span className="inline-block bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              Premium Cheats
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-4">
              GAME <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-500">PANELS</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Secure, undetected, and always updated. DM on Discord to purchase any panel.
            </p>
          </div>

          {/* Product image placeholder area */}
          <div className="mb-16 rounded-2xl border border-purple-500/20 bg-black/40 backdrop-blur-sm overflow-hidden">
            <div className="h-72 md:h-96 flex items-center justify-center bg-gradient-to-br from-purple-950/40 to-black/60 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-2xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-500 text-sm">Product images coming soon</p>
                </div>
              </div>
            </div>
          </div>

          {/* Product cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {products.map((product) => (
              <div
                key={product.title}
                className="group relative rounded-2xl border border-purple-500/20 bg-black/40 backdrop-blur-sm p-6 hover:border-purple-500/50 hover:bg-purple-950/20 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300"
              >
                <div className="absolute top-4 right-4">
                  <span className="text-[10px] bg-purple-600 text-white font-bold px-2 py-0.5 rounded-full tracking-wide">
                    {product.badge}
                  </span>
                </div>

                <h3 className="text-white font-bold text-lg mb-1 pr-16">{product.title}</h3>
                <div className="text-purple-400 text-2xl font-black mb-3">{product.price}</div>
                <p className="text-gray-400 text-sm mb-5 leading-relaxed">{product.description}</p>

                <ul className="space-y-2 mb-6">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-gray-300 text-sm">
                      <Check className="w-4 h-4 text-purple-400 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href="https://discord.gg/Mr3aJbWA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold py-2.5 rounded-xl text-sm transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/30"
                >
                  DM TO BUY
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center rounded-2xl border border-purple-500/20 bg-black/40 backdrop-blur-sm py-12 px-6">
            <h2 className="text-2xl font-bold text-white mb-3">Need help choosing?</h2>
            <p className="text-gray-400 mb-6">Join our Discord and we'll find the right panel for you.</p>
            <Link
              href="https://discord.gg/Mr3aJbWA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/30"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
              </svg>
              Join Discord
            </Link>
          </div>
        </main>

        <footer className="py-6 px-8 border-t border-purple-500/10 text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} MARADONAvx. All rights reserved.
        </footer>
      </div>
    </div>
  )
}
