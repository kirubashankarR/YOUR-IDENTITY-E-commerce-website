/** @type {import('next').NextConfig} */
const nextConfig = {
  // Simple, stable configuration
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Faster builds
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig