"use client"

import { useEffect, useRef } from "react"

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    interface Particle {
      x: number
      y: number
      vx: number
      vy: number
      size: number
      color: string
      opacity: number
    }

    const particles: Particle[] = []
    const colors = ["#8B5CF6", "#A855F7", "#C084FC", "#3B82F6"] // More focused purple/blue tones
    const numParticles = 120 // Slightly more particles for connections
    const connectionDistance = 150 // Max distance to draw a line

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3, // Slower movement
        vy: (Math.random() - 0.5) * 0.3, // Slower movement
        size: Math.random() * 2 + 0.5, // Smaller particles
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.6 + 0.1, // Lower base opacity
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p1) => {
        p1.x += p1.vx
        p1.y += p1.vy

        // Wrap particles around the screen
        if (p1.x < 0) p1.x = canvas.width
        if (p1.x > canvas.width) p1.x = 0
        if (p1.y < 0) p1.y = canvas.height
        if (p1.y > canvas.height) p1.y = 0

        // Draw particle
        ctx.save()
        ctx.globalAlpha = p1.opacity
        ctx.fillStyle = p1.color
        ctx.beginPath()
        ctx.arc(p1.x, p1.y, p1.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()

        // Draw lines to other particles
        particles.forEach((p2) => {
          if (p1 === p2) return

          const distance = Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2))

          if (distance < connectionDistance) {
            ctx.save()
            ctx.strokeStyle = p1.color // Use particle color for line
            ctx.lineWidth = 0.5 // Thinner lines
            ctx.globalAlpha = (1 - distance / connectionDistance) * 0.3 // Line opacity fades with distance
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
            ctx.restore()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none" style={{ zIndex: 1 }} />
}
