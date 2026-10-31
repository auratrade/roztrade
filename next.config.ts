import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    agentFeedback: true,
  },
  reactCompiler: true,
  images: {
    unoptimized: true, // مفيد إذا كنت ستستخدم صوراً خارجية
  },
};

export default nextConfig;