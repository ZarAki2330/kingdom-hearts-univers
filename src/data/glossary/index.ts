import { terms } from "./terms";
import type { GlossaryCategory, GlossaryTerm } from "./types";

export * from "./types";
export { terms };

export const GLOSSARY_CATEGORIES: GlossaryCategory[] = [
  "heart",
  "creature",
  "weapon",
  "place",
  "group",
  "gameplay",
  "other",
];

const byId = new Map(terms.map((t) => [t.id, t]));

export function getTerm(id: string): GlossaryTerm | undefined {
  return byId.get(id);
}

/** Première lettre du terme, sans accent, pour l'index alphabétique. */
export function initial(term: GlossaryTerm, locale: "fr" | string): string {
  const label = (locale === "fr" ? term.term.fr : term.term.en) ?? term.term.fr;
  const letter = label
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/^[^A-Za-zα-ω]+/, "")
    .charAt(0)
    .toUpperCase();
  return letter || "#";
}
