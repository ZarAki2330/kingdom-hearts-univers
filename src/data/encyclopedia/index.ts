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
import { lore as loreCharactersA } from "./lore/characters-a";
import { lore as loreCharactersB } from "./lore/characters-b";
import { lore as loreCharactersC } from "./lore/characters-c";
import { lore as loreCharactersD } from "./lore/characters-d";
import { lore as loreCharactersE } from "./lore/characters-e";
import { lore as loreCharactersF } from "./lore/characters-f";
import { lore as loreWorlds } from "./lore/worlds";
import { lore as loreWorldsB } from "./lore/worlds-b";
import { lore as loreWorldsC } from "./lore/worlds-c";
import { lore as loreConcepts } from "./lore/concepts";
import { lore as loreKeyblades } from "./lore/keyblades";
import { lore as loreKeybladesB } from "./lore/keyblades-b";
import { lore as loreKeybladesC } from "./lore/keyblades-c";
import { lore as loreKeybladesD } from "./lore/keyblades-d";
import type { EntryLore } from "./types";
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

/** Histoires détaillées (src/data/encyclopedia/lore/*), fusionnées par slug. */
const lores: Record<string, EntryLore> = { ...loreCharactersA, ...loreCharactersB, ...loreCharactersC, ...loreCharactersD, ...loreCharactersE, ...loreCharactersF, ...loreWorlds, ...loreWorldsB, ...loreWorldsC, ...loreConcepts, ...loreKeyblades, ...loreKeybladesB, ...loreKeybladesC, ...loreKeybladesD };

/** Illustrations fusionnées (src/data/encyclopedia/images.ts) ; une image déclarée dans l'entrée garde la priorité. */
export const entries: Entry[] = rawEntries.map((raw) => {
  let e = raw.image || !entryImages[raw.slug] ? raw : { ...raw, image: entryImages[raw.slug] };
  if (!e.lore && lores[e.slug]) e = { ...e, lore: lores[e.slug] };
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
