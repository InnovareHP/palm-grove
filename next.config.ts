import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next 16 locks optimization to the qualities listed here (default [75]).
    // The photography is large and soft-edged, so 75 visibly muddies it.
    qualities: [75, 90],
  },

  /**
   * Files under `public/` are served with `max-age=0` by default, so the
   * brochure PDF and the full-size spreads behind it are re-downloaded on every
   * view. They only change when `pnpm brochure` is re-run, so a day of caching
   * with a week of stale-while-revalidate costs nothing and saves ~1MB a visit.
   */
  async headers() {
    return [
      {
        source: "/palm-grove-brochure.pdf",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
      {
        source: "/figma/brochure/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
