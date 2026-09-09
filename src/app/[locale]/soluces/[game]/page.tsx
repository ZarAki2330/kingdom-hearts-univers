import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { getGame, localized } from "@/data/games";
import { getWalkthrough, progress, walkthroughs } from "@/data/walkthrough";
import { GameCover } from "@/components/GameCover";
import { paragraphs } from "@/components/WalkthroughBits";
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

      <section aria-labelledby="avant" className="mt-14">
        <h2 id="avant" className="text-2xl font-bold">
          {t("before")}
        </h2>
        <div className="mt-4 space-y-5">
          {w.before.map((s) => (
            <section key={s.id} aria-labelledby={`avant-${s.id}`} className="card p-5 sm:p-6">
              <h3 id={`avant-${s.id}`} className="text-lg font-bold">
                {localized(s.title, locale)}
              </h3>
              {paragraphs(localized(s.text, locale)).map((par, i) => (
                <p key={i} className="prose-max mt-3 leading-relaxed text-text-2">
                  {par}
                </p>
              ))}
            </section>
          ))}
        </div>
      </section>

      <section aria-labelledby="sommaire" className="mt-14">
        <h2 id="sommaire" className="text-2xl font-bold">
          {t("contents")}
        </h2>
        <p className="prose-max mt-3 text-text-2">{t("contentsLead")}</p>
        <ol className="mt-4 space-y-2">
          {w.sections.map((s, i) => {
            const label = (
              <>
                <span className="tabular w-7 shrink-0 text-sm text-text-2">{i + 1}.</span>
                <span className="min-w-0">
                  <span className="font-semibold">{localized(s.title, locale)}</span>
                  {s.subtitle && <span className="text-text-2"> — {localized(s.subtitle, locale)}</span>}
                </span>
              </>
            );
            return (
              <li key={s.id}>
                {s.status === "done" ? (
                  <Link href={`/soluces/${slug}/${s.id}`} className="card card-link flex items-baseline gap-2 p-3">
                    {label}
                  </Link>
                ) : (
                  <div className="card flex items-baseline gap-2 border-dashed p-3 text-text-2">
                    {label}
                    <span className="ml-auto shrink-0 rounded-full border border-line px-2 py-0.5 text-[11px] uppercase tracking-wider">
                      {t("soon")}
                    </span>
                  </div>
                )}
              </li>
            );
          })}
        </ol>
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
