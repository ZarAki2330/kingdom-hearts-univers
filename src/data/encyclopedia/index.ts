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
import { moreCharacters2 } from "./characters-more-2";
import { moreEnemies2 } from "./enemies-more-2";
import { moreKeyblades2 } from "./keyblades-more-2";
import { entryImages } from "./images";
import { disneySources } from "./disney-sources";
import type { Category, Entry } from "./types";

export * from "./types";

/** Toutes les entrées de l'encyclopédie, toutes catégories confondues. */
const rawEntries: Entry[] = [
  ...originalCharacters,
  ...guestCharacters,
  ...moreCharacters,
  ...moreCharacters2,
  ...enemies,
  ...moreEnemies,
  ...moreEnemies2,
  ...worlds,
  ...moreWorlds,
  ...keyblades,
  ...moreKeyblades,
  ...moreKeyblades2,
  ...concepts,
];

/** Illustrations fusionnées (src/data/encyclopedia/images.ts) ; une image déclarée dans l'entrée garde la priorité. */
export const entries: Entry[] = rawEntries.map((raw) => {
  const e = raw.image || !entryImages[raw.slug] ? raw : { ...raw, image: entryImages[raw.slug] };
  if (e.category === "characters" && !e.source && disneySources[e.slug]) return { ...e, source: disneySources[e.slug] };
  return e;
});

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
