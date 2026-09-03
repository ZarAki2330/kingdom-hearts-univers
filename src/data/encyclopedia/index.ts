import { originalCharacters } from "./characters-original";
import { guestCharacters } from "./characters-guest";
import { enemies } from "./enemies";
import { worlds } from "./worlds";
import { keyblades } from "./keyblades";
import { concepts } from "./concepts";
import { moreCharacters } from "./characters-more";
import { moreEnemies } from "./enemies-more";
import { moreWorlds } from "./worlds-more";
import { moreKeyblades } from "./keyblades-more";
import type { Category, Entry } from "./types";

export * from "./types";

/** Toutes les entrées de l'encyclopédie, toutes catégories confondues. */
export const entries: Entry[] = [
  ...originalCharacters,
  ...guestCharacters,
  ...moreCharacters,
  ...enemies,
  ...moreEnemies,
  ...worlds,
  ...moreWorlds,
  ...keyblades,
  ...moreKeyblades,
  ...concepts,
];

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
