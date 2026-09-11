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

/**
 * Un tableau à trois colonnes. Par défaut il sert de tableau d'emplacements (monde, ce
 * qu'on y trouve, où) ; `columns` permet de le réutiliser pour autre chose — le choix des
 * armes, l'effet des réponses, une liste de provisions.
 */
export interface WalkTable {
  id: string;
  title: LocalizedText;
  intro?: LocalizedText;
  /** En-têtes personnalisés, à la place de Monde / Ce qu'on y trouve / Où. */
  columns?: [LocalizedText, LocalizedText, LocalizedText];
  /**
   * Tableau replié au chargement, dans un volet dépliant. À réserver aux longues listes
   * de référence (l'inventaire, le bestiaire) : sur une page qui en aligne cinq, tout
   * déplier oblige à faire défiler des centaines de lignes pour atteindre la suivante.
   */
  collapsed?: boolean;
  rows: WalkPlace[];
}

/** Un affrontement : combat de boss, duel ou rencontre imposée. */
export interface WalkBoss {
  id: string;
  name: LocalizedText;
  /** Slug de la fiche encyclopédique correspondante, quand elle existe. */
  entry?: string;
  /** Visuel du combat ; à défaut, l'illustration de la fiche liée est utilisée. */
  image?: WalkImage;
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
  /** Tableaux de la section : provisions, choix, emplacements. */
  tables?: WalkTable[];
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
  /** Ce que la quête rapporte, par paliers : un tableau, plus lisible qu'une suite d'encadrés. */
  rewards?: WalkRewardTable;
  bosses?: WalkBoss[];
  /** Bestiaire : des fiches cliquables avec les caractéristiques, en grille illustrée. */
  bestiary?: WalkBeastGroup[];
}

/**
 * Une fiche d'ennemi du bestiaire : les caractéristiques relevées en jeu, et le lien vers
 * la fiche encyclopédique. Les valeurs sont notées « début / fin » — la seconde est celle
 * que l'ennemi atteint une fois les mondes montés en niveau, après la Forteresse Oubliée.
 * Une valeur unique signifie que l'ennemi ne monte pas.
 */
export interface WalkBeast {
  /** Slug de la fiche encyclopédique : c'est elle que la carte ouvre. */
  entry: string;
  hp: string;
  atk: string;
  def: string;
  /** Expérience gagnée. */
  exp: string;
  /** Les mondes où on le croise, séparés par des virgules. */
  worlds: LocalizedText;
  /** Ce qu'il faut savoir pour l'affronter, en une phrase. */
  note?: LocalizedText;
}

/** Un groupe du bestiaire : une famille, un milieu, une exclusivité Final Mix. */
export interface WalkBeastGroup {
  id: string;
  title: LocalizedText;
  intro?: LocalizedText;
  beasts: WalkBeast[];
}

/** Tableau des récompenses d'une quête, par paliers. */
export interface WalkRewardTable {
  /** En-tête de la première colonne (« Chiots ramenés », « Coupe »). */
  tierHeader: LocalizedText;
  intro?: LocalizedText;
  rows: { tier: LocalizedText; reward: LocalizedText }[];
  /** Précision finale, sous le tableau. */
  note?: LocalizedText;
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
  /** Ce que réclame le 100 %, listé une fois pour toutes. */
  completion: CompletionGoal[];
  /** Le cheminement, dans l'ordre de la partie. */
  sections: WalkSection[];
  /** Les quêtes annexes, indépendantes du cheminement. */
  quests: WalkQuest[];
}
