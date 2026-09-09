import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { games, getGame, localized } from "@/data/games";
import { getWalkthrough, progress, walkthroughs } from "@/data/walkthrough";
import { GameCover } from "@/components/GameCover";
import { languageAlternates, localeUrl } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  const t = await getTranslations({ locale, namespace: "Walkthrough" });
  return {
    title: t("title"),
    description: t("lead"),
    alternates: { canonical: localeUrl(locale, "/soluces"), languages: languageAlternates("/soluces") },
    openGraph: { title: t("title"), description: t("lead"), url: localeUrl(locale, "/soluces") },
  };
}

export default async function WalkthroughIndexPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  setRequestLocale(locale);
  const t = await getTranslations("Walkthrough");

  const available = walkthroughs
    .map((w) => ({ w, game: getGame(w.game) }))
    .filter((x): x is { w: (typeof walkthroughs)[number]; game: NonNullable<ReturnType<typeof getGame>> } => x.game !== undefined);
  // Les jeux principaux sans soluce sont annoncés : le sommaire du site doit dire ce qui viendra.
  const planned = games.filter((g) => g.kind === "main" && g.status === "released" && !getWalkthrough(g.slug));

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <p className="eyebrow">Kingdom Hearts</p>
      <h1 className="mt-2 text-4xl font-bold sm:text-5xl">{t("title")}</h1>
      <p className="prose-max mt-4 text-lg text-text-2">{t("lead")}</p>

      <section aria-labelledby="disponibles" className="mt-10">
        <h2 id="disponibles" className="sr-only">
          {t("available")}
        </h2>
        <ul className="space-y-4">
          {available.map(({ w, game }) => {
            const p = progress(w);
            return (
              <li key={w.game}>
                <Link href={`/soluces/${w.game}`} className="card card-link flex items-center gap-4 p-4">
                  <GameCover game={game} className="h-20 w-32 shrink-0 rounded-lg" sizes="128px" />
                  <div className="min-w-0">
                    <span className="eyebrow">{t("guide")}</span>
                    <h3 className="text-lg font-bold leading-tight">{game.title}</h3>
                    <p className="mt-1 text-sm text-text-2">{localized(w.version, locale)}</p>
                    <p className="mt-1 text-sm text-text-2">{t("progress", { done: p.done, total: p.total })}</p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      {planned.length > 0 && (
        <section aria-labelledby="a-venir" className="mt-12">
          <h2 id="a-venir" className="text-2xl font-bold">
            {t("planned")}
          </h2>
          <p className="prose-max mt-3 text-text-2">{t("plannedLead")}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {planned.map((g) => (
              <li key={g.slug} className="rounded-full border border-line px-3 py-1.5 text-sm text-text-2">
                {g.title}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
