import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // disables built-in image optimization
  },
};

export default nextConfig;
