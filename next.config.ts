import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages (github.com/enmus89/enmus89.github.io).
  // Root-hosted user page: no basePath/assetPrefix needed.
  output: "export",
  trailingSlash: true,
};

export default nextConfig;
