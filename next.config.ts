import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Prevent worker concurrency conflicts on Windows */
  experimental: {
    cpus: 1,
  },
};

export default nextConfig;
