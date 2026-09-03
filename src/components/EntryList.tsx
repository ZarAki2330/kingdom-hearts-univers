"use client";
import { useMemo, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import type { Entry } from "@/data/encyclopedia";
import { EntryCard } from "./EntryCard";
import { Pagination } from "./Pagination";

type Kinded = Entry & { kind?: string; alignment?: string; role?: string };
export type GameOption = { slug: string; label: string };

export const PAGE_SIZE = 48;

/** Nom du paramètre d'URL du filtre « camp » et clé de traduction, selon la catégorie. */
const SIDE: Record<string, { field: "alignment" | "role"; values: string[]; ns: "alignment" | "roles" } | undefined> = {
  characters: { field: "alignment", values: ["light", "darkness", "twilight", "neutral"], ns: "alignment" },
  enemies: { field: "role", values: ["common", "boss", "secret-boss", "species"], ns: "roles" },
};

function fold(s: string) {
  return s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

/**
 * Liste filtrable et paginée. L'état vit dans l'URL (?q=&type=&jeu=&camp=&page=) :
 * partageable, conservé à la navigation, et la pagination fonctionne sans JavaScript.
 */
export function EntryList({ entries, kinds, games, category }: { entries: Entry[]; kinds: string[]; games: GameOption[]; category: string }) {
  const t = useTranslations("Encyclopedia");
  // Les sous-catégories sont des chaînes dynamiques : on relâche le typage des clés ici.
  const tk = (k: string) => t(k as Parameters<typeof t>[0]);
  const pathname = usePathname();
  const params = useSearchParams();
  const side = SIDE[category];

  const q = params.get("q") ?? "";
  const kind = params.get("type") || "all";
  const game = params.get("jeu") || "all";
  const camp = params.get("camp") || "all";
  const page = Math.max(1, parseInt(params.get("page") ?? "1", 10) || 1);

  // Saisie locale pour la recherche (l'URL est mise à jour après une courte pause).
  const [draft, setDraft] = useState(q);
  const [lastQ, setLastQ] = useState(q);
  const timer = useRef<number | undefined>(undefined);
  if (q !== lastQ) {
    // L'URL a changé (historique, lien) : on réaligne la saisie pendant le rendu.
    setLastQ(q);
    setDraft(q);
  }

  function update(next: Record<string, string | undefined>) {
    const sp = new URLSearchParams(params.toString());
    for (const [k, v] of Object.entries(next)) {
      if (!v || v === "all") sp.delete(k);
      else sp.set(k, v);
    }
    if (!("page" in next)) sp.delete("page");
    const qs = sp.toString();
    window.history.replaceState(null, "", qs ? `?${qs}` : window.location.pathname);
  }

  const filtered = useMemo(() => {
    const needle = fold(q.trim());
    return entries.filter((e) => {
      const x = e as Kinded;
      if (kind !== "all" && x.kind !== kind) return false;
      if (game !== "all" && !e.appearances.includes(game)) return false;
      if (side && camp !== "all" && x[side.field] !== camp) return false;
      if (!needle) return true;
      const hay = fold([e.name, ...(e.aliases ?? []), ...(e.tags ?? []), ...Object.values(e.names ?? {})].join(" "));
      return hay.includes(needle);
    });
  }, [entries, kind, game, camp, q, side]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const current = Math.min(page, totalPages);
  const visible = filtered.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE);
  const query = { q: q || undefined, type: kind !== "all" ? kind : undefined, jeu: game !== "all" ? game : undefined, camp: camp !== "all" ? camp : undefined };
  const active = Boolean(q || kind !== "all" || game !== "all" || camp !== "all");
  const selectCls = "min-h-10 rounded-full border border-line bg-surface px-3 py-2 text-sm";

  return (
    <>
      <form
        role="search"
        aria-label={t("filters.label")}
        onSubmit={(e) => {
          e.preventDefault();
          update({ q: draft });
        }}
        className="mt-8 flex flex-col gap-3"
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <label className="flex-1">
            <span className="sr-only">{t("search")}</span>
            <input
              type="search"
              name="q"
              value={draft}
              onChange={(e) => {
                setDraft(e.target.value);
                window.clearTimeout(timer.current);
                timer.current = window.setTimeout(() => update({ q: e.target.value }), 250);
              }}
              placeholder={t("search")}
              className="w-full rounded-full border border-line bg-surface px-4 py-2.5 text-sm"
            />
          </label>
          <label className="flex items-center gap-2 text-sm">
            <span className="font-semibold">{t("filters.game")}</span>
            <select name="jeu" value={game} onChange={(e) => update({ jeu: e.target.value })} className={selectCls}>
              <option value="all">{t("filters.allGames")}</option>
              {games.map((g) => (
                <option key={g.slug} value={g.slug}>
                  {g.label}
                </option>
              ))}
            </select>
          </label>
          {side && (
            <label className="flex items-center gap-2 text-sm">
              <span className="font-semibold">{t("filters.side")}</span>
              <select name="camp" value={camp} onChange={(e) => update({ camp: e.target.value })} className={selectCls}>
                <option value="all">{t("filterAll")}</option>
                {side.values.map((v) => (
                  <option key={v} value={v}>
                    {tk(`${side.ns}.${v}`)}
                  </option>
                ))}
              </select>
            </label>
          )}
        </div>
        {kinds.length > 0 && (
          <fieldset className="flex flex-wrap items-center gap-2">
            <legend className="sr-only">{t("facts.kind")}</legend>
            {["all", ...kinds].map((k) => (
              <button
                key={k}
                type="button"
                onClick={() => update({ type: k })}
                aria-pressed={kind === k}
                className={`min-h-10 rounded-full border px-3.5 py-2 text-sm font-semibold transition-colors ${
                  kind === k ? "border-accent bg-accent text-accent-contrast" : "border-line bg-surface text-text hover:border-accent"
                }`}
              >
                {k === "all" ? t("filterAll") : tk(`kinds.${k}`)}
              </button>
            ))}
            {active && (
              <button
                type="button"
                onClick={() => {
                  setDraft("");
                  update({ q: undefined, type: undefined, jeu: undefined, camp: undefined });
                }}
                className="min-h-10 rounded-full px-3 text-sm font-semibold text-accent underline-offset-2 hover:underline"
              >
                {t("filters.reset")}
              </button>
            )}
          </fieldset>
        )}
      </form>
      <p className="mt-3 text-sm text-text-2" role="status" aria-live="polite">
        {t("entries", { count: filtered.length })}
        {totalPages > 1 && ` · ${t("pagination.status", { page: current, total: totalPages })}`}
      </p>
      {visible.length === 0 ? (
        <p className="mt-6 rounded-xl border border-dashed border-line p-6 text-center text-text-2">{t("noResult")}</p>
      ) : (
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((e) => (
            <EntryCard key={e.slug} entry={e} kindLabel={(e as Kinded).kind ? tk(`kinds.${(e as Kinded).kind}`) : ""} />
          ))}
        </ul>
      )}
      <Pagination page={current} total={totalPages} pathname={pathname} query={query} />
    </>
  );
}
