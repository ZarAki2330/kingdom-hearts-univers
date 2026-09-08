import type { LocalizedText } from "@/data/games";

/** Un chapitre du résumé : un moment de l'intrigue, titré. */
export interface StoryChapter {
  /** Identifiant stable, utilisé pour l'ancre et le sommaire (ex. « traverse-town »). */
  id: string;
  title: LocalizedText;
  /** Paragraphes séparés par une ligne vide (\n\n). */
  text: LocalizedText;
}

/** Résumé détaillé de l'histoire d'un jeu. */
export interface GameStory {
  /** Slug du jeu (src/data/games.ts). */
  game: string;
  /** Mise en situation : où en est la saga quand le jeu commence. */
  intro: LocalizedText;
  /** Le déroulé, dans l'ordre de l'histoire. */
  chapters: StoryChapter[];
  /** Ce que le jeu laisse en place pour la suite. */
  outcome: LocalizedText;
  /** Slugs d'entrées de l'encyclopédie à mettre en avant. */
  keyEntries?: string[];
  /** Jeux à lire ensuite (slugs). */
  next?: string[];
}
