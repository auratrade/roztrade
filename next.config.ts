import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  reactCompiler: true,

  // ✅ إعدادات GitHub Pages
  output: "export",       // تفعيل التصدير الثابت
  basePath: "/roz",       // اسم مستودعك على GitHub
  images: {
    unoptimized: true,    // ضروري للتصدير الثابت (GitHub Pages لا يدعم next/image optimization)
  },
};

export default nextConfig;