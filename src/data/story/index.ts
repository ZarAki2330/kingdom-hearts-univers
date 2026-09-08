import type { GameStory } from "./types";
import { story as kingdomHearts } from "./kingdom-hearts";
import { story as chainOfMemories } from "./chain-of-memories";
import { story as kingdomHeartsII } from "./kingdom-hearts-ii";

export * from "./types";

/** Résumés détaillés disponibles, dans l'ordre où ils sont écrits. */
export const stories: GameStory[] = [kingdomHearts, chainOfMemories, kingdomHeartsII];

const byGame = new Map(stories.map((s) => [s.game, s]));

/**
 * Résumé d'un jeu. Les remakes et les compilations renvoient vers le jeu d'origine
 * (Re:Chain of Memories → Chain of Memories), pour ne pas dupliquer le texte.
 */
export function getStory(gameSlug: string): GameStory | undefined {
  return byGame.get(gameSlug);
}

export function hasStory(gameSlug: string): boolean {
  return byGame.has(gameSlug);
}
