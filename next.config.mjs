/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/udaan-web',
  assetPrefix: '/udaan-web/',
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
