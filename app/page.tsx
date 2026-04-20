"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`
        glowRef.current.style.top = `${e.clientY}px`
      }
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">

      {/* ── Background Video ── */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-40"
      >
        <source src="/videos/background.mp4" type="video/mp4" />
      </video>

      {/* ── Dark gradient overlay ── */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-purple-950/30 to-black/80" />

      {/* ── Mouse-following purple glow ── */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed z-20 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: "480px",
          height: "480px",
          background: "radial-gradient(circle, rgba(147,51,234,0.18) 0%, rgba(109,40,217,0.08) 45%, transparent 70%)",
          filter: "blur(2px)",
          transition: "left 0.08s ease-out, top 0.08s ease-out",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-30 flex flex-col min-h-screen">

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

        {/* Hero */}
        <main className="flex-1 flex flex-col items-center justify-center px-6 py-20 text-center">
          <div className="mb-3">
            <span className="inline-block bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full">
              Premium Services
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight tracking-tight">
            Welcome to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-400 to-purple-600">
              MARADONAvx
            </span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-16 leading-relaxed">
            Premium tools, panels and web solutions crafted for excellence.
            Secure, reliable, and always updated.
          </p>

          {/* Two Product Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">

            {/* GAME PANELS Card */}
            <Link href="/game-panels" className="group block">
              <div className="relative overflow-hidden rounded-2xl border border-purple-500/20 bg-black/40 backdrop-blur-md p-8 text-left transition-all duration-300 hover:border-purple-500/60 hover:bg-purple-950/30 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-1">
                {/* Glow accent */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-600/20 rounded-full blur-2xl group-hover:bg-purple-500/30 transition-all duration-300" />

                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-purple-600/20 border border-purple-500/30 mb-6 group-hover:bg-purple-600/40 transition-all duration-300">
                    <svg className="w-7 h-7 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.401.604-.401.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.959.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z" />
                    </svg>
                  </div>

                  <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                    GAME PANELS
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                    Premium Free Fire cheat panels for PC, Android & iOS. Secure, undetected, and regularly updated for the best competitive edge.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {["FF PANEL", "ANDROID", "iOS XIT", "PREMIUM"].map((tag) => (
                      <span key={tag} className="text-xs bg-purple-900/40 border border-purple-500/20 text-purple-300 px-2.5 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center text-purple-400 font-semibold text-sm group-hover:text-purple-300 transition-colors duration-300">
                    Explore Panels
                    <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>

            {/* WEB MAKER Card */}
            <Link href="/web-maker" className="group block">
              <div className="relative overflow-hidden rounded-2xl border border-purple-500/20 bg-black/40 backdrop-blur-md p-8 text-left transition-all duration-300 hover:border-purple-500/60 hover:bg-purple-950/30 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-1">
                {/* Glow accent */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-violet-600/20 rounded-full blur-2xl group-hover:bg-violet-500/30 transition-all duration-300" />

                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-purple-600/20 border border-purple-500/30 mb-6 group-hover:bg-purple-600/40 transition-all duration-300">
                    <svg className="w-7 h-7 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                  </div>

                  <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                    WEB MAKER
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                    Custom websites built to your exact vision. High performance, high security, and fully tailored to your brand with VIP service.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {["BASIC", "VIP", "SECURE", "CUSTOM"].map((tag) => (
                      <span key={tag} className="text-xs bg-purple-900/40 border border-purple-500/20 text-purple-300 px-2.5 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center text-purple-400 font-semibold text-sm group-hover:text-purple-300 transition-colors duration-300">
                    View Plans
                    <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>

          </div>

          {/* Bottom badge */}
          <div className="mt-12 flex items-center gap-2 text-gray-500 text-sm">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Undetected since 2025 · DM on Discord to order
          </div>
        </main>

        {/* Footer */}
        <footer className="py-6 px-8 border-t border-purple-500/10 text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} MARADONAvx. All rights reserved.
        </footer>
      </div>
    </div>
  )
}
