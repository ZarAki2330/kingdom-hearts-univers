import type { LocalizedText } from "@/data/games";

/**
 * Modèle des soluces. Une soluce se lit dans l'ordre : on suit les étapes, on affronte les
 * boss, on ramasse ce que la section contient. Les listes de ramassage sont séparées du
 * cheminement pour qu'un joueur pressé puisse ignorer le 100 % sans perdre le fil.
 */

/** Visuel d'une section ou d'une quête (voir docs/IMAGES.md). */
export interface WalkImage {
  src: string;
  credit: string;
  width: number;
  height: number;
}

/** Une étape du cheminement : un objectif, expliqué en quelques paragraphes. */
export interface WalkStep {
  /** Identifiant stable, sert d'ancre et de sommaire (ex. « radeau »). */
  id: string;
  title: LocalizedText;
  /** Paragraphes séparés par une ligne vide (\n\n). */
  text: LocalizedText;
  /** Illustration de l'étape, quand une capture éclaire mieux qu'un paragraphe. */
  image?: WalkImage;
}

/** Une ligne d'un tableau d'emplacements (dalmatiens, trinités, coffres…). */
export interface WalkPlace {
  /** Monde ou zone, tel qu'il est nommé sur le site. */
  world: LocalizedText;
  /** Ce qu'on y trouve (« Dalmatiens 4, 5 et 6 »). */
  what: LocalizedText;
  /** Où exactement, et comment y accéder. */
  where: LocalizedText;
  /** Ce qu'il faut posséder pour y arriver. */
  requires?: LocalizedText;
}

/** Un tableau d'emplacements, titré. */
export interface WalkTable {
  id: string;
  title: LocalizedText;
  intro?: LocalizedText;
  rows: WalkPlace[];
}

/** Un affrontement : combat de boss, duel ou rencontre imposée. */
export interface WalkBoss {
  id: string;
  name: LocalizedText;
  /** Slug de la fiche encyclopédique correspondante, quand elle existe. */
  entry?: string;
  /** Niveau conseillé pour aborder le combat sereinement. */
  level?: string;
  /** Ce que le combat rapporte (objets, capacités, points de compétence). */
  reward?: LocalizedText;
  /** La stratégie, en paragraphes. */
  tactics: LocalizedText;
  /** Les attaques à connaître : nom court + ce qu'il faut faire. */
  attacks?: { name: LocalizedText; note: LocalizedText }[];
}

/** Famille d'un élément à ramasser : détermine le pictogramme et le regroupement. */
export type CollectibleKind =
  | "chest"
  | "trinity"
  | "puppies"
  | "minigame"
  | "ability"
  | "keyblade"
  | "journal"
  | "synthesis"
  | "report";

/** Un élément de la liste de complétion d'une section. */
export interface WalkCollectible {
  kind: CollectibleKind;
  /** Ce que l'on obtient (« Chaîne Protectrice », « Dalmatiens 4, 5 et 6 »). */
  label: LocalizedText;
  /** Où le trouver, en une phrase. */
  where: LocalizedText;
  /** Ce qu'il faut posséder pour y accéder (« Trinité Charge », « Planer »). */
  requires?: LocalizedText;
  /** Précision utile : moment de la partie, piège, variante Final Mix. */
  note?: LocalizedText;
}

/** Une section de soluce : un monde, une visite, un chapitre. */
export interface WalkSection {
  id: string;
  title: LocalizedText;
  /** Sous-titre affiché sous le titre (« Première visite », « Après le Colisée »). */
  subtitle?: LocalizedText;
  /** Slug du monde dans l'encyclopédie, pour le lien et l'illustration. */
  world?: string;
  /** Slug d'une autre entrée, quand la section n'est pas rattachée à un monde. */
  entry?: string;
  /** Niveau conseillé à l'arrivée. */
  level?: string;
  /** Vignette de la section. À défaut, l'illustration du monde lié sert de vignette. */
  image?: WalkImage;
  /** Section rédigée ou simplement annoncée dans le sommaire. */
  status: "done" | "todo";
  intro?: LocalizedText;
  steps?: WalkStep[];
  bosses?: WalkBoss[];
  /** Tout ce que la section contient pour le 100 %. */
  collectibles?: WalkCollectible[];
  /** Ce qui devient définitivement inaccessible si on part sans l'avoir fait. */
  missable?: LocalizedText[];
}

/**
 * Une quête annexe : tout ce qui ne fait pas avancer l'histoire mais compte pour le 100 %
 * — collectes, mini-jeux, tournois, boss facultatifs. Elles sont présentées à part du
 * cheminement, en grille illustrée, comme sur les sites de soluces francophones.
 */
export interface WalkQuest {
  id: string;
  title: LocalizedText;
  /** Une ligne de résumé, affichée sous la vignette et en tête de page. */
  tagline: LocalizedText;
  /** Vignette ; à défaut, l'illustration de l'entrée liée. */
  image?: WalkImage;
  /** Slug d'une entrée de l'encyclopédie : sert de vignette et de lien. */
  entry?: string;
  status: "done" | "todo";
  intro?: LocalizedText;
  steps?: WalkStep[];
  /** Tableaux d'emplacements : c'est le cœur des quêtes de collecte. */
  tables?: WalkTable[];
  /** Ce que la quête rapporte, par paliers si besoin. */
  rewards?: { label: LocalizedText; text: LocalizedText }[];
  bosses?: WalkBoss[];
}

/** Un point à cocher dans le bilan de complétion du jeu. */
export interface CompletionGoal {
  id: string;
  title: LocalizedText;
  text: LocalizedText;
}

/** La soluce complète d'un jeu. */
export interface Walkthrough {
  /** Slug du jeu (src/data/games.ts). */
  game: string;
  /** Version couverte par le guide (« Final Mix, via HD 1.5+2.5 ReMIX »). */
  version: LocalizedText;
  /** Présentation : ce que le guide couvre et comment le lire. */
  intro: LocalizedText;
  /** Les réglages et les choix à connaître avant de lancer une partie. */
  before: WalkStep[];
  /** Ce que réclame le 100 %, listé une fois pour toutes. */
  completion: CompletionGoal[];
  /** Le cheminement, dans l'ordre de la partie. */
  sections: WalkSection[];
  /** Les quêtes annexes, indépendantes du cheminement. */
  quests: WalkQuest[];
}
