import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { byStory, games, getGame, localized } from "@/data/games";
import { GameCover } from "@/components/GameCover";
import { formatDate } from "@/lib/format";
import { CATEGORY_SLUG, displayName, entriesInGame, localized as localizedEntry } from "@/data/encyclopedia";
import { EntryPortrait } from "@/components/EntryPortrait";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => games.map((g) => ({ locale, slug: g.slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const locale = rawLocale as Locale;
  const game = getGame(slug);
  if (!game) return {};
  return { title: game.title, description: localized(game.synopsis, locale as Locale) };
}

export default async function GamePage({ params }: Props) {
  const { locale: rawLocale, slug } = await params;
  const locale = rawLocale as Locale;
  setRequestLocale(locale);
  const game = getGame(slug);
  if (!game) notFound();
  const t = await getTranslations("Games");
  const te = await getTranslations("Encyclopedia");
  const loc = locale as Locale;
  const cast = entriesInGame(game.slug);

  const dates: [string, string | undefined][] = [
    [t("japan"), formatDate(game.release.jp, locale)],
    [t("america"), formatDate(game.release.na, locale)],
    [t("europe"), formatDate(game.release.eu, locale)],
  ];
  const story = byStory();
  const chronoIndex = story.findIndex((s) => s.order === game.chronoOrder);
  const included = game.includes?.map(getGame).filter(Boolean) ?? [];
  const original = game.remakeOf ? getGame(game.remakeOf) : undefined;

  return (
    <article className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <nav aria-label="Fil d'Ariane" className="text-sm">
        <Link href="/jeux" className="font-semibold text-accent hover:underline">
          ← {t("back")}
        </Link>
      </nav>

      <header className="mt-6 grid gap-8 md:grid-cols-[220px_1fr] md:items-start">
        <div className="max-w-[220px]">
          <GameCover game={game} className="aspect-[3/4] w-full" priority />
          {game.cover && <p className="mt-2 text-xs text-text-2">{game.cover.credit}</p>}
        </div>
        <div>
          <p className="eyebrow">{t(`kind.${game.kind}`)}</p>
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl lg:text-5xl">{game.title}</h1>
          {game.status !== "released" && (
            <p className="mt-3 inline-block rounded-full border border-accent px-3 py-1 text-sm font-bold text-accent">
              {game.status === "upcoming" ? t("tba") : t("cancelled")}
            </p>
          )}
          <dl className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
            <div>
              <dt className="eyebrow">{t("release")}</dt>
              <dd className="mt-1">
                <ul className="tabular text-sm">
                  {dates.filter(([, v]) => v).map(([k, v]) => (
                    <li key={k}>
                      <span className="text-text-2">{k} : </span>
                      <span className="font-semibold">{v}</span>
                    </li>
                  ))}
                  {dates.every(([, v]) => !v) && <li className="text-text-2">—</li>}
                </ul>
              </dd>
            </div>
            <div>
              <dt className="eyebrow">{t("platforms")}</dt>
              <dd className="mt-1 flex flex-wrap gap-1.5">
                {game.platforms.map((p) => (
                  <span key={p} className="rounded-md border border-line bg-surface px-2 py-0.5 text-sm">
                    {p}
                  </span>
                ))}
              </dd>
            </div>
            <div>
              <dt className="eyebrow">{t("developer")}</dt>
              <dd className="mt-1 text-sm font-semibold">{game.developer}</dd>
            </div>
            {game.mainStoryHours && (
              <div>
                <dt className="eyebrow">{t("duration")}</dt>
                <dd className="tabular mt-1 text-sm font-semibold">{t("hours", { hours: `≈ ${game.mainStoryHours}` })}</dd>
              </div>
            )}
          </dl>
        </div>
      </header>

      <section aria-labelledby="synopsis" className="mt-12 grid gap-10 md:grid-cols-[1fr_320px]">
        <div>
          <h2 id="synopsis" className="text-2xl font-bold">{t("synopsis")}</h2>
          <p className="prose-max mt-3 text-lg leading-relaxed">{localized(game.synopsis, loc)}</p>
          {original && (
            <p className="mt-4 text-sm text-text-2">
              {t("kind.remake")} :{" "}
              <Link href={`/jeux/${original.slug}`} className="font-semibold text-accent hover:underline">
                {original.title}
              </Link>
            </p>
          )}
        </div>
        <aside className="flex flex-col gap-6">
          {chronoIndex >= 0 && (
            <div className="card p-5">
              <h2 className="eyebrow">{t("chronoPosition")}</h2>
              <p className="tabular mt-2 font-display text-3xl font-bold text-accent">
                {chronoIndex + 1} <span className="text-base text-text-2">/ {story.length}</span>
              </p>
              <p className="mt-1 text-sm text-text-2">{t("chronoNote")}</p>
              <Link href="/chronologie" className="mt-3 inline-block text-sm font-semibold text-accent hover:underline">
                {t("chronoPosition")} →
              </Link>
            </div>
          )}
          {included.length > 0 && (
            <div className="card p-5">
              <h2 className="eyebrow">{t("includes")}</h2>
              <ul className="mt-2 space-y-1.5">
                {included.map((g) => (
                  <li key={g!.slug}>
                    <Link href={`/jeux/${g!.slug}`} className="font-semibold hover:text-accent">
                      {g!.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </section>

      {(["worlds", "characters", "enemies", "keyblades", "concepts"] as const).map((cat) => {
        const list = cast.filter((e) => e.category === cat);
        if (list.length === 0) return null;
        return (
        <section key={cat} aria-labelledby={`cast-${cat}`} className="mt-12">
          <h2 id={`cast-${cat}`} className="text-2xl font-bold">{te(`categories.${cat}.title`)} <span className="text-base font-semibold text-text-2">· {te("inGameSuffix")}</span></h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {list.map((e) => (
              <li key={e.slug}>
                <Link href={`/encyclopedie/${CATEGORY_SLUG[e.category]}/${e.slug}`} className="card card-link flex items-center gap-3 p-2.5">
                  <EntryPortrait entry={e} className="h-12 w-12 shrink-0" sizes="48px" />
                  <span className="min-w-0">
                    <span className="block text-sm font-bold leading-tight">{displayName(e, loc)}</span>
                    <span className="line-clamp-1 text-xs text-text-2">{localizedEntry(e.tagline, loc)}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
        );
      })}
    </article>
  );
}
