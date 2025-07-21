// Security utility functions

/**
 * Sanitizes user input to prevent XSS attacks
 * @param input - The user input to sanitize
 * @returns Sanitized string
 */
export function sanitizeInput(input: string): string {
  if (!input) return ""

  // Replace potentially dangerous characters
  return input
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;")
    .replace(/\\/g, "&#x5C;")
    .replace(/`/g, "&#96;")
}

/**
 * Validates email format
 * @param email - Email to validate
 * @returns Boolean indicating if email is valid
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return emailRegex.test(email)
}

/**
 * Prevents SQL injection by escaping SQL special characters
 * Note: This is a basic implementation. In production, use parameterized queries.
 * @param input - The user input to sanitize
 * @returns Sanitized string
 */
export function escapeSql(input: string): string {
  if (!input) return ""

  // Replace SQL injection characters
  return input
    .replace(/'/g, "''")
    .replace(/\\/g, "\\\\")
    .replace(/\x00/g, "\\0")
    .replace(/\n/g, "\\n")
    .replace(/\r/g, "\\r")
    .replace(/\x1a/g, "\\Z")
}
