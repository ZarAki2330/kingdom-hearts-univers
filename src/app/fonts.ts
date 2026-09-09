import localFont from "next/font/local";

/**
 * Polices auto-hébergées, chargées par next/font : préchargement automatique et
 * métriques de repli calculées, ce qui supprime le décalage de mise en page au
 * moment où la police arrive (« swap »). Aucun appel à Google Fonts.
 */
export const display = localFont({
  src: [
    { path: "./fonts/cinzel-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "./fonts/cinzel-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-display-face",
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
  preload: true,
});

export const body = localFont({
  src: [{ path: "./fonts/nunito-latin-wght-normal.woff2", weight: "300 900", style: "normal" }],
  variable: "--font-body-face",
  display: "swap",
  fallback: ["system-ui", "-apple-system", "Segoe UI", "sans-serif"],
  preload: true,
});
