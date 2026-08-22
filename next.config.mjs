import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  experimental: {
    optimizePackageImports: [
      'lucide-react',
      'framer-motion',
      'gsap',
      '@headlessui/react',
      '@heroicons/react'
    ],
  },
  turbopack: {
    root: path.resolve('.'),
  },
};

export default nextConfig;
