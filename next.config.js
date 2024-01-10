/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')
const bundleAnalyzer = withBundleAnalyzer({enabled: true})

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

};

module.exports = nextConfig;
// module.exports = withPlugins([[bundleAnalyzer]], nextConfig)
