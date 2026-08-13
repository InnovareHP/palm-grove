import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next 16 locks optimization to the qualities listed here (default [75]).
    // The photography is large and soft-edged, so 75 visibly muddies it.
    qualities: [75, 90],
  },
};

export default nextConfig;
