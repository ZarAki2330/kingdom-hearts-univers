import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { CATEGORY_SLUG, displayName, entries } from "@/data/encyclopedia";

/**
 * Liens automatiques vers l'encyclopédie.
 *
 * Un texte qui parle de Sora, de la Chaîne Royale ou des Sans-cœur devrait pouvoir y mener
 * d'un clic. Le piège est le faux positif : beaucoup de noms du jeu sont des mots courants
 * en français — « Ombre », « Soldat », « Reine », « Jane ». Trois garde-fous :
 *
 * 1. Le nom doit commencer par une majuscule dans les données ET dans le texte. « les ombres
 *    du soir » n'est pas lié ; « les Ombres » l'est, car nos textes réservent la majuscule
 *    aux créatures.
 * 2. Une liste d'exclusion pour les noms trop ambigus même en majuscule.
 * 3. Un seul lien par entrée et par page : au-delà, le texte devient un champ de mines bleu.
 */

/** Noms trop courants pour être liés sans risque, même capitalisés. */
const AMBIGUOUS = new Set([
  "cœur",
  "coeur",
  "cœurs",
  "lumière",
  "ténèbres",
  "porte",
  "clé",
  "roi",
  "reine",
  "maître",
  "jungle",
  "château",
  "monde",
  "mondes",
  "terre",
  "histoire",
  "mémoire",
  "rêve",
  "rêves",
  "espoir",
  "destin",
  "temps",
  "nuit",
  "jour",
  "fin",
  "vide",
  "âme",
  "âmes",
  "guerre",
  "paix",
  "bonne fée",
  "hôtel",
  "fantôme",
]);

/** Longueur minimale d'un nom liable : en dessous, trop de collisions. */
const MIN_LENGTH = 4;

type Target = { slug: string; category: keyof typeof CATEGORY_SLUG; label: string };

/** Index des noms liables pour une langue, du plus long au plus court. */
function buildIndex(locale: Locale): { pattern: RegExp; targets: Map<string, Target> } | null {
  const targets = new Map<string, Target>();
  // Deux passes : les noms principaux d'abord, les alias ensuite. Sans cela, « Xehanort »
  // pouvait tomber sur une fiche où ce n'est qu'un surnom plutôt que sur la bonne.
  const passes: [entry: (typeof entries)[number], name: string][][] = [
    entries.map((e) => [e, displayName(e, locale)] as [(typeof entries)[number], string]),
    entries.flatMap((e) => (e.aliases ?? []).map((a) => [e, a] as [(typeof entries)[number], string])),
  ];
  for (const pass of passes) {
    for (const [entry, name] of pass) {
      if (!name || name.length < MIN_LENGTH) continue;
      // Le nom doit être un nom propre : première lettre en majuscule dans les données.
      if (name[0] !== name[0].toUpperCase()) continue;
      const key = name.toLowerCase();
      // L'article ne sauve pas un nom ambigu : « La Reine » est aussi équivoque que « Reine ».
      const bare = key.replace(/^(l'|l’|le |la |les )/, "");
      if (AMBIGUOUS.has(key) || AMBIGUOUS.has(bare)) continue;
      // Premier arrivé, premier servi : l'ordre des données fait foi en cas d'homonymie.
      if (!targets.has(key)) targets.set(key, { slug: entry.slug, category: entry.category, label: name });
    }
  }
  if (targets.size === 0) return null;

  const escaped = [...targets.keys()]
    .sort((a, b) => b.length - a.length)
    .map((k) => targets.get(k)!.label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  // Le pluriel français s'ajoute au nom ; les bornes évitent de couper un mot en deux.
  const pattern = new RegExp(`(?<![\\p{L}\\p{N}'’-])(${escaped.join("|")})(s?)(?![\\p{L}\\p{N}'’-])`, "gu");
  return { pattern, targets };
}

const INDEX = new Map<Locale, ReturnType<typeof buildIndex>>();

function indexFor(locale: Locale) {
  if (!INDEX.has(locale)) INDEX.set(locale, buildIndex(locale));
  return INDEX.get(locale)!;
}

/**
 * Fabrique un lieur pour une page. L'objet retenu mémorise les entrées déjà liées : chaque
 * fiche n'est liée qu'une fois, à sa première apparition dans la page.
 */
export function createLinker(locale: Locale, options: { exclude?: string[] } = {}) {
  const index = indexFor(locale);
  const used = new Set(options.exclude ?? []);

  return function linkify(text: string, key = ""): ReactNode {
    if (!index) return text;
    const out: ReactNode[] = [];
    let last = 0;
    let i = 0;
    index.pattern.lastIndex = 0;
    for (let m = index.pattern.exec(text); m !== null; m = index.pattern.exec(text)) {
      const target = index.targets.get(m[1]!.toLowerCase());
      if (!target || used.has(target.slug)) continue;
      used.add(target.slug);
      if (m.index > last) out.push(text.slice(last, m.index));
      out.push(
        <Link
          key={`${key}-${i++}`}
          href={`/encyclopedie/${CATEGORY_SLUG[target.category]}/${target.slug}`}
          className="entry-link"
        >
          {m[0]}
        </Link>,
      );
      last = m.index + m[0].length;
    }
    if (last === 0) return text;
    out.push(text.slice(last));
    return out;
  };
}

export type Linker = ReturnType<typeof createLinker>;
