import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/filmler",
        destination: "/filmler/vizyondakiler",
        permanent: false,
      },
    ];
  },
  images: {
    domains: ["m.media-amazon.com"],
  },
};

export default nextConfig;
