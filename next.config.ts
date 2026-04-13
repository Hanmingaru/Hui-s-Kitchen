import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    minimumCacheTTL: 60,
  },
  devIndicators: false,
};

export default nextConfig;
