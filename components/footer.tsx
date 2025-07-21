import Link from "next/link"
import { Github, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  const discordLink = "https://discord.gg/YY6kbXWNalso"
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-6 bg-black/40 backdrop-blur-sm border-t border-purple-500/20 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold text-white">
              MARADONA<span className="text-purple-400">vx</span>
            </Link>
          </div>

          <div className="flex space-x-6">
            <Link
              href={discordLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href={discordLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href={discordLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href={discordLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} MARADONAvx. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
