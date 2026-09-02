"use client";
import { useId, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { releaseYear, type Game } from "@/data/games";
import { GameCover } from "./GameCover";

type Mode = "release" | "story";

function Entry({ game }: { game: Game }) {
  const t = useTranslations("Games");
  const year = releaseYear(game);
  return (
    <Link href={`/jeux/${game.slug}`} className="card card-link flex items-center gap-3 p-2.5">
      <GameCover game={game} className="h-14 w-10 shrink-0 rounded-md" />
      <span className="min-w-0">
        <span className="block font-bold leading-tight">{game.title}</span>
        <span className="tabular block text-xs text-text-2">
          {game.status === "upcoming" ? t("tba") : year} · {game.platforms[0]}
          {game.platforms.length > 1 ? ` +${game.platforms.length - 1}` : ""}
        </span>
      </span>
    </Link>
  );
}

export function Timeline({ release, story }: { release: Game[]; story: { order: number; games: Game[] }[] }) {
  const t = useTranslations("Timeline");
  const [mode, setMode] = useState<Mode>("release");
  const id = useId();

  const releaseByYear = release.reduce<Map<number, Game[]>>((m, g) => {
    const y = releaseYear(g);
    if (y == null) return m;
    m.set(y, [...(m.get(y) ?? []), g]);
    return m;
  }, new Map());

  return (
    <section className="mt-8">
      <div role="tablist" aria-label={t("title")} className="inline-flex rounded-full border border-line bg-surface p-1">
        {(["release", "story"] as Mode[]).map((m) => (
          <button
            key={m}
            role="tab"
            id={`${id}-tab-${m}`}
            aria-selected={mode === m}
            aria-controls={`${id}-panel-${m}`}
            tabIndex={mode === m ? 0 : -1}
            onClick={() => setMode(m)}
            onKeyDown={(e) => {
              if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
                const next = m === "release" ? "story" : "release";
                setMode(next);
                document.getElementById(`${id}-tab-${next}`)?.focus();
              }
            }}
            className={`rounded-full px-4 py-2 text-sm font-semibold ${
              mode === m ? "bg-accent text-accent-contrast" : "text-text hover:bg-surface-2"
            }`}
          >
            {m === "release" ? t("byRelease") : t("byStory")}
          </button>
        ))}
      </div>
      <p className="mt-3 text-sm text-text-2">{mode === "release" ? t("releaseHelp") : t("storyHelp")}</p>

      <div
        role="tabpanel"
        id={`${id}-panel-release`}
        aria-labelledby={`${id}-tab-release`}
        hidden={mode !== "release"}
        className="timeline mt-8"
      >
        <ol className="space-y-8">
          {[...releaseByYear.entries()].map(([year, gs]) => (
            <li key={String(year)} className="relative">
              <span className="timeline-dot" aria-hidden="true" />
              <h2 className="tabular font-display text-2xl font-bold text-accent">
                {year}
              </h2>
              <ul className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {gs.map((g) => (
                  <li key={g.slug}>
                    <Entry game={g} />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>

      <div
        role="tabpanel"
        id={`${id}-panel-story`}
        aria-labelledby={`${id}-tab-story`}
        hidden={mode !== "story"}
        className="timeline mt-8"
      >
        <ol className="space-y-8">
          {story.map((step, i) => (
            <li key={step.order} className="relative">
              <span className="timeline-dot" aria-hidden="true" />
              <h2 className="tabular font-display text-2xl font-bold text-accent">
                {i + 1}
                <span className="ml-2 text-base font-semibold text-text-2">/ {story.length}</span>
              </h2>
              {step.games.length > 1 ? (
                <div className="parallel-group mt-3 pl-4">
                  <p className="eyebrow mb-2">{t("parallel")}</p>
                  <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {step.games.map((g) => (
                      <li key={g.slug}>
                        <Entry game={g} />
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <ul className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  <li>
                    <Entry game={step.games[0]} />
                  </li>
                </ul>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
