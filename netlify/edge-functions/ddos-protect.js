
export default async (request, context) => {
  const country = request.geo?.country?.toLowerCase() || 'unknown';
  const ip = request.headers.get("x-nf-client-connection-ip") || "unknown";

  // Block specific countries (example: RU, CN, KP, IR)
  const blockedCountries = ['ru', 'cn', 'kp', 'ir'];
  if (blockedCountries.includes(country)) {
    return new Response("🚫 Access denied (Region Blocked)", { status: 403 });
  }

  // Block specific suspicious IPs
  const blockedIps = ['1.2.3.4', '5.6.7.8'];
  if (blockedIps.includes(ip)) {
    return new Response("⛔ IP Blocked", { status: 403 });
  }

  // Allow all other requests
  return context.next();
}
