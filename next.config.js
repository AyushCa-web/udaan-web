/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',                    // ✅ REQUIRED for GitHub Pages
  images: {
    unoptimized: true                 // ✅ Static images only
  },
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
