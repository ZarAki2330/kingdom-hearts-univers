"use client";
import { useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/navigation";
import { SIDE, type EntryQuery } from "@/lib/entry-filter";

export type GameOption = { slug: string; label: string };

/**
 * Barre de filtres de l'encyclopédie. Les résultats, eux, sont calculés sur le serveur :
 * ce composant ne fait que réécrire l'adresse (?q=&type=&jeu=&camp=), ce qui garde l'état
 * partageable et la navigation par l'historique. Sans JavaScript, le bouton « Filtrer »
 * envoie le formulaire en GET et donne le même résultat.
 */
export function EntryFilters({
  category,
  kinds,
  games,
  current,
  path,
}: {
  category: string;
  kinds: string[];
  games: GameOption[];
  current: EntryQuery;
  path: string;
}) {
  const t = useTranslations("Encyclopedia");
  const tk = (k: string) => t(k as Parameters<typeof t>[0]);
  const router = useRouter();
  const side = SIDE[category];
  const [draft, setDraft] = useState(current.q);
  const timer = useRef<number | undefined>(undefined);

  /** Écrit les filtres dans l'URL ; toute modification ramène à la première page. */
  function update(next: Partial<Record<"q" | "type" | "jeu" | "camp", string | undefined>>) {
    const sp = new URLSearchParams();
    const merged = {
      q: current.q || undefined,
      type: current.kind !== "all" ? current.kind : undefined,
      jeu: current.game !== "all" ? current.game : undefined,
      camp: current.camp !== "all" ? current.camp : undefined,
      ...next,
    };
    for (const [k, v] of Object.entries(merged)) if (v && v !== "all") sp.set(k, v);
    const qs = sp.toString();
    router.replace(qs ? `${path}?${qs}` : path, { scroll: false });
  }

  const active = Boolean(current.q || current.kind !== "all" || current.game !== "all" || current.camp !== "all");
  const selectCls = "min-h-10 min-w-0 max-w-full rounded-full border border-line bg-surface px-3 py-2 text-sm";

  return (
    <form
      role="search"
      aria-label={t("filters.label")}
      method="get"
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
            defaultValue={draft}
            onChange={(e) => {
              setDraft(e.target.value);
              window.clearTimeout(timer.current);
              const value = e.target.value;
              timer.current = window.setTimeout(() => update({ q: value }), 300);
            }}
            placeholder={t("search")}
            className="w-full rounded-full border border-line bg-surface px-4 py-2.5 text-sm"
          />
        </label>
        <label className="flex min-w-0 max-w-full items-center gap-2 text-sm">
          <span className="font-semibold">{t("filters.game")}</span>
          <select name="jeu" defaultValue={current.game} onChange={(e) => update({ jeu: e.target.value })} className={selectCls}>
            <option value="all">{t("filters.allGames")}</option>
            {games.map((g) => (
              <option key={g.slug} value={g.slug}>
                {g.label}
              </option>
            ))}
          </select>
        </label>
        {side && (
          <label className="flex min-w-0 max-w-full items-center gap-2 text-sm">
            <span className="font-semibold">{t("filters.side")}</span>
            <select name="camp" defaultValue={current.camp} onChange={(e) => update({ camp: e.target.value })} className={selectCls}>
              <option value="all">{t("filterAll")}</option>
              {side.values.map((v) => (
                <option key={v} value={v}>
                  {tk(`${side.ns}.${v}`)}
                </option>
              ))}
            </select>
          </label>
        )}
        {/* Repli sans JavaScript : le formulaire s'envoie en GET vers la même page. */}
        <noscript>
          <button type="submit" className="min-h-10 rounded-full border border-accent bg-accent px-4 text-sm font-semibold text-accent-contrast">
            {t("filters.label")}
          </button>
        </noscript>
      </div>
      {kinds.length > 0 && (
        <fieldset className="flex flex-wrap items-center gap-2">
          <legend className="sr-only">{t("facts.kind")}</legend>
          {["all", ...kinds].map((k) => (
            <button
              key={k}
              type="button"
              onClick={() => update({ type: k })}
              aria-pressed={current.kind === k}
              className={`min-h-10 rounded-full border px-3.5 py-2 text-sm font-semibold transition-colors ${
                current.kind === k ? "border-accent bg-accent text-accent-contrast" : "border-line bg-surface text-text hover:border-accent"
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
                router.replace(path, { scroll: false });
              }}
              className="min-h-10 rounded-full px-3 text-sm font-semibold text-accent underline-offset-2 hover:underline"
            >
              {t("filters.reset")}
            </button>
          )}
        </fieldset>
      )}
    </form>
  );
}
