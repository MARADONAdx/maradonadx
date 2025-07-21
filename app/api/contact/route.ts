import { NextResponse } from "next/server"
import { sanitizeInput, isValidEmail } from "@/lib/security"

// Track request counts for basic rate limiting
const requestCounts = new Map<string, { count: number; timestamp: number }>()

export async function POST(request: Request) {
  try {
    // Get client IP from headers (in production, this would come from the request)
    const ip = request.headers.get("x-forwarded-for") || "unknown"

    // Basic rate limiting for the API endpoint
    const now = Date.now()
    const ipData = requestCounts.get(ip)

    if (ipData) {
      // Reset if more than 1 minute has passed
      if (now - ipData.timestamp > 60000) {
        requestCounts.set(ip, { count: 1, timestamp: now })
      } else {
        // Increment and check limit (10 requests per minute)
        ipData.count++
        if (ipData.count > 10) {
          return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 })
        }
      }
    } else {
      // First request from this IP
      requestCounts.set(ip, { count: 1, timestamp: now })
    }

    const data = await request.json()

    // Sanitize all inputs to prevent XSS
    const name = sanitizeInput(data.name || "")
    const email = sanitizeInput(data.email || "")
    const subject = sanitizeInput(data.subject || "")
    const message = sanitizeInput(data.message || "")

    // Validate inputs
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    // In a real application, you would send this data to your email service
    // For example, using Nodemailer, SendGrid, etc.
    console.log("Contact form submission:", { name, email, subject, message })

    // For now, we'll just return a success response
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to process your request" }, { status: 500 })
  }
}
