import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { getGame, localized } from "@/data/games";
import { CATEGORY_SLUG, getEntry } from "@/data/encyclopedia";
import { getQuest, getWalkthrough, tileImage, walkthroughs, writtenQuests } from "@/data/walkthrough";
import { BossCard, WalkDataTable, paragraphs } from "@/components/WalkthroughBits";
import { languageAlternates, localeUrl } from "@/lib/site";

type Props = { params: Promise<{ locale: string; game: string; quest: string }> };

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    walkthroughs.flatMap((w) => writtenQuests(w).map((q) => ({ locale, game: w.game, quest: q.id }))),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: rawLocale, game: slug, quest: id } = await params;
  const locale = rawLocale as Locale;
  const game = getGame(slug);
  const quest = getQuest(slug, id);
  if (!game || !quest || quest.status !== "done") return {};
  const t = await getTranslations({ locale, namespace: "Walkthrough" });
  const title = t("questTitle", { quest: localized(quest.title, locale), game: game.title });
  const description = localized(quest.tagline, locale);
  const path = `/soluces/${slug}/annexes/${id}`;
  return {
    title,
    description,
    alternates: { canonical: localeUrl(locale, path), languages: languageAlternates(path) },
    openGraph: { type: "article", title, description, url: localeUrl(locale, path) },
  };
}

export default async function QuestPage({ params }: Props) {
  const { locale: rawLocale, game: slug, quest: id } = await params;
  const locale = rawLocale as Locale;
  setRequestLocale(locale);
  const game = getGame(slug);
  const w = getWalkthrough(slug);
  const quest = w ? getQuest(slug, id) : undefined;
  if (!game || !w || !quest || quest.status !== "done") notFound();
  const t = await getTranslations("Walkthrough");
  const image = tileImage(quest);
  const entry = quest.entry ? getEntry(quest.entry) : undefined;
  const tableLabels = { world: t("tableWorld"), what: t("tableWhat"), where: t("tableWhere"), requires: t("requires") };

  return (
    <article className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
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

      {/* La vignette est en habillage : le texte commence à sa droite puis reprend dessous,
          au lieu de laisser une colonne vide sous l'image. */}
      <header className="mt-6 after:clear-both after:block after:content-['']">
        {image && (
          <figure className="mb-4 sm:float-left sm:mb-3 sm:mr-6 sm:w-[200px]">
            <span className="relative block aspect-[4/3] overflow-hidden rounded-lg border border-line bg-[#0b1020]">
              <Image src={image.src} alt="" fill sizes="200px" className="object-contain p-2" priority />
            </span>
            <figcaption className="mt-1.5 text-xs text-text-2">{image.credit}</figcaption>
          </figure>
        )}
        <p className="eyebrow">{t("quests")}</p>
        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">{localized(quest.title, locale)}</h1>
        <p className="mt-2 text-lg text-text-2">{localized(quest.tagline, locale)}</p>
        {entry && (
          <p className="mt-3 text-sm">
            <Link
              href={`/encyclopedie/${CATEGORY_SLUG[entry.category]}/${entry.slug}`}
              className="font-semibold text-accent hover:underline"
            >
              {t("relatedEntry")}
            </Link>
          </p>
        )}
        {quest.intro &&
          paragraphs(localized(quest.intro, locale)).map((p, i) => (
            <p key={i} className="mt-4 leading-relaxed">
              {p}
            </p>
          ))}
      </header>

      {(quest.tables ?? []).map((table) => (
        <section key={table.id} aria-labelledby={`t-${table.id}`} className="mt-12">
          <h2 id={`t-${table.id}`} className="text-2xl font-bold">
            {localized(table.title, locale)}
          </h2>
          {table.intro && <p className="mt-2 text-text-2">{localized(table.intro, locale)}</p>}
          <WalkDataTable table={table} locale={locale} labels={tableLabels} />
        </section>
      ))}

      {(quest.steps ?? []).map((s) => (
        <section key={s.id} id={s.id} aria-labelledby={`h-${s.id}`} className="mt-10 scroll-mt-24">
          <h2 id={`h-${s.id}`} className="text-2xl font-bold">
            {localized(s.title, locale)}
          </h2>
          {/* L'illustration est posée à droite du texte sur grand écran, au-dessus sur mobile :
              une capture vaut mieux qu'un paragraphe pour situer un mini-jeu. */}
          <div className={s.image ? "mt-4 grid gap-5 lg:grid-cols-[1fr_360px] lg:items-start" : ""}>
            <div>
              {paragraphs(localized(s.text, locale)).map((p, j) => (
                <p key={j} className="mt-4 leading-relaxed first:mt-0">
                  {p}
                </p>
              ))}
            </div>
            {s.image && (
              <figure className="lg:sticky lg:top-24">
                <Image
                  src={s.image.src}
                  alt=""
                  width={s.image.width}
                  height={s.image.height}
                  sizes="(min-width: 1024px) 360px, 100vw"
                  className="w-full rounded-lg border border-line"
                />
                <figcaption className="mt-1.5 text-xs text-text-2">{s.image.credit}</figcaption>
              </figure>
            )}
          </div>
        </section>
      ))}

      {quest.bosses && quest.bosses.length > 0 && (
        <section aria-labelledby="boss" className="mt-12">
          <h2 id="boss" className="text-2xl font-bold">
            {t("bosses")}
          </h2>
          {quest.bosses.map((b) => (
            <BossCard
              key={b.id}
              boss={b}
              locale={locale}
              labels={{ level: t("level"), reward: t("reward"), attacks: t("attacks") }}
            />
          ))}
        </section>
      )}

      {quest.rewards && (
        <section aria-labelledby="recompenses" className="mt-12">
          <h2 id="recompenses" className="text-2xl font-bold">
            {t("rewards")}
          </h2>
          {quest.rewards.intro && <p className="mt-2 text-text-2">{localized(quest.rewards.intro, locale)}</p>}
          <div role="region" aria-labelledby="recompenses" tabIndex={0} className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[24rem] border-collapse overflow-hidden rounded-lg border border-line text-sm">
              <thead>
                <tr className="bg-bg-2 text-left">
                  <th scope="col" className="w-40 border-b border-r border-line px-3 py-2 font-bold">
                    {localized(quest.rewards.tierHeader, locale)}
                  </th>
                  <th scope="col" className="border-b border-line px-3 py-2 font-bold">
                    {t("rewards")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {quest.rewards.rows.map((r, i) => (
                  <tr key={i} className={`align-top ${i % 2 === 1 ? "bg-bg-2/50" : ""}`}>
                    <th scope="row" className="border-b border-r border-line px-3 py-2 text-left font-semibold">
                      {localized(r.tier, locale)}
                    </th>
                    <td className="border-b border-line px-3 py-2 text-text-2">{localized(r.reward, locale)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {quest.rewards.note && <p className="mt-3 text-sm text-text-2">{localized(quest.rewards.note, locale)}</p>}
        </section>
      )}

      <p className="mt-12 text-sm">
        <Link href={`/soluces/${slug}`} className="font-semibold text-accent hover:underline">
          ← {t("backToGame", { game: game.title })}
        </Link>
      </p>
    </article>
  );
}
