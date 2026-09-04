import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow both standard (75) and hero-quality (90) image compression
    qualities: [75, 90],
  },
};

export default nextConfig;
