import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

/**
 * En-têtes de sécurité, appliqués à toutes les pages. Ils ne changent rien à l'affichage
 * mais ferment des portes courantes : typage MIME deviné, mise en cadre du site par un
 * tiers, fuite de l'adresse complète vers les sites externes, accès aux capteurs.
 */
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      // Les visuels ne changent jamais sans changer de nom de fichier : cache long.
      {
        source: "/images/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");
export default withNextIntl(nextConfig);
