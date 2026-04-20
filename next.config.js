/** @type {import('next').NextConfig} */
// NOTE: next.config.mjs takes priority — this file is kept as a fallback only.
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
