import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  turbopack: {
    // The parent "Bionic Ai work" folder contains another project's lockfile,
    // which makes Next.js mis-detect the workspace root. Pin it explicitly.
    root: process.cwd(),
  },
};

export default nextConfig;
