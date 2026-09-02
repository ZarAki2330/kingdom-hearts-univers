"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import type { Game, GameKind } from "@/data/games";
import { GameCard } from "./GameCard";

type Filter = "all" | "main" | "spin" | "collection";

function matches(g: Game, f: Filter) {
  if (f === "all") return true;
  if (f === "main") return g.kind === "main" || g.kind === "remake";
  return (g.kind as GameKind) === f;
}

export function GamesList({ games }: { games: Game[] }) {
  const t = useTranslations("Games");
  const [filter, setFilter] = useState<Filter>("all");
  const filters: { id: Filter; label: string }[] = [
    { id: "all", label: t("filterAll") },
    { id: "main", label: t("filterMain") },
    { id: "spin", label: t("filterSpin") },
    { id: "collection", label: t("filterCollection") },
  ];
  const visible = games.filter((g) => matches(g, filter));

  return (
    <>
      <div role="group" aria-label={t("title")} className="mt-8 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setFilter(f.id)}
            aria-pressed={filter === f.id}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
              filter === f.id
                ? "border-accent bg-accent text-accent-contrast"
                : "border-line bg-surface text-text hover:border-accent"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        {visible.length} / {games.length}
      </p>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((g) => (
          <GameCard key={g.slug} game={g} />
        ))}
      </ul>
    </>
  );
}
