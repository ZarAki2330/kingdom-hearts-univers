import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { localized } from "@/data/games";
import { GLOSSARY_CATEGORIES, getTerm, initial, terms } from "@/data/glossary";
import { CATEGORY_SLUG, getEntry } from "@/data/encyclopedia";
import { languageAlternates, localeUrl } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  const t = await getTranslations({ locale, namespace: "Glossary" });
  return {
    title: t("title"),
    description: t("lead"),
    alternates: { canonical: localeUrl(locale, "/glossaire"), languages: languageAlternates("/glossaire") },
    openGraph: { title: t("title"), description: t("lead"), url: localeUrl(locale, "/glossaire") },
  };
}

export default async function GlossaryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  setRequestLocale(locale);
  const t = await getTranslations("Glossary");

  const sorted = [...terms].sort((a, b) =>
    localized(a.term, locale).localeCompare(localized(b.term, locale), locale, { sensitivity: "base" }),
  );

  // Regroupement par lettre initiale, pour l'index alphabétique.
  const letters: { letter: string; items: typeof sorted }[] = [];
  for (const term of sorted) {
    const letter = initial(term, locale);
    const last = letters[letters.length - 1];
    if (last && last.letter === letter) last.items.push(term);
    else letters.push({ letter, items: [term] });
  }

  const counts = GLOSSARY_CATEGORIES.map((c) => ({ c, n: terms.filter((x) => x.category === c).length })).filter(
    (x) => x.n > 0,
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <p className="eyebrow">Kingdom Hearts</p>
      <h1 className="mt-2 text-4xl font-bold sm:text-5xl">{t("title")}</h1>
      <p className="prose-max mt-4 text-lg text-text-2">{t("lead")}</p>
      <p className="mt-3 text-sm text-text-2">
        {t("count", { count: terms.length })} ·{" "}
        {counts.map(({ c, n }, i) => (
          <span key={c}>
            {i > 0 && " · "}
            {t(`categories.${c}`)} <span className="tabular">({n})</span>
          </span>
        ))}
      </p>

      <nav aria-label={t("index")} className="card mt-8 flex flex-wrap gap-1.5 p-4">
        {letters.map(({ letter }) => (
          <a
            key={letter}
            href={`#lettre-${letter}`}
            className="tabular min-w-9 rounded-md border border-line px-2.5 py-1.5 text-center text-sm font-bold transition-colors hover:border-accent hover:text-accent"
          >
            {letter}
          </a>
        ))}
      </nav>

      <div className="mt-10 space-y-10">
        {letters.map(({ letter, items }) => (
          <section key={letter} id={`lettre-${letter}`} aria-labelledby={`h-${letter}`} className="scroll-mt-24">
            <h2 id={`h-${letter}`} className="font-display text-3xl font-bold text-accent">
              {letter}
            </h2>
            <dl className="mt-4 grid gap-4 lg:grid-cols-2">
              {items.map((term) => {
                const entry = term.entry ? getEntry(term.entry) : undefined;
                const related = (term.related ?? []).map(getTerm).filter((r) => r !== undefined);
                return (
                  <div key={term.id} id={term.id} className="card scroll-mt-24 p-5">
                    <dt>
                      <span className="text-lg font-bold">{localized(term.term, locale)}</span>
                      {term.en && locale !== "en" && (
                        <span className="ml-2 text-sm text-text-2" lang="en">
                          {term.en}
                        </span>
                      )}
                      <span className="eyebrow ml-2">{t(`categories.${term.category}`)}</span>
                    </dt>
                    <dd>
                      <p className="mt-2 font-semibold">{localized(term.short, locale)}</p>
                      {localized(term.text, locale)
                        .split(/\n\n+/)
                        .map((p, i) => (
                          <p key={i} className="mt-2 leading-relaxed text-text-2">
                            {p}
                          </p>
                        ))}
                      {(entry || related.length > 0) && (
                        <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-sm">
                          {entry && (
                            <Link
                              href={`/encyclopedie/${CATEGORY_SLUG[entry.category]}/${entry.slug}`}
                              className="font-semibold text-accent hover:underline"
                            >
                              {t("seeEntry")} →
                            </Link>
                          )}
                          {related.map((r) => (
                            <a
                              key={r.id}
                              href={`#${r.id}`}
                              className="rounded-md border border-line px-2 py-0.5 text-xs font-semibold text-text-2 transition-colors hover:border-accent hover:text-accent"
                            >
                              {localized(r.term, locale)}
                            </a>
                          ))}
                        </p>
                      )}
                    </dd>
                  </div>
                );
              })}
            </dl>
          </section>
        ))}
      </div>
    </div>
  );
}
