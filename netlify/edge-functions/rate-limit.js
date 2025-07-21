// Simple rate limiting for Netlify Edge Functions
const rateLimitMap = new Map()

export default async (request, context) => {
  const ip = context.ip
  const now = Date.now()
  const windowMs = 60 * 1000 // 1 minute
  const maxRequests = 60 // 60 requests per minute

  // Get current request count for this IP
  const current = rateLimitMap.get(ip) || { count: 0, resetTime: now + windowMs }

  // Reset if window has expired
  if (now > current.resetTime) {
    current.count = 0
    current.resetTime = now + windowMs
  }

  // Increment request count
  current.count++
  rateLimitMap.set(ip, current)

  // Check if rate limit exceeded
  if (current.count > maxRequests) {
    return new Response(JSON.stringify({ error: "Too many requests, please try again later" }), {
      status: 429,
      headers: {
        "Content-Type": "application/json",
        "Retry-After": Math.ceil((current.resetTime - now) / 1000).toString(),
      },
    })
  }

  // Continue to the original request
  return context.next()
}
