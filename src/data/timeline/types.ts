import type { LocalizedText } from "@/data/games";

/** Grande période de l'univers (Âge des Fées, ère de Xehanort…). */
export interface Era {
  id: string;
  title: LocalizedText;
  /** Une ligne situant la période. */
  summary: LocalizedText;
}

/** Événement marquant de la chronologie interne. */
export interface StoryEvent {
  id: string;
  /** Identifiant de l'ère (src/data/timeline/eras). */
  era: string;
  /** Repère temporel affiché : « environ dix ans avant Kingdom Hearts »… */
  when?: LocalizedText;
  title: LocalizedText;
  /** Un ou deux paragraphes séparés par une ligne vide. */
  text: LocalizedText;
  /** Jeu où l'événement est raconté (slug de src/data/games.ts). */
  game?: string;
  /** Entrées de l'encyclopédie concernées. */
  entries?: string[];
}
