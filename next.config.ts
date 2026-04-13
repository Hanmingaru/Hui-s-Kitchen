import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Hui-s-Kitchen",
  images: {
    unoptimized: true,
    minimumCacheTTL: 60,
  },
  devIndicators: false,
};

export default nextConfig;
