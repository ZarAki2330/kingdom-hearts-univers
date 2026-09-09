import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { games } from "@/data/games";
import { CATEGORIES, CATEGORY_SLUG, entries } from "@/data/encyclopedia";
import { stories } from "@/data/story";
import { languageAlternates, localeUrl } from "@/lib/site";

/**
 * Plan du site : toutes les pages, dans les six langues, avec leurs traductions déclarées
 * en alternates (hreflang). Les priorités suivent l'importance éditoriale : accueil et
 * sections d'abord, fiches ensuite.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const sections: { path: string; priority: number }[] = [
    { path: "/", priority: 1 },
    { path: "/jeux", priority: 0.9 },
    { path: "/encyclopedie", priority: 0.9 },
    { path: "/histoire", priority: 0.9 },
    { path: "/chronologie", priority: 0.8 },
    { path: "/glossaire", priority: 0.7 },
    { path: "/a-propos", priority: 0.4 },
    { path: "/accessibilite", priority: 0.3 },
    ...CATEGORIES.map((c) => ({ path: `/encyclopedie/${CATEGORY_SLUG[c]}`, priority: 0.8 })),
  ];

  const pages: { path: string; priority: number }[] = [
    ...sections,
    ...games.map((g) => ({ path: `/jeux/${g.slug}`, priority: 0.7 })),
    ...stories.map((s) => ({ path: `/histoire/${s.game}`, priority: 0.7 })),
    ...entries.map((e) => ({ path: `/encyclopedie/${CATEGORY_SLUG[e.category]}/${e.slug}`, priority: 0.6 })),
  ];

  const lastModified = new Date();
  return pages.flatMap(({ path, priority }) =>
    routing.locales.map((locale) => ({
      url: localeUrl(locale, path),
      lastModified,
      changeFrequency: "monthly" as const,
      // Les traductions comptent moins que la version française, langue de référence du site.
      priority: locale === routing.defaultLocale ? priority : Math.max(0.1, priority - 0.2),
      alternates: { languages: languageAlternates(path) },
    })),
  );
}
