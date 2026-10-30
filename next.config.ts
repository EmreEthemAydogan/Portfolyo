import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 75: fotoğraflar; 85: ince metin içeren ekran görüntüleri.
    qualities: [75, 85],
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
