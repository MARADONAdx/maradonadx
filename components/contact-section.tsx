"use client"

import type React from "react"

import { useState } from "react"
import { Send, Loader2 } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  const discordLink = "https://discord.gg/Mr3aJbWA"
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus({ type: null, message: "" })

    try {
      if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        setFormStatus({
          type: "error",
          message: "All fields are required",
        })
        setIsSubmitting(false)
        return
      }

      if (!formData.email.includes("@")) {
        setFormStatus({
          type: "error",
          message: "Please enter a valid email address",
        })
        setIsSubmitting(false)
        return
      }

      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setFormStatus({
        type: "success",
        message: "Message sent successfully! We will get back to you soon.",
      })

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      setFormStatus({
        type: "error",
        message: "Failed to send message. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Contact</h2>

        <div className="bg-black/40 border border-purple-500/20 backdrop-blur-sm rounded-lg p-8">
          {formStatus.type === "success" ? (
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                <svg
                  className="w-8 h-8 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium text-white mb-2">Message Sent!</h3>
              <p className="text-gray-300 mb-6">{formStatus.message}</p>
              <button
                onClick={() => setFormStatus({ type: null, message: "" })}
                className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              {formStatus.type === "error" && (
                <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-md text-white">
                  {formStatus.message}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    id="name"
                    placeholder="Your name"
                    className="w-full bg-gray-900/50 border border-purple-500/30 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-purple-500"
                    value={formData.name}
                    onChange={handleChange}
                    maxLength={50}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="w-full bg-gray-900/50 border border-purple-500/30 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-purple-500"
                    value={formData.email}
                    onChange={handleChange}
                    maxLength={100}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                  Subject
                </label>
                <input
                  id="subject"
                  placeholder="How can I help you?"
                  className="w-full bg-gray-900/50 border border-purple-500/30 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-purple-500"
                  value={formData.subject}
                  onChange={handleChange}
                  maxLength={100}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Your message here..."
                  className="w-full bg-gray-900/50 border border-purple-500/30 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-purple-500 min-h-[150px] resize-vertical"
                  value={formData.message}
                  onChange={handleChange}
                  maxLength={1000}
                />
              </div>

              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-lg transition-colors inline-flex items-center justify-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </button>

                <Link href={discordLink} target="_blank" rel="noopener noreferrer">
                  <button
                    type="button"
                    className="border border-purple-500/50 text-white hover:bg-purple-500/20 bg-transparent py-3 px-4 rounded-lg transition-colors"
                  >
                    Join Discord
                  </button>
                </Link>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
