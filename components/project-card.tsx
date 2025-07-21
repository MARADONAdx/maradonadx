import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  technologies: string[]
  link: string
}

export function ProjectCard({ title, description, image, technologies, link }: ProjectCardProps) {
  return (
    <Card className="bg-black/40 border border-purple-500/20 backdrop-blur-sm overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="text-xl text-purple-400 mb-2">{title}</CardTitle>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <Badge key={tech} variant="outline" className="bg-purple-900/30 text-purple-300 border-purple-500/30">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Link href={link} className="w-full" target="_blank" rel="noopener noreferrer">
          <Button
            variant="outline"
            className="w-full border-purple-500/50 text-white hover:bg-purple-500/20 bg-transparent"
          >
            View Project
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
