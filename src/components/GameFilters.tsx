"use client";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/navigation";

export type GameFilter = "all" | "main" | "spin" | "collection";

/**
 * Pastilles de filtre de la liste des jeux. Comme dans l'encyclopédie, le tri se fait
 * sur le serveur : ce composant ne fait qu'écrire ?filtre= dans l'adresse.
 */
export function GameFilters({ current }: { current: GameFilter }) {
  const t = useTranslations("Games");
  const router = useRouter();
  const filters: { id: GameFilter; label: string }[] = [
    { id: "all", label: t("filterAll") },
    { id: "main", label: t("filterMain") },
    { id: "spin", label: t("filterSpin") },
    { id: "collection", label: t("filterCollection") },
  ];
  return (
    <div role="group" aria-label={t("title")} className="mt-8 flex flex-wrap gap-2">
      {filters.map((f) => (
        <button
          key={f.id}
          type="button"
          onClick={() => router.replace(f.id === "all" ? "/jeux" : `/jeux?filtre=${f.id}`, { scroll: false })}
          aria-pressed={current === f.id}
          className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
            current === f.id ? "border-accent bg-accent text-accent-contrast" : "border-line bg-surface text-text hover:border-accent"
          }`}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}
