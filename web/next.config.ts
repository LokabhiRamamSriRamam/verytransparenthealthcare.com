import type { NextConfig } from "next";

const API_URL = process.env.API_URL;

const nextConfig: NextConfig = {
  devIndicators: false,
  // Locally, browser calls to /api/* are proxied to the Express server when
  // API_URL is set. In production the Next.js route handlers serve /api/*
  // directly, so no rewrite is registered.
  async rewrites() {
    if (!API_URL) return [];
    return [{ source: "/api/:path*", destination: `${API_URL}/api/:path*` }];
  },
};

export default nextConfig;
