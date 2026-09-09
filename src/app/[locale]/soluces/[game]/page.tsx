import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { getGame, localized } from "@/data/games";
import { getWalkthrough, progress, tileAccent, tileImage, walkthroughs } from "@/data/walkthrough";
import { GameCover } from "@/components/GameCover";
import { paragraphs } from "@/components/WalkthroughBits";
import { WalkTile, WalkTileGrid } from "@/components/WalkTile";
import { languageAlternates, localeUrl } from "@/lib/site";

type Props = { params: Promise<{ locale: string; game: string }> };

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => walkthroughs.map((w) => ({ locale, game: w.game })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: rawLocale, game: slug } = await params;
  const locale = rawLocale as Locale;
  const game = getGame(slug);
  const w = getWalkthrough(slug);
  if (!game || !w) return {};
  const t = await getTranslations({ locale, namespace: "Walkthrough" });
  const title = t("gameTitle", { game: game.title });
  const description = paragraphs(localized(w.intro, locale))[0];
  const path = `/soluces/${slug}`;
  return {
    title,
    description,
    alternates: { canonical: localeUrl(locale, path), languages: languageAlternates(path) },
    openGraph: {
      type: "article",
      title,
      description,
      url: localeUrl(locale, path),
      images:
        game.cover && game.cover.width >= 600
          ? [{ url: game.cover.src, width: game.cover.width, height: game.cover.height, alt: game.title }]
          : [{ url: "/og.png", width: 1200, height: 630, alt: game.title }],
    },
  };
}

export default async function WalkthroughGamePage({ params }: Props) {
  const { locale: rawLocale, game: slug } = await params;
  const locale = rawLocale as Locale;
  setRequestLocale(locale);
  const game = getGame(slug);
  const w = getWalkthrough(slug);
  if (!game || !w) notFound();
  const t = await getTranslations("Walkthrough");
  const p = progress(w);

  return (
    <article className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <nav aria-label={t("breadcrumb")} className="text-sm">
        <Link href="/soluces" className="font-semibold text-accent hover:underline">
          ← {t("back")}
        </Link>
      </nav>

      <header className="mt-6 grid gap-8 md:grid-cols-[280px_1fr] md:items-start">
        <GameCover game={game} className="aspect-[16/10] w-full max-w-[280px]" sizes="280px" priority />
        <div>
          <p className="eyebrow">{t("guide")}</p>
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl lg:text-5xl">{game.title}</h1>
          <p className="mt-2 text-sm text-text-2">{localized(w.version, locale)}</p>
          {paragraphs(localized(w.intro, locale)).map((par, i) => (
            <p key={i} className="prose-max mt-4 leading-relaxed">
              {par}
            </p>
          ))}
          <p className="mt-4 text-sm text-text-2">{t("progress", { done: p.done, total: p.total })}</p>
        </div>
      </header>

      <section aria-labelledby="sommaire" className="mt-14">
        <h2 id="sommaire" className="text-2xl font-bold">
          {t("contents")}
        </h2>
        <p className="prose-max mt-3 text-text-2">{t("contentsLead")}</p>
        <WalkTileGrid>
          {w.sections.map((s, i) => (
            <WalkTile
              key={s.id}
              index={i + 1}
              href={`/soluces/${slug}/${s.id}`}
              title={localized(s.title, locale)}
              subtitle={s.subtitle ? localized(s.subtitle, locale) : undefined}
              image={tileImage(s)}
              accent={tileAccent(s)}
              soon={s.status !== "done"}
              soonLabel={t("soon")}
            />
          ))}
        </WalkTileGrid>
      </section>

      <section aria-labelledby="annexes" className="mt-14">
        <h2 id="annexes" className="text-2xl font-bold">
          {t("quests")}
        </h2>
        <p className="prose-max mt-3 text-text-2">{t("questsLead")}</p>
        <WalkTileGrid>
          {w.quests.map((q) => (
            <WalkTile
              key={q.id}
              href={`/soluces/${slug}/annexes/${q.id}`}
              title={localized(q.title, locale)}
              subtitle={localized(q.tagline, locale)}
              image={tileImage(q)}
              accent={tileAccent(q)}
              soon={q.status !== "done"}
              soonLabel={t("soon")}
            />
          ))}
        </WalkTileGrid>
      </section>

      <section aria-labelledby="completion" className="mt-14">
        <h2 id="completion" className="text-2xl font-bold">
          {t("completion")}
        </h2>
        <p className="prose-max mt-3 text-text-2">{t("completionLead")}</p>
        <dl className="mt-4 grid gap-3 sm:grid-cols-2">
          {w.completion.map((g) => (
            <div key={g.id} className="card p-5">
              <dt className="font-bold">{localized(g.title, locale)}</dt>
              <dd className="prose-max mt-1.5 leading-relaxed text-text-2">{localized(g.text, locale)}</dd>
            </div>
          ))}
        </dl>
      </section>
    </article>
  );
}
