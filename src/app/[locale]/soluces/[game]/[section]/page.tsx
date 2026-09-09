import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { getGame, localized } from "@/data/games";
import { CATEGORY_SLUG, getEntry } from "@/data/encyclopedia";
import { getSection, getWalkthrough, neighbours, walkthroughs, writtenSections } from "@/data/walkthrough";
import { BossCard, CollectibleList, paragraphs } from "@/components/WalkthroughBits";
import { languageAlternates, localeUrl } from "@/lib/site";

type Props = { params: Promise<{ locale: string; game: string; section: string }> };

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    walkthroughs.flatMap((w) => writtenSections(w).map((s) => ({ locale, game: w.game, section: s.id }))),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: rawLocale, game: slug, section: id } = await params;
  const locale = rawLocale as Locale;
  const game = getGame(slug);
  const section = getSection(slug, id);
  if (!game || !section || section.status !== "done") return {};
  const t = await getTranslations({ locale, namespace: "Walkthrough" });
  const title = t("sectionTitle", { section: localized(section.title, locale), game: game.title });
  const description = section.intro ? paragraphs(localized(section.intro, locale))[0] : undefined;
  const path = `/soluces/${slug}/${id}`;
  return {
    title,
    description,
    alternates: { canonical: localeUrl(locale, path), languages: languageAlternates(path) },
    openGraph: { type: "article", title, description, url: localeUrl(locale, path) },
  };
}

export default async function WalkthroughSectionPage({ params }: Props) {
  const { locale: rawLocale, game: slug, section: id } = await params;
  const locale = rawLocale as Locale;
  setRequestLocale(locale);
  const game = getGame(slug);
  const w = getWalkthrough(slug);
  const section = w ? getSection(slug, id) : undefined;
  if (!game || !w || !section || section.status !== "done") notFound();
  const t = await getTranslations("Walkthrough");
  const { previous, next } = neighbours(w, id);
  const world = section.world ? getEntry(section.world) : undefined;
  const steps = section.steps ?? [];

  return (
    <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <nav aria-label={t("breadcrumb")} className="flex flex-wrap gap-x-3 gap-y-1 text-sm">
        <Link href="/soluces" className="font-semibold text-accent hover:underline">
          {t("title")}
        </Link>
        <span className="text-text-2" aria-hidden="true">
          /
        </span>
        <Link href={`/soluces/${slug}`} className="font-semibold text-accent hover:underline">
          {game.title}
        </Link>
      </nav>

      <header className="mt-6">
        <p className="eyebrow">{game.title}</p>
        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">{localized(section.title, locale)}</h1>
        {section.subtitle && <p className="mt-1 text-lg text-text-2">{localized(section.subtitle, locale)}</p>}
        <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-text-2">
          {section.level && (
            <li>
              {t("level")} <span className="tabular font-semibold text-text">{section.level}</span>
            </li>
          )}
          {world && (
            <li>
              <Link
                href={`/encyclopedie/${CATEGORY_SLUG[world.category]}/${world.slug}`}
                className="font-semibold text-accent hover:underline"
              >
                {t("worldEntry")}
              </Link>
            </li>
          )}
        </ul>
        {section.intro &&
          paragraphs(localized(section.intro, locale)).map((p, i) => (
            <p key={i} className="prose-max mt-4 text-lg leading-relaxed">
              {p}
            </p>
          ))}
      </header>

      {steps.length > 1 && (
        <nav aria-labelledby="etapes-sommaire" className="card mt-8 p-5">
          <h2 id="etapes-sommaire" className="text-sm font-bold uppercase tracking-wider text-text-2">
            {t("steps")}
          </h2>
          <ol className="mt-2 space-y-1">
            {steps.map((s, i) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="text-accent hover:underline">
                  {i + 1}. {localized(s.title, locale)}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      )}

      {steps.map((s, i) => (
        <section key={s.id} id={s.id} aria-labelledby={`h-${s.id}`} className="mt-10 scroll-mt-24">
          <h2 id={`h-${s.id}`} className="text-2xl font-bold">
            <span className="tabular mr-2 text-text-2">{i + 1}.</span>
            {localized(s.title, locale)}
          </h2>
          {paragraphs(localized(s.text, locale)).map((p, j) => (
            <p key={j} className="prose-max mt-4 leading-relaxed">
              {p}
            </p>
          ))}
        </section>
      ))}

      {section.bosses && section.bosses.length > 0 && (
        <section aria-labelledby="boss" className="mt-14">
          <h2 id="boss" className="text-2xl font-bold">
            {t("bosses")}
          </h2>
          {section.bosses.map((b) => (
            <BossCard
              key={b.id}
              boss={b}
              locale={locale}
              labels={{ level: t("level"), reward: t("reward"), attacks: t("attacks") }}
            />
          ))}
        </section>
      )}

      {section.collectibles && section.collectibles.length > 0 && (
        <section aria-labelledby="ramassage" className="mt-14">
          <h2 id="ramassage" className="text-2xl font-bold">
            {t("collectibles")}
          </h2>
          <p className="prose-max mt-3 text-text-2">{t("collectiblesLead")}</p>
          <CollectibleList items={section.collectibles} locale={locale} requiresLabel={t("requires")} />
        </section>
      )}

      {section.missable && section.missable.length > 0 && (
        <section aria-labelledby="rater" className="card kind-edge k-unversed mt-14 p-5 sm:p-6">
          <h2 id="rater" className="text-xl font-bold">
            {t("missable")}
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-text-2">
            {section.missable.map((m, i) => (
              <li key={i} className="prose-max">
                {localized(m, locale)}
              </li>
            ))}
          </ul>
        </section>
      )}

      <nav aria-label={t("sectionNav")} className="mt-14 grid gap-3 sm:grid-cols-2">
        {previous && previous.status === "done" ? (
          <Link href={`/soluces/${slug}/${previous.id}`} className="card card-link p-4">
            <span className="text-sm text-text-2">← {t("previous")}</span>
            <span className="mt-1 block font-semibold">{localized(previous.title, locale)}</span>
          </Link>
        ) : (
          <span />
        )}
        {next && next.status === "done" ? (
          <Link href={`/soluces/${slug}/${next.id}`} className="card card-link p-4 sm:text-right">
            <span className="text-sm text-text-2">{t("next")} →</span>
            <span className="mt-1 block font-semibold">{localized(next.title, locale)}</span>
          </Link>
        ) : next ? (
          <span className="card border-dashed p-4 text-text-2 sm:text-right">
            <span className="text-sm">{t("next")}</span>
            <span className="mt-1 block font-semibold">{localized(next.title, locale)}</span>
            <span className="text-sm">{t("soon")}</span>
          </span>
        ) : null}
      </nav>
    </article>
  );
}
