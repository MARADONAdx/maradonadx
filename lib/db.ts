// Example of SQL injection prevention if you add a database later

/**
 * Example of a safe database query function that prevents SQL injection
 * This is just an example - you would replace this with your actual database client
 */
export async function safeQuery(query: string, params: any[]) {
  // This is a placeholder for demonstration purposes
  // In a real application, you would use a proper database client
  // that supports parameterized queries

  console.log("Safe query:", query, params)

  // Example implementation with a hypothetical database client:
  /*
  const client = await db.connect()
  try {
    // Use parameterized queries with placeholders (?, $1, etc.)
    // Never concatenate user input directly into SQL strings
    const result = await client.query(query, params)
    return result.rows
  } finally {
    client.release()
  }
  */

  return []
}

/**
 * NEVER do this - this is vulnerable to SQL injection:
 *
 * function unsafeQuery(userId) {
 *   // DON'T DO THIS - concatenating user input directly into SQL
 *   const query = `SELECT * FROM users WHERE id = '${userId}'`
 *   return db.query(query)
 * }
 */
