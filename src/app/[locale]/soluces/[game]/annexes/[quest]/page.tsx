import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { getGame, localized } from "@/data/games";
import { CATEGORY_SLUG, getEntry } from "@/data/encyclopedia";
import { getQuest, getWalkthrough, tileImage, walkthroughs, writtenQuests } from "@/data/walkthrough";
import { BossCard, paragraphs } from "@/components/WalkthroughBits";
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

      <header className="mt-6 grid gap-6 sm:grid-cols-[200px_1fr] sm:items-start">
        {image && (
          <span className="relative block aspect-[4/3] overflow-hidden rounded-lg border border-line bg-[#0b1020]">
            <Image src={image.src} alt="" fill sizes="200px" className="object-contain p-2" priority />
          </span>
        )}
        <div>
          <p className="eyebrow">{t("quests")}</p>
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">{localized(quest.title, locale)}</h1>
          <p className="prose-max mt-2 text-lg text-text-2">{localized(quest.tagline, locale)}</p>
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
          {image && <p className="mt-3 text-xs text-text-2">{image.credit}</p>}
        </div>
      </header>

      {quest.intro &&
        paragraphs(localized(quest.intro, locale)).map((p, i) => (
          <p key={i} className="prose-max mt-4 leading-relaxed">
            {p}
          </p>
        ))}

      {(quest.steps ?? []).map((s) => (
        <section key={s.id} id={s.id} aria-labelledby={`h-${s.id}`} className="mt-10 scroll-mt-24">
          <h2 id={`h-${s.id}`} className="text-2xl font-bold">
            {localized(s.title, locale)}
          </h2>
          {paragraphs(localized(s.text, locale)).map((p, j) => (
            <p key={j} className="prose-max mt-4 leading-relaxed">
              {p}
            </p>
          ))}
        </section>
      ))}

      {(quest.tables ?? []).map((table) => (
        <section key={table.id} aria-labelledby={`t-${table.id}`} className="mt-12">
          <h2 id={`t-${table.id}`} className="text-2xl font-bold">
            {localized(table.title, locale)}
          </h2>
          {table.intro && <p className="prose-max mt-2 text-text-2">{localized(table.intro, locale)}</p>}
          {/* Le tableau défile seul quand la fenêtre est étroite : la page, elle, ne déborde jamais. */}
          <div role="region" aria-labelledby={`t-${table.id}`} tabIndex={0} className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[36rem] border-collapse text-sm">
              <thead>
                <tr className="border-b border-line text-left">
                  <th scope="col" className="py-2 pr-3 font-bold">
                    {t("tableWorld")}
                  </th>
                  <th scope="col" className="py-2 pr-3 font-bold">
                    {t("tableWhat")}
                  </th>
                  <th scope="col" className="py-2 font-bold">
                    {t("tableWhere")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {table.rows.map((row, i) => (
                  <tr key={i} className="border-b border-line/60 align-top">
                    <td className="py-2 pr-3 font-semibold">{localized(row.world, locale)}</td>
                    <td className="py-2 pr-3">{localized(row.what, locale)}</td>
                    <td className="py-2 text-text-2">
                      {localized(row.where, locale)}
                      {row.requires && (
                        <span className="mt-1 block text-xs">
                          <span className="font-semibold">{t("requires")} </span>
                          {localized(row.requires, locale)}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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

      {quest.rewards && quest.rewards.length > 0 && (
        <section aria-labelledby="recompenses" className="mt-12">
          <h2 id="recompenses" className="text-2xl font-bold">
            {t("rewards")}
          </h2>
          <dl className="mt-4 grid gap-3 sm:grid-cols-2">
            {quest.rewards.map((r, i) => (
              <div key={i} className="card p-5">
                <dt className="font-bold">{localized(r.label, locale)}</dt>
                <dd className="prose-max mt-1.5 leading-relaxed text-text-2">{localized(r.text, locale)}</dd>
              </div>
            ))}
          </dl>
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
