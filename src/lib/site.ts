import { routing, type Locale } from "@/i18n/routing";

/**
 * Adresse publique du site, utilisée par le sitemap, robots.txt et les balises Open Graph.
 * Elle vient de NEXT_PUBLIC_SITE_URL au déploiement ; la valeur de repli sert en local.
 */
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");
  // Sur Vercel, les déploiements de préversion n'ont pas d'adresse fixe : on prend celle
  // que la plateforme fournit, pour que les liens du sitemap et des aperçus restent justes.
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
  if (vercel) return `https://${vercel.replace(/\/$/, "")}`;
  return "http://localhost:3000";
}

export const SITE_URL = resolveSiteUrl();

/** Chemin complet d'une page dans une langue : le français n'a pas de préfixe (localePrefix "as-needed"). */
export function localePath(locale: Locale, path: string): string {
  const clean = path === "/" ? "" : path;
  return locale === routing.defaultLocale ? `/${clean}`.replace(/\/+/g, "/") : `/${locale}${clean}`;
}

/** URL absolue d'une page dans une langue. */
export function localeUrl(locale: Locale, path: string): string {
  return SITE_URL + localePath(locale, path);
}

/** Les traductions d'une page, au format attendu par `alternates.languages`. */
export function languageAlternates(path: string): Record<string, string> {
  return Object.fromEntries(routing.locales.map((l) => [l, localeUrl(l, path)]));
}
