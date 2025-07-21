import { ExternalLink } from "lucide-react"
import Link from "next/link"

export function ProjectsSection() {
  const discordLink = "https://discord.gg/YY6kbXWNalso"

  const projects = [
    {
      title: "𝐖𝐄𝐁 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐄𝐑",
      description: "secure your website from the attack and updat the security",
      image: "/images/abstract-foliage.png",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Python"],
    },
    {
      title: "𝐆𝐀𝐌𝐄 𝐂𝐇𝐄𝐀𝐓",
      description: "𝐬𝐞𝐥𝐥𝐢𝐧𝐠 𝐟𝐫𝐞𝐞 𝐟𝐢𝐫𝐞 𝐩𝐜 𝐩𝐚𝐧𝐞𝐥 , 𝐢𝐨𝐬 , 𝐚𝐧𝐝𝐫𝐨𝐢𝐝 ...",
      image: "/placeholder.svg?height=400&width=600&text=Portfolio+Website",
      technologies: ["C++", "C#", "Hex"],
    },
    {
      title: "𝐖𝐄𝐁 𝐌𝐀𝐊𝐄𝐑", // Updated title
      description: "𝐢 𝐰𝐢𝐥𝐥 𝐦𝐚𝐤𝐞 𝐲𝐨𝐮 𝐭𝐡𝐞 𝐛𝐞𝐬𝐭 𝐰𝐞𝐛𝐬𝐢𝐭𝐞 𝐰𝐢𝐭𝐡 𝐲𝐨𝐮𝐫 𝐜𝐨𝐦𝐩𝐥𝐞𝐭𝐥𝐲 𝐜𝐡𝐨𝐢𝐜𝐞 𝐰𝐢𝐭𝐡 𝐯𝐢𝐩 𝐬𝐞𝐫𝐯𝐢𝐜𝐞𝐬", // Updated description
      image: "/placeholder.svg?height=400&width=600&text=Game+Development",
      technologies: ["HTML", "CSS", "JS"], // Kept existing technologies as they are relevant
    },
  ]

  return (
    <section id="projects" className="py-20 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Featured Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-black/40 border border-purple-500/20 backdrop-blur-sm overflow-hidden rounded-lg"
            >
              <div className="relative h-48 w-full bg-gray-800 flex items-center justify-center">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl text-purple-400 mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-purple-900/30 text-purple-300 border border-purple-500/30 px-2 py-1 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link href={discordLink} target="_blank" rel="noopener noreferrer">
                  <button className="w-full border border-purple-500/50 text-white hover:bg-purple-500/20 bg-transparent py-2 px-4 rounded transition-colors inline-flex items-center justify-center">
                    View Project
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
