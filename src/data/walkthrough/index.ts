import { getEntry } from "@/data/encyclopedia";
import { entryImages } from "@/data/encyclopedia/images";
import { walkthrough as kingdomHearts } from "./kingdom-hearts";
import { walkthrough as kingdomHeartsII } from "./kingdom-hearts-ii";
import { walkthrough as kingdomHeartsIII } from "./kingdom-hearts-iii";
import type { Walkthrough, WalkImage, WalkQuest, WalkSection } from "./types";

export * from "./types";

/** Les soluces disponibles, dans l'ordre où elles sont proposées. */
export const walkthroughs: Walkthrough[] = [kingdomHearts, kingdomHeartsII, kingdomHeartsIII];

const byGame = new Map(walkthroughs.map((w) => [w.game, w]));

/** La soluce d'un jeu, si elle existe. */
export function getWalkthrough(game: string): Walkthrough | undefined {
  return byGame.get(game);
}

/** Une section d'une soluce. */
export function getSection(game: string, id: string): WalkSection | undefined {
  return byGame.get(game)?.sections.find((s) => s.id === id);
}

/** Les sections rédigées : celles qui ont leur propre page. */
export function writtenSections(w: Walkthrough): WalkSection[] {
  return w.sections.filter((s) => s.status === "done");
}

/** Avancement d'une soluce, en sections rédigées sur sections prévues. */
export function progress(w: Walkthrough): { done: number; total: number; percent: number } {
  const total = w.sections.length;
  const done = writtenSections(w).length;
  return { done, total, percent: Math.round((done / total) * 100) };
}

/** Une quête annexe d'une soluce. */
export function getQuest(game: string, id: string): WalkQuest | undefined {
  return byGame.get(game)?.quests.find((q) => q.id === id);
}

/** Les quêtes rédigées : celles qui ont leur propre page. */
export function writtenQuests(w: Walkthrough): WalkQuest[] {
  return w.quests.filter((q) => q.status === "done");
}

/**
 * Vignette d'une section ou d'une quête : son image propre si elle en a une, sinon
 * l'illustration de l'entrée liée (le monde, le personnage, l'ennemi). Le site est déjà
 * illustré à 600 fiches : autant s'en servir plutôt que de dupliquer des fichiers.
 */
export function tileImage(item: { image?: WalkImage; world?: string; entry?: string }): WalkImage | undefined {
  if (item.image) return item.image;
  const slug = item.world ?? item.entry;
  return slug ? entryImages[slug] : undefined;
}

/** Couleur de l'entrée liée : elle teinte le fond de la tuile, comme les cartes de jeux. */
export function tileAccent(item: { world?: string; entry?: string }): string | undefined {
  const slug = item.world ?? item.entry;
  const e = slug ? getEntry(slug) : undefined;
  return e && "accent" in e ? (e.accent as string | undefined) : undefined;
}

/** La section précédente et la suivante, pour la navigation en bas de page. */
export function neighbours(w: Walkthrough, id: string): { previous?: WalkSection; next?: WalkSection } {
  const i = w.sections.findIndex((s) => s.id === id);
  if (i < 0) return {};
  return { previous: w.sections[i - 1], next: w.sections[i + 1] };
}
