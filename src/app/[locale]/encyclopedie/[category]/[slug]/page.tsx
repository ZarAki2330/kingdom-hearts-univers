import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { CATEGORY_SLUG, categoryFromSlug, displayName, entries, getEntry, localized, type Entry } from "@/data/encyclopedia";
import { getGame } from "@/data/games";
import { EntryPortrait } from "@/components/EntryPortrait";
import { GameCover } from "@/components/GameCover";

type Props = { params: Promise<{ locale: string; category: string; slug: string }> };

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    entries.map((e) => ({ locale, category: CATEGORY_SLUG[e.category], slug: e.slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const entry = getEntry(slug);
  if (!entry) return {};
  return { title: displayName(entry, locale as Locale), description: localized(entry.tagline, locale as Locale) };
}

/** Fiches d'identité : couples (libellé, valeur) selon le type d'entrée. */
function facts(entry: Entry, locale: Locale, t: (k: string) => string): [string, string][] {
  const out: [string, string][] = [];
  const origName = locale === "fr" ? [entry.names?.en, entry.names?.ja].filter(Boolean).join(" · ") : [entry.name !== displayName(entry, locale) ? entry.name : undefined, entry.names?.ja].filter(Boolean).join(" · ");
  if (origName) out.push([t("facts.names"), origName]);
  if (entry.aliases?.length) out.push([t("facts.aliases"), entry.aliases.join(", ")]);
  if (entry.category === "characters") {
    out.push([t("facts.kind"), t(`kinds.${entry.kind}`)]);
    if (entry.alignment) out.push([t("facts.alignment"), t(`alignment.${entry.alignment}`)]);
    if (entry.homeworld) out.push([t("facts.homeworld"), entry.homeworld]);
    if (entry.group) out.push([t("facts.group"), entry.group]);
    if (entry.weapon) out.push([t("facts.weapon"), localized(entry.weapon, locale)]);
    if (entry.voice) {
      const v = [entry.voice.fr && `FR : ${entry.voice.fr}`, entry.voice.en && `EN : ${entry.voice.en}`, entry.voice.ja && `JA : ${entry.voice.ja}`]
        .filter(Boolean)
        .join(" · ");
      out.push([t("facts.voice"), v]);
    }
  } else if (entry.category === "enemies") {
    out.push([t("facts.kind"), t(`kinds.${entry.kind}`)]);
    out.push([t("facts.role"), t(`roles.${entry.role}`)]);
    if (entry.variant) out.push([t("facts.variant"), localized(entry.variant, locale)]);
  }
  return out;
}

export default async function EntryPage({ params }: Props) {
  const { locale: rawLocale, category, slug } = await params;
  const locale = rawLocale as Locale;
  setRequestLocale(locale);
  const c = categoryFromSlug(category);
  const entry = getEntry(slug);
  if (!c || !entry || entry.category !== c) notFound();
  const t = await getTranslations("Encyclopedia");
  const tk = (k: string) => t(k as Parameters<typeof t>[0]);

  const games = entry.appearances.map(getGame).filter((g) => g !== undefined);
  const debut = entry.debut ? getGame(entry.debut) : undefined;
  const related = (entry.relations ?? []).map((r) => ({ ...r, entry: getEntry(r.slug) })).filter((r) => r.entry);
  const paragraphs = localized(entry.description, locale).split(/\n\s*\n/);

  return (
    <article className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <nav aria-label="Fil d'Ariane" className="flex flex-wrap gap-2 text-sm">
        <Link href="/encyclopedie" className="font-semibold text-accent hover:underline">{t("title")}</Link>
        <span aria-hidden="true">›</span>
        <Link href={`/encyclopedie/${category}`} className="font-semibold text-accent hover:underline">{t(`categories.${c}.title`)}</Link>
      </nav>

      <header className="mt-6 grid gap-6 md:grid-cols-[160px_1fr] md:items-start">
        <EntryPortrait entry={entry} className="h-32 w-32 md:h-40 md:w-40" sizes="160px" />
        <div>
          <p className="eyebrow">{"kind" in entry ? t(`kinds.${entry.kind}`) : t(`categories.${c}.title`)}</p>
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl lg:text-5xl">{displayName(entry, locale)}</h1>
          <p className="prose-max mt-3 font-display text-lg text-text-2">{localized(entry.tagline, locale)}</p>
        </div>
      </header>

      <div className="mt-10 grid gap-10 md:grid-cols-[1fr_320px]">
        <section aria-label={t("title")}>
          {paragraphs.map((p, i) => (
            <p key={i} className="prose-max mt-4 text-lg leading-relaxed first:mt-0">{p}</p>
          ))}

          {games.length > 0 && (
            <section aria-labelledby="appearances" className="mt-10">
              <h2 id="appearances" className="text-2xl font-bold">{t("appearances")}</h2>
              {debut && (
                <p className="mt-1 text-sm text-text-2">
                  {t("debut")} : <span className="font-semibold text-text">{debut.title}</span>
                </p>
              )}
              <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {games.map((g) => (
                  <li key={g.slug}>
                    <Link href={`/jeux/${g.slug}`} className="card card-link flex items-center gap-3 p-2.5">
                      <GameCover game={g} className="h-14 w-10 shrink-0 rounded-md" sizes="40px" />
                      <span className="text-sm font-bold leading-tight">{g.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </section>

        <aside className="flex flex-col gap-6">
          <div className="card p-5">
            <dl className="grid gap-3 text-sm">
              {facts(entry, locale, tk).map(([k, v]) => (
                <div key={k}>
                  <dt className="eyebrow">{k}</dt>
                  <dd className="mt-0.5 font-semibold">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          {related.length > 0 && (
            <div className="card p-5">
              <h2 className="eyebrow">{t("relations")}</h2>
              <ul className="mt-3 space-y-3">
                {related.map((r) => (
                  <li key={r.slug} className="flex items-center gap-3">
                    <EntryPortrait entry={r.entry!} className="h-10 w-10 shrink-0" sizes="40px" />
                    <div className="min-w-0">
                      <Link href={`/encyclopedie/${CATEGORY_SLUG[r.entry!.category]}/${r.slug}`} className="font-bold hover:text-accent">
                        {displayName(r.entry!, locale)}
                      </Link>
                      <p className="text-xs text-text-2">{localized(r.label, locale)}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {entry.tags && entry.tags.length > 0 && (
            <div>
              <h2 className="eyebrow">{t("tags")}</h2>
              <ul className="mt-2 flex flex-wrap gap-1.5">
                {entry.tags.map((tag) => (
                  <li key={tag} className="rounded-md border border-line bg-surface px-2 py-0.5 text-xs">{tag}</li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>
    </article>
  );
}
