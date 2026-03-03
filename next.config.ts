import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/together",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
