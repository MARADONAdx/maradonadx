"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

export function Header() {
  const [currentTime, setCurrentTime] = useState("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const timeString = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })
      setCurrentTime(timeString)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-black/20 backdrop-blur-sm">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/" className="flex items-center space-x-3 text-xl font-bold text-white">
          <Image
            src="/images/logo.png"
            alt="MARADONAvx Logo"
            width={36}
            height={36}
            className="rounded-full object-cover"
            priority
          />
          <span>
            MARADONA<span className="text-purple-400">vx</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="#home" className="text-white hover:text-purple-400 transition-colors">
            Home
          </Link>
          <Link href="#projects" className="text-white hover:text-purple-400 transition-colors">
            Projects
          </Link>
          <Link href="#skills" className="text-white hover:text-purple-400 transition-colors">
            Skills
          </Link>
          <Link href="#contact" className="text-white hover:text-purple-400 transition-colors">
            Contact
          </Link>
          <div className="bg-purple-900/30 backdrop-blur-sm border border-purple-500/30 rounded-lg px-3 py-1 text-purple-300 text-sm">
            {currentTime}
          </div>
        </div>
      </nav>
    </header>
  )
}
