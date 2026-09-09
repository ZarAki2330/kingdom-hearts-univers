import type { Entry } from "@/data/encyclopedia";

export const PAGE_SIZE = 48;

/** Filtre « camp » selon la catégorie : alignement pour les personnages, rôle pour les ennemis. */
export const SIDE: Record<string, { field: "alignment" | "role"; values: string[]; ns: "alignment" | "roles" } | undefined> = {
  characters: { field: "alignment", values: ["light", "darkness", "twilight", "neutral"], ns: "alignment" },
  enemies: { field: "role", values: ["common", "boss", "secret-boss", "species"], ns: "roles" },
};

/** Sous-catégories proposées en pastilles, par catégorie. */
export const KINDS: Record<string, string[]> = {
  characters: ["original", "disney", "final-fantasy"],
  enemies: ["heartless", "nobody", "unversed", "dream-eater"],
  worlds: ["original", "disney", "final-fantasy"],
};

/** Minuscules sans accents : « Sephiroth » et « séphiroth » se valent dans la recherche. */
export function fold(s: string): string {
  return s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
}

export type EntryQuery = { q: string; kind: string; game: string; camp: string; page: number };

/** Lit les filtres depuis les paramètres d'URL, en valeurs sûres. */
export function readQuery(sp: Record<string, string | string[] | undefined>): EntryQuery {
  const one = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v) ?? "";
  return {
    q: one(sp.q).slice(0, 100),
    kind: one(sp.type) || "all",
    game: one(sp.jeu) || "all",
    camp: one(sp.camp) || "all",
    page: Math.max(1, parseInt(one(sp.page) || "1", 10) || 1),
  };
}

/**
 * Applique les filtres à la liste d'entrées. Le calcul se fait sur le serveur : les cartes
 * partent dans le HTML, donc visibles des moteurs de recherche et sans décalage à l'affichage.
 */
export function filterEntries(entries: Entry[], category: string, { q, kind, game, camp }: EntryQuery): Entry[] {
  const side = SIDE[category];
  const needle = fold(q.trim());
  return entries.filter((e) => {
    const x = e as Entry & { kind?: string; alignment?: string; role?: string };
    if (kind !== "all" && x.kind !== kind) return false;
    if (game !== "all" && !e.appearances.includes(game)) return false;
    if (side && camp !== "all" && x[side.field] !== camp) return false;
    if (!needle) return true;
    const hay = fold([e.name, ...(e.aliases ?? []), ...(e.tags ?? []), ...Object.values(e.names ?? {})].join(" "));
    return hay.includes(needle);
  });
}
