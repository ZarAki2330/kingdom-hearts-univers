"use client";
import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import type { Entry } from "@/data/encyclopedia";
import { EntryCard } from "./EntryCard";

type Kinded = Entry & { kind?: string };

export function EntryList({ entries, kinds }: { entries: Entry[]; kinds: string[] }) {
  const t = useTranslations("Encyclopedia");
  // Les sous-catégories sont des chaînes dynamiques : on relâche le typage des clés ici.
  const tk = (k: string) => t(k as Parameters<typeof t>[0]);
  const [kind, setKind] = useState("all");
  const [q, setQ] = useState("");

  const visible = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return entries.filter((e) => {
      const k = (e as Kinded).kind;
      if (kind !== "all" && k !== kind) return false;
      if (!needle) return true;
      const hay = [e.name, ...(e.aliases ?? []), ...(e.tags ?? []), ...Object.values(e.names ?? {})].join(" ").toLowerCase();
      return hay.includes(needle);
    });
  }, [entries, kind, q]);

  return (
    <>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <label className="flex-1">
          <span className="sr-only">{t("search")}</span>
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={t("search")}
            className="w-full rounded-full border border-line bg-surface px-4 py-2.5 text-sm"
          />
        </label>
        <div role="group" aria-label={t("facts.kind")} className="flex flex-wrap gap-2">
          {["all", ...kinds].map((k) => (
            <button
              key={k}
              type="button"
              onClick={() => setKind(k)}
              aria-pressed={kind === k}
              className={`rounded-full border px-3.5 py-2 text-sm font-semibold transition-colors ${
                kind === k ? "border-accent bg-accent text-accent-contrast" : "border-line bg-surface text-text hover:border-accent"
              }`}
            >
              {k === "all" ? t("filterAll") : tk(`kinds.${k}`)}
            </button>
          ))}
        </div>
      </div>
      <p className="mt-3 text-sm text-text-2" aria-live="polite">
        {t("entries", { count: visible.length })}
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
    </>
  );
}
