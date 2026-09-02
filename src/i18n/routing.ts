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
});
