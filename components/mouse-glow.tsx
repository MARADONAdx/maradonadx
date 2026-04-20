"use client"

import { useEffect, useRef } from "react"

export function MouseGlow() {
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
    <div
      ref={glowRef}
      className="pointer-events-none fixed z-20 -translate-x-1/2 -translate-y-1/2 rounded-full"
      style={{
        width: "600px",
        height: "600px",
        background: "radial-gradient(circle, rgba(147,51,234,0.15) 0%, rgba(109,40,217,0.05) 40%, transparent 70%)",
        filter: "blur(2px)",
        transition: "left 0.1s ease-out, top 0.1s ease-out",
      }}
    />
  )
}
