import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const discordLink = "https://discord.gg/YY6kbXWNalso"

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-6">
          <span className="text-white">Master</span>
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Developer
          </span>
        </h1>

        <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
          Creative Director and UI/UX Designer, working in web development and print media.
        </p>

        <Link href="#projects">
          <button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center">
            View My Work
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </Link>
      </div>
    </section>
  )
}
