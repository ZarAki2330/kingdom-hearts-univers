import type { Locale } from "@/i18n/routing";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { byRelease, type Game, type GameKind } from "@/data/games";
import { GameCard } from "@/components/GameCard";
import { GameFilters, type GameFilter } from "@/components/GameFilters";
import { languageAlternates, localeUrl } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  const t = await getTranslations({ locale, namespace: "Games" });
  return {
    title: t("title"),
    description: t("lead"),
    alternates: { canonical: localeUrl(locale, "/jeux"), languages: languageAlternates("/jeux") },
    openGraph: { title: t("title"), description: t("lead"), url: localeUrl(locale, "/jeux") },
  };
}

/** Le filtre « principaux » regroupe les épisodes canoniques et leurs remakes. */
function matches(g: Game, f: GameFilter) {
  if (f === "all") return true;
  if (f === "main") return g.kind === "main" || g.kind === "remake";
  return (g.kind as GameKind) === f;
}

export default async function GamesPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  setRequestLocale(locale);
  const t = await getTranslations("Games");
  const games = byRelease();
  // Le filtre est lu dans l'URL et appliqué ici : les cartes partent dans le HTML,
  // sans code de liste à charger dans le navigateur.
  const raw = (await searchParams).filtre;
  const filter = (["main", "spin", "collection"].includes(String(raw)) ? String(raw) : "all") as GameFilter;
  const visible = games.filter((g) => matches(g, filter));

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <p className="eyebrow">Kingdom Hearts</p>
      <h1 className="mt-2 text-4xl font-bold sm:text-5xl">{t("title")}</h1>
      <p className="prose-max mt-4 text-lg text-text-2">{t("lead")}</p>
      <GameFilters current={filter} />
      <section aria-labelledby="jeux-resultats">
        <h2 id="jeux-resultats" className="sr-only">
          {t("results")}
        </h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((g, i) => (
            <GameCard key={g.slug} game={g} priority={i < 3} />
          ))}
        </ul>
      </section>
    </div>
  );
}
