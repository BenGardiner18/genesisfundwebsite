/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['images.unsplash.com', 'pngqgrcukfipqmvx.public.blob.vercel-storage.com'],
    unoptimized: true,
  },
  devIndicators: {
    autoPrerender: false,
  },
  webpack: (config, { isServer }) => {
    // Only run this on client-side bundles
    if (!isServer) {
      const MiniCssExtractPlugin = require('mini-css-extract-plugin');
      config.plugins.push(
        new MiniCssExtractPlugin({
          filename: 'static/css/[name].[contenthash].css',
          chunkFilename: 'static/css/[name].[contenthash].css',
        })
      );
    }
    return config;
  },
};

module.exports = nextConfig;
