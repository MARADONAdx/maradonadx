import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Simple rate limiting implementation
const RATE_LIMIT_DURATION = 60 * 1000 // 1 minute
const MAX_REQUESTS = 60 // 60 requests per minute
const ipRequestMap = new Map<string, { count: number; timestamp: number }>()

export function middleware(request: NextRequest) {
  // Get client IP
  const ip = request.ip || "unknown"

  // Basic rate limiting
  const now = Date.now()
  const ipData = ipRequestMap.get(ip)

  if (ipData) {
    // Reset count if time window has passed
    if (now - ipData.timestamp > RATE_LIMIT_DURATION) {
      ipRequestMap.set(ip, { count: 1, timestamp: now })
    } else {
      // Increment count
      ipData.count++

      // Check if rate limit exceeded
      if (ipData.count > MAX_REQUESTS) {
        return new NextResponse(JSON.stringify({ error: "Too many requests, please try again later" }), {
          status: 429,
          headers: { "Content-Type": "application/json" },
        })
      }
    }
  } else {
    // First request from this IP
    ipRequestMap.set(ip, { count: 1, timestamp: now })
  }

  // Clean up old entries every 100 requests
  if (Math.random() < 0.01) {
    const cutoff = now - RATE_LIMIT_DURATION
    for (const [key, value] of ipRequestMap.entries()) {
      if (value.timestamp < cutoff) {
        ipRequestMap.delete(key)
      }
    }
  }

  // Get response
  const response = NextResponse.next()

  // Add security headers
  response.headers.set("X-Frame-Options", "DENY")
  response.headers.set("X-Content-Type-Options", "nosniff")
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")
  response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()")

  // Strict Content Security Policy to prevent XSS
  response.headers.set(
    "Content-Security-Policy",
    "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https:; font-src 'self'; connect-src 'self'; frame-ancestors 'none'; form-action 'self'; base-uri 'self'; object-src 'none'",
  )

  // XSS Protection header (although modern browsers rely more on CSP)
  response.headers.set("X-XSS-Protection", "1; mode=block")

  return response
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
