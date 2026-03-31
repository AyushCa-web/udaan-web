/** @type {import('next').NextConfig} */
const isGithubPages = process.env.DEPLOY_TARGET === 'ghpages';

const nextConfig = {
  output: 'export',
  basePath: isGithubPages ? '/udaan-web' : '',
  assetPrefix: isGithubPages ? '/udaan-web/' : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
