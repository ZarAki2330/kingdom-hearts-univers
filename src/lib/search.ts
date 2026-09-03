import { games } from "@/data/games";
import { CATEGORY_SLUG, entries, type Category } from "@/data/encyclopedia";

/** Élément de l'index de recherche : léger, sérialisable, commun au client et au serveur. */
export interface SearchItem {
  type: "game" | Category;
  slug: string;
  /** Chemin sans préfixe de langue */
  href: string;
  name: string;
  /** Nom anglais (pour les autres langues) */
  nameEn?: string;
  /** Texte secondaire fr / en */
  sub: { fr: string; en: string };
  /** Tout ce qui sert à la correspondance, en minuscules sans accents */
  haystack: string;
  accent: string;
}

function fold(s: string): string {
  return s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
}

export function buildIndex(): SearchItem[] {
  const out: SearchItem[] = [];
  for (const g of games) {
    out.push({
      type: "game",
      slug: g.slug,
      href: `/jeux/${g.slug}`,
      name: g.title,
      sub: { fr: g.platforms.join(" · "), en: g.platforms.join(" · ") },
      haystack: fold([g.title, g.shortTitle, g.developer, ...g.platforms].join(" ")),
      accent: g.accent,
    });
  }
  for (const e of entries) {
    out.push({
      type: e.category,
      slug: e.slug,
      href: `/encyclopedie/${CATEGORY_SLUG[e.category]}/${e.slug}`,
      name: e.name,
      nameEn: e.names?.en,
      sub: { fr: e.tagline.fr, en: e.tagline.en },
      haystack: fold([e.name, ...(e.aliases ?? []), ...(e.tags ?? []), ...Object.values(e.names ?? {}), e.tagline.fr, e.tagline.en].join(" ")),
      accent: e.accent,
    });
  }
  return out;
}

/** Recherche simple : tous les mots doivent apparaître ; les correspondances sur le nom passent en premier. */
export function search(items: SearchItem[], query: string, limit = 12): SearchItem[] {
  const words = fold(query).split(/\s+/).filter(Boolean);
  if (words.length === 0) return [];
  const scored: { item: SearchItem; score: number }[] = [];
  for (const it of items) {
    if (!words.every((w) => it.haystack.includes(w))) continue;
    const name = fold(it.name + " " + (it.nameEn ?? ""));
    let score = 0;
    for (const w of words) {
      if (name === w) score += 100;
      else if (name.startsWith(w)) score += 40;
      else if (name.includes(w)) score += 20;
      else score += 5;
    }
    scored.push({ item: it, score });
  }
  return scored.sort((a, b) => b.score - a.score || a.item.name.localeCompare(b.item.name)).slice(0, limit).map((s) => s.item);
}
