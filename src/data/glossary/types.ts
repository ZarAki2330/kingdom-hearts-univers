import type { LocalizedText } from "@/data/games";

/** Famille d'un terme, utilisée comme filtre du glossaire. */
export type GlossaryCategory = "heart" | "creature" | "weapon" | "place" | "group" | "gameplay" | "other";

/** Entrée du glossaire : un terme de la saga expliqué en clair. */
export interface GlossaryTerm {
  /** Identifiant stable, utilisé pour l'ancre (ex. « sans-coeur »). */
  id: string;
  /** Le terme, dans chaque langue (le japonais est facultatif). */
  term: LocalizedText;
  /** Terme anglais officiel, quand il diffère du français. */
  en?: string;
  category: GlossaryCategory;
  /** Définition courte, une phrase. */
  short: LocalizedText;
  /** Explication complète : un ou deux paragraphes séparés par une ligne vide. */
  text: LocalizedText;
  /** Entrée de l'encyclopédie correspondante (slug). */
  entry?: string;
  /** Autres termes du glossaire liés (ids). */
  related?: string[];
}
