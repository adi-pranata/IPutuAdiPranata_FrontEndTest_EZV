import type { NextConfig } from "next";

const nextConfig = {
  experimental: {
    // Enable app directory features for Next.js 15
    appDir: true,
  },
  // Enable strict mode for better development experience
  reactStrictMode: true,
  // Enable SWC minifier for faster builds
  swcMinify: true,
  // Configure image domains if needed
  images: {
    domains: ['jsonplaceholder.typicode.com'],
  },
  // Enable compression
  compress: true,
  // Configure headers for better security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
}

export default nextConfig;
