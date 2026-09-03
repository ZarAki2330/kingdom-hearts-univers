import { originalCharacters } from "./characters-original";
import { guestCharacters } from "./characters-guest";
import { enemies } from "./enemies";
import { worlds } from "./worlds";
import { keyblades } from "./keyblades";
import { concepts } from "./concepts";
import type { Category, Entry } from "./types";

export * from "./types";

/** Toutes les entrées de l'encyclopédie, toutes catégories confondues. */
export const entries: Entry[] = [...originalCharacters, ...guestCharacters, ...enemies, ...worlds, ...keyblades, ...concepts];

const bySlug = new Map(entries.map((e) => [e.slug, e]));

export function getEntry(slug: string): Entry | undefined {
  return bySlug.get(slug);
}

export function entriesOf(category: Category): Entry[] {
  return entries.filter((e) => e.category === category);
}

/** Entrées qui apparaissent dans un jeu donné. */
export function entriesInGame(gameSlug: string): Entry[] {
  return entries.filter((e) => e.appearances.includes(gameSlug));
}

/** Vérifie la cohérence des relations (slugs existants). Utilisé par le script de contrôle. */
export function brokenRelations(): { from: string; to: string }[] {
  const out: { from: string; to: string }[] = [];
  for (const e of entries) for (const r of e.relations ?? []) if (!bySlug.has(r.slug)) out.push({ from: e.slug, to: r.slug });
  return out;
}
