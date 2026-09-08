import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { getGame, localized } from "@/data/games";
import { getStory, stories } from "@/data/story";
import { CATEGORY_SLUG, displayName, getEntry, localized as localizedEntry } from "@/data/encyclopedia";
import { GameCover } from "@/components/GameCover";
import { EntryPortrait } from "@/components/EntryPortrait";
import { roman } from "@/lib/format";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => stories.map((s) => ({ locale, slug: s.game })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const locale = rawLocale as Locale;
  const game = getGame(slug);
  const story = getStory(slug);
  if (!game || !story) return {};
  const t = await getTranslations({ locale, namespace: "Story" });
  return { title: t("gameTitle", { game: game.title }), description: localized(story.intro, locale).split(/\n\n+/)[0] };
}

/** Paragraphes d'un texte : séparés par une ligne vide dans les données. */
function paragraphs(text: string) {
  return text.split(/\n\n+/);
}

export default async function GameStoryPage({ params }: Props) {
  const { locale: rawLocale, slug } = await params;
  const locale = rawLocale as Locale;
  setRequestLocale(locale);
  const game = getGame(slug);
  const story = getStory(slug);
  if (!game || !story) notFound();
  const t = await getTranslations("Story");
  const te = await getTranslations("Encyclopedia");

  const keyEntries = (story.keyEntries ?? []).map(getEntry).filter((e) => e !== undefined);
  const nextGames = (story.next ?? []).map(getGame).filter((g) => g !== undefined);

  return (
    <article className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <nav aria-label={t("breadcrumb")} className="text-sm">
        <Link href="/histoire" className="font-semibold text-accent hover:underline">
          ← {t("back")}
        </Link>
      </nav>

      <header className="mt-6 grid gap-8 md:grid-cols-[280px_1fr] md:items-start">
        <GameCover game={game} className="aspect-[16/10] w-full max-w-[280px]" sizes="280px" priority />
        <div>
          <p className="eyebrow">{t("eyebrow")}</p>
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl lg:text-5xl">{game.title}</h1>
          {paragraphs(localized(story.intro, locale)).map((p, i) => (
            <p key={i} className="prose-max mt-4 text-lg leading-relaxed">
              {p}
            </p>
          ))}
          <p className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm">
            <Link href={`/jeux/${game.slug}`} className="font-semibold text-accent hover:underline">
              {t("gameSheet")} →
            </Link>
          </p>
        </div>
      </header>

      <p role="note" className="mt-10 rounded-xl border border-accent/50 bg-surface-2 px-4 py-3 text-sm font-semibold">
        {t("spoilers")}
      </p>

      <nav aria-labelledby="sommaire" className="card mt-8 p-5">
        <h2 id="sommaire" className="eyebrow">
          {t("contents")}
        </h2>
        {/* Colonnes CSS (et non une grille) : le sommaire se lit de haut en bas, colonne par colonne. */}
        <ol className="mt-3 sm:columns-2 sm:gap-8">
          {story.chapters.map((c, i) => (
            <li key={c.id} className="mb-1.5 break-inside-avoid text-sm">
              <a href={`#${c.id}`} className="font-semibold hover:text-accent hover:underline">
                <span className="mr-1.5 inline-block min-w-8 font-display font-bold text-accent">{roman(i + 1)}.</span>
                {localized(c.title, locale)}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="mt-12 space-y-12">
        {story.chapters.map((c, i) => (
          <section key={c.id} id={c.id} aria-labelledby={`h-${c.id}`} className="scroll-mt-24">
            <h2 id={`h-${c.id}`} className="text-2xl font-bold">
              <span className="mr-2.5 font-display text-accent">{roman(i + 1)}.</span>
              {localized(c.title, locale)}
            </h2>
            {paragraphs(localized(c.text, locale)).map((p, j) => (
              <p key={j} className="prose-max mt-4 leading-relaxed">
                {p}
              </p>
            ))}
          </section>
        ))}
      </div>

      <section aria-labelledby="outcome" className="card mt-14 p-6">
        <h2 id="outcome" className="text-2xl font-bold">
          {t("outcome")}
        </h2>
        {paragraphs(localized(story.outcome, locale)).map((p, i) => (
          <p key={i} className="prose-max mt-4 leading-relaxed">
            {p}
          </p>
        ))}
        {nextGames.length > 0 && (
          <p className="mt-5 flex flex-wrap items-center gap-2 text-sm">
            <span className="font-semibold text-text-2">{t("readNext")}</span>
            {nextGames.map((g) => (
              <Link
                key={g.slug}
                href={`/histoire/${g.slug}`}
                className="rounded-md border border-line bg-surface px-2.5 py-1 font-semibold transition-colors hover:border-accent hover:text-accent"
              >
                {g.title}
              </Link>
            ))}
          </p>
        )}
      </section>

      {keyEntries.length > 0 && (
        <section aria-labelledby="key-entries" className="mt-14">
          <h2 id="key-entries" className="text-2xl font-bold">
            {t("keyEntries")}
          </h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {keyEntries.map((e) => (
              <li key={e.slug}>
                <Link
                  href={`/encyclopedie/${CATEGORY_SLUG[e.category]}/${e.slug}`}
                  className="card card-link flex items-center gap-3 p-2.5"
                >
                  <EntryPortrait entry={e} className="h-12 w-12 shrink-0" sizes="48px" />
                  <span className="min-w-0">
                    <span className="block text-sm font-bold leading-tight">{displayName(e, locale)}</span>
                    <span className="line-clamp-1 text-xs text-text-2">{localizedEntry(e.tagline, locale)}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-text-2">
            <Link href="/encyclopedie" className="font-semibold text-accent hover:underline">
              {te("title")} →
            </Link>
          </p>
        </section>
      )}
    </article>
  );
}
