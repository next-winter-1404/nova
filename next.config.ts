import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // cacheComponents: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.weatherapi.com",
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'localhost',
        port: '3000',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'next.genzuni.website',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
