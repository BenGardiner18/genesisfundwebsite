/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  devIndicators: {
    autoPrerender: false,
  },
};

module.exports = nextConfig;
