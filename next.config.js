/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true  // Required for GitHub Pages
  },
  trailingSlash: true,
  // output: 'export',  // ❌ REMOVED - causes API route errors
  // swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
