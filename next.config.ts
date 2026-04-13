import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    minimumCacheTTL: 60,
  },
  devIndicators: false,
};

export default nextConfig;
