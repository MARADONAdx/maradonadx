import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { PricingSection } from "@/components/pricing-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ParticleBackground } from "@/components/particle-background"
import Image from "next/image" // Import Image component

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Static Background Image */}
      <Image
        src="/images/abstract-foliage.png" // New background image
        alt="Abstract foliage background"
        fill
        className="object-cover z-0"
        priority // Load immediately
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Particle Background - placed above the image but below content */}
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
