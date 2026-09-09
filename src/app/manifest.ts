import type { MetadataRoute } from "next";

/** Manifeste d'application : nom, icônes et couleurs pour l'ajout à l'écran d'accueil. */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kingdom Hearts Univers",
    short_name: "KH Univers",
    description: "L'encyclopédie francophone de l'univers Kingdom Hearts.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b1020",
    theme_color: "#0b1020",
    lang: "fr",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-touch-icon.png", sizes: "180x180", type: "image/png", purpose: "maskable" },
    ],
  };
}
