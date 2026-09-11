import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { getGame, localized } from "@/data/games";
import { getWalkthrough, progress, tileAccent, tileImage, walkthroughs } from "@/data/walkthrough";
import { GameCover } from "@/components/GameCover";
import { Disclosure, RichText, paragraphs } from "@/components/WalkthroughBits";
import { WalkTile, WalkTileGrid } from "@/components/WalkTile";
import { languageAlternates, localeUrl } from "@/lib/site";
import { createLinker } from "@/lib/autolink";

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
  const link = createLinker(locale);
  const p = progress(w);

  return (
    <article className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <nav aria-label={t("breadcrumb")} className="text-sm">
        <Link href="/soluces" className="font-semibold text-accent hover:underline">
          ← {t("back")}
        </Link>
      </nav>

      {/* Le logo est en habillage : le texte l'entoure puis reprend pleine largeur dessous. */}
      <header className="mt-6 after:clear-both after:block after:content-['']">
        <GameCover
          game={game}
          className="mb-4 aspect-[16/10] w-full max-w-[280px] sm:float-left sm:mb-3 sm:mr-6"
          sizes="280px"
          priority
        />
        <p className="eyebrow">{t("guide")}</p>
        <h1 className="mt-2 text-3xl font-bold sm:text-4xl lg:text-5xl">{game.title}</h1>
        <p className="mt-2 text-sm text-text-2">{localized(w.version, locale)}</p>
        {paragraphs(localized(w.intro, locale)).map((par, i) => (
          <p key={i} className="mt-4 leading-relaxed">
            <RichText text={par} link={link} />
          </p>
        ))}
        <p className="mt-4 text-sm text-text-2">{t("progress", { done: p.done, total: p.total })}</p>
      </header>

      {/* Les deux sommaires sont dépliables et ouverts au chargement : la page aligne
          quinze sections puis quinze annexes, et replier le premier bloc est le seul
          moyen d'atteindre le second sans faire défiler deux écrans de vignettes. */}
      <Disclosure id="sommaire" title={t("contents")} lead={t("contentsLead")} open className="mt-14">
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
      </Disclosure>

      <Disclosure id="annexes" title={t("quests")} lead={t("questsLead")} open className="mt-14">
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
      </Disclosure>
    </article>
  );
}
