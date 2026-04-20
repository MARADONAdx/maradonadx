"use client"

import { useState, useEffect } from "react"
import { Shield, X } from "lucide-react"

export function SecurityWidget() {
  const [isVisible, setIsVisible] = useState(false)
  const [isClosed, setIsClosed] = useState(false)

  useEffect(() => {
    // Delay the appearance slightly for effect
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  if (isClosed) return null

  return (
    <div 
      className={`fixed top-24 right-8 z-50 transition-all duration-700 transform ${
        isVisible ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-[#0a0a0a]/90 backdrop-blur-xl border border-green-500/20 rounded-lg p-4 w-[340px] shadow-2xl shadow-green-900/10 relative">
        <button 
          onClick={() => setIsClosed(true)}
          className="absolute top-3 right-3 text-gray-500 hover:text-white transition-colors"
        >
          <X className="w-3 h-3" />
        </button>

        <div className="flex items-start gap-3">
          <Shield className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="text-green-500 font-bold text-[11px] tracking-wider mb-2 pr-4 uppercase">
              Security Protocol Active
            </h3>
            <p className="text-gray-400 text-[11px] leading-relaxed mb-3 pr-2">
              Your connection is now protected with military-grade encryption and anti-detection technology.
            </p>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_5px_rgba(34,197,94,0.5)]" />
              <span className="text-green-500/80 text-[11px]">Secure tunnel established</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
