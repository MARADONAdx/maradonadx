"use client"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { PricingSection } from "@/components/pricing-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ParticleBackground } from "@/components/particle-background"
import Image from "next/image"
import { useState } from "react"

export default function Home() {
  const [hasEntered, setHasEntered] = useState(false)

  if (!hasEntered) {
    return (
      <div className="flex items-center justify-center h-screen bg-black text-white text-center px-4">
        <div>
          <h1 className="text-4xl font-bold mb-6">Welcome to ZEROTRACE</h1>
          <p className="mb-4 text-lg">Click the button below to access the website</p>
          <a
            href="https://shrinkme.ink/CRiA1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition"
            onClick={() => setHasEntered(true)}
          >
            Enter Website 🔐
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Static Background Image */}
      <Image
        src="/images/abstract-foliage.png"
        alt="Abstract foliage background"
        fill
        className="object-cover z-0"
        priority
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Particle Background */}
      <ParticleBackground />

      <Header />
      <main className="relative z-20">
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
