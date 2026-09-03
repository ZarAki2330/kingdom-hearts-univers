import type { Locale } from "@/i18n/routing";

/** Texte localisé : fr et en obligatoires, les autres langues retombent sur l'anglais. */
export type LocalizedText = Partial<Record<Locale, string>> & { fr: string; en: string };

/** Catégories de premier niveau : chacune a sa page /encyclopedie/<category>. */
export type Category = "characters" | "enemies" | "worlds" | "keyblades" | "concepts";

/** Sous-catégories (filtres) par catégorie. */
export type CharacterKind = "original" | "disney" | "final-fantasy" | "other";
export type EnemyKind = "heartless" | "nobody" | "unversed" | "dream-eater" | "other";
export type WorldKind = "original" | "disney" | "final-fantasy";

/** Alignement narratif d'un personnage : lumière, ténèbres, ou entre les deux. */
export type Alignment = "light" | "darkness" | "twilight" | "neutral";

export interface Relation {
  /** Slug de l'entrée liée (dans n'importe quelle catégorie). */
  slug: string;
  /** Nature du lien : « ami », « Simili de », « maître »… */
  label: LocalizedText;
}

export interface BaseEntry {
  slug: string;
  category: Category;
  /** Nom d'usage (français). */
  name: string;
  /** Nom en anglais et en japonais si différents, pour la recherche et les traductions. */
  names?: Partial<Record<Locale, string>> & { ja?: string };
  /** Autres appellations (Ansem = Xehanort Sans-cœur, etc.). */
  aliases?: string[];
  /** Phrase d'accroche (une ligne). */
  tagline: LocalizedText;
  /** Description encyclopédique (plusieurs paragraphes séparés par une ligne vide). */
  description: LocalizedText;
  /** Slugs des jeux (src/data/games.ts) où l'entrée apparaît, dans l'ordre chronologique interne. */
  appearances: string[];
  /** Première apparition (slug de jeu). */
  debut?: string;
  relations?: Relation[];
  /** Portrait officiel (voir docs/IMAGES.md). */
  image?: { src: string; credit: string; width: number; height: number };
  /** Couleur d'accent pour le portrait généré. */
  accent: string;
  /** Mots-clés pour la recherche. */
  tags?: string[];
}

export interface CharacterEntry extends BaseEntry {
  category: "characters";
  kind: CharacterKind;
  alignment?: Alignment;
  /** Monde d'origine (slug d'un monde ou texte libre). */
  homeworld?: string;
  /** Doubleurs (FR / EN / JA). */
  voice?: Partial<Record<"fr" | "en" | "ja", string>>;
  /** Groupe d'appartenance (Organisation XIII, Wayfinders…). */
  group?: string;
  /** Arme(s) de prédilection. */
  weapon?: LocalizedText;
}

export interface EnemyEntry extends BaseEntry {
  category: "enemies";
  kind: EnemyKind;
  /** Type d'ennemi : commun, boss, boss secret. */
  role: "common" | "boss" | "secret-boss" | "species";
  /** Emblème (Sans-cœur emblème) ou Pur-sang, etc. */
  variant?: LocalizedText;
}

export interface WorldEntry extends BaseEntry {
  category: "worlds";
  kind: WorldKind;
  /** Œuvre Disney d'origine, le cas échéant. */
  source?: string;
}

export interface KeybladeEntry extends BaseEntry {
  category: "keyblades";
  stats?: { strength?: number; magic?: number };
  ability?: LocalizedText;
  /** Comment l'obtenir, par jeu (slug de jeu → texte). */
  obtained?: Record<string, LocalizedText>;
}

export interface ConceptEntry extends BaseEntry {
  category: "concepts";
}

export type Entry = CharacterEntry | EnemyEntry | WorldEntry | KeybladeEntry | ConceptEntry;

export const CATEGORIES: Category[] = ["characters", "enemies", "worlds", "keyblades", "concepts"];

/** Segment d'URL (français) de chaque catégorie. */
export const CATEGORY_SLUG: Record<Category, string> = {
  characters: "personnages",
  enemies: "ennemis",
  worlds: "mondes",
  keyblades: "keyblades",
  concepts: "concepts",
};

export function categoryFromSlug(slug: string): Category | undefined {
  return (Object.keys(CATEGORY_SLUG) as Category[]).find((c) => CATEGORY_SLUG[c] === slug);
}

export function localized(text: LocalizedText | undefined, locale: Locale): string {
  if (!text) return "";
  return text[locale] ?? text.en ?? text.fr;
}

/** Nom affiché selon la langue : nom localisé s'il existe, sinon l'anglais hors français, sinon le nom d'usage. */
export function displayName(entry: { name: string; names?: Partial<Record<string, string>> }, locale: Locale): string {
  const n = entry.names ?? {};
  if (locale === "fr") return entry.name;
  return n[locale] ?? n.en ?? entry.name;
}
