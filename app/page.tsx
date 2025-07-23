import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { PricingSection } from "@/components/pricing-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ParticleBackground } from "@/components/particle-background"

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* 🎬 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔲 Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* ✨ Particle Background */}
      <ParticleBackground />

      {/* 🌐 Site Content */}
      <div className="relative z-20">
        <Header />
        <main>
          <HeroSection />
          <ProjectsSection />
          <SkillsSection />
          <PricingSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  )
}
