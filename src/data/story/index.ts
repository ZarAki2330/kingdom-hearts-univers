import type { GameStory } from "./types";
import { story as kingdomHearts } from "./kingdom-hearts";
import { story as chainOfMemories } from "./chain-of-memories";
import { story as kingdomHeartsII } from "./kingdom-hearts-ii";
import { story as days } from "./358-2-days";
import { story as birthBySleep } from "./birth-by-sleep";
import { story as reCoded } from "./re-coded";
import { story as dreamDropDistance } from "./dream-drop-distance";
import { story as chi } from "./kingdom-hearts-chi";
import { story as darkRoad } from "./dark-road";
import { story as fragmentaryPassage } from "./0-2-birth-by-sleep-a-fragmentary-passage";
import { story as kingdomHeartsIII } from "./kingdom-hearts-iii";
import { story as melodyOfMemory } from "./melody-of-memory";
import { story as missingLink } from "./missing-link";
import { story as kingdomHeartsIV } from "./kingdom-hearts-iv";

export * from "./types";

/** Résumés détaillés disponibles, dans l'ordre où ils sont écrits. */
export const stories: GameStory[] = [
  chi,
  darkRoad,
  birthBySleep,
  kingdomHearts,
  chainOfMemories,
  days,
  kingdomHeartsII,
  reCoded,
  dreamDropDistance,
  fragmentaryPassage,
  kingdomHeartsIII,
  melodyOfMemory,
  missingLink,
  kingdomHeartsIV,
];

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
