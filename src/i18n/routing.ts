import { defineRouting } from "next-intl/routing";

export const locales = ["fr", "en", "es", "de", "it", "ja"] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  fr: "Français",
  en: "English",
  es: "Español",
  de: "Deutsch",
  it: "Italiano",
  ja: "日本語",
};

export const routing = defineRouting({
  locales,
  defaultLocale: "fr",
  localePrefix: "as-needed",
  // Pas de redirection selon la langue du navigateur : « / » sert toujours le français.
  // Un visiteur anglophone arrivait sinon sur /en par une redirection, ce qui coûte un
  // aller-retour réseau et brouille l'URL canonique vue par les moteurs de recherche.
  // Le sélecteur de langue reste, lui, à un clic.
  localeDetection: false,
});
