import type { MetadataRoute } from "next";

import { SITE_INFO } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    short_name: SITE_INFO.name,
    name: SITE_INFO.name,
    description: SITE_INFO.description,
    icons: [
      {
        // Local vector icon (serves as the PWA vector icon)
        src: "/icons/icon-vector.svg",
        type: "image/svg+xml",
        sizes: "any",
        purpose: "any",
      },
      {
        // Provide a maskable SVG (same artwork) for platforms that prefer maskable icons
        src: "/icons/maskable-icon.svg",
        type: "image/svg+xml",
        sizes: "512x512",
        purpose: "maskable",
      },
    ],
    id: "/?utm_source=pwa",
    start_url: "/?utm_source=pwa",
    display: "standalone",
    scope: "/",
    // screenshots intentionally omitted to avoid showing site screenshots in
    // the platform install prompt. Kept out to match user preference.
  };
}
