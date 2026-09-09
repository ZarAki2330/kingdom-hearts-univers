import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { games } from "@/data/games";
import { CATEGORIES, entries, entriesOf } from "@/data/encyclopedia";
import { stories } from "@/data/story";
import { events } from "@/data/timeline";
import { terms } from "@/data/glossary";
import { languageAlternates, localeUrl } from "@/lib/site";

const REPO = "https://github.com/ZarAki2330/kingdom-hearts-univers";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  const t = await getTranslations({ locale, namespace: "About" });
  return {
    title: t("title"),
    description: t("lead"),
    alternates: { canonical: localeUrl(locale, "/a-propos"), languages: languageAlternates("/a-propos") },
    openGraph: { title: t("title"), description: t("lead"), url: localeUrl(locale, "/a-propos") },
  };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  setRequestLocale(locale);
  const t = await getTranslations("About");
  const tk = (k: string) => t(k as Parameters<typeof t>[0]);

  // Les chiffres sont comptés dans les données au moment du rendu : ils ne peuvent pas mentir.
  const counts: { value: number; label: string }[] = [
    { value: entries.length, label: t("figures.entries") },
    { value: games.length, label: t("figures.games") },
    { value: stories.length, label: t("figures.stories") },
    { value: events.length, label: t("figures.events") },
    { value: terms.length, label: t("figures.terms") },
    { value: routing.locales.length, label: t("figures.locales") },
  ];
  const byCategory = CATEGORIES.map((c) => ({ c, n: entriesOf(c).length }));

  const sources: { name: string; url: string; note: string }[] = [
    { name: "Kingdom Hearts Wiki", url: "https://www.khwiki.com", note: t("sources.khwiki") },
    { name: "Kingdom Hearts Wiki (français)", url: "https://kingdomhearts.fandom.com/fr", note: t("sources.frwiki") },
    { name: "Kingdom Hearts Wiki (Fandom)", url: "https://kingdomhearts.fandom.com", note: t("sources.enfandom") },
    { name: "KH Destiny", url: "https://www.khdestiny.fr", note: t("sources.khdestiny") },
    { name: "PSTHC", url: "https://www.psthc.fr", note: t("sources.psthc") },
  ];

  const legal = ["publisher", "host", "contact", "trademarks", "images", "privacy"] as const;

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <p className="eyebrow">Kingdom Hearts Univers</p>
      <h1 className="mt-2 text-4xl font-bold sm:text-5xl">{t("title")}</h1>
      <p className="prose-max mt-4 text-lg text-text-2">{t("lead")}</p>

      <section aria-labelledby="projet" className="mt-12">
        <h2 id="projet" className="text-2xl font-bold">
          {t("project")}
        </h2>
        {t("projectText")
          .split("\n\n")
          .map((p, i) => (
            <p key={i} className="prose-max mt-4 leading-relaxed">
              {p}
            </p>
          ))}
      </section>

      <section aria-labelledby="chiffres" className="mt-12">
        <h2 id="chiffres" className="text-2xl font-bold">
          {t("figures.title")}
        </h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-3">
          {counts.map((c) => (
            <li key={c.label} className="card p-4">
              <span className="tabular block font-display text-3xl font-bold text-accent">{c.value}</span>
              <span className="text-sm text-text-2">{c.label}</span>
            </li>
          ))}
        </ul>
        <p className="prose-max mt-4 text-sm text-text-2">
          {t("figures.detail", {
            detail: byCategory.map(({ c, n }) => `${n} ${tk(`figures.categories.${c}`)}`).join(", "),
          })}
        </p>
      </section>

      <section aria-labelledby="sources" className="mt-12">
        <h2 id="sources" className="text-2xl font-bold">
          {t("sources.title")}
        </h2>
        <p className="prose-max mt-4 leading-relaxed">{t("sources.lead")}</p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {sources.map((s) => (
            <li key={s.url} className="card p-4">
              <a href={s.url} rel="noopener noreferrer" target="_blank" className="font-bold text-accent hover:underline">
                {s.name}
              </a>
              <p className="mt-1 text-sm text-text-2">{s.note}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="mentions" className="mt-12">
        <h2 id="mentions" className="text-2xl font-bold">
          {t("legal.title")}
        </h2>
        <dl className="mt-4 space-y-5">
          {legal.map((k) => (
            <div key={k} className="card p-5">
              <dt className="font-bold">{tk(`legal.${k}.title`)}</dt>
              <dd className="prose-max mt-1.5 leading-relaxed text-text-2">
                {tk(`legal.${k}.text`)}
                {k === "contact" && (
                  <>
                    {" "}
                    <a href={`${REPO}/issues`} rel="noopener noreferrer" target="_blank" className="font-semibold text-accent hover:underline">
                      ZarAki2330/kingdom-hearts-univers
                    </a>
                    .
                  </>
                )}
                {k === "host" && (
                  <>
                    {" "}
                    <a href="https://vercel.com" rel="noopener noreferrer" target="_blank" className="font-semibold text-accent hover:underline">
                      vercel.com
                    </a>
                    .
                  </>
                )}
                {k === "publisher" && (
                  <>
                    {" "}
                    <a href="https://github.com/ZarAki2330" rel="noopener noreferrer" target="_blank" className="font-semibold text-accent hover:underline">
                      github.com/ZarAki2330
                    </a>
                    .
                  </>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section aria-labelledby="licences" className="mt-12">
        <h2 id="licences" className="text-2xl font-bold">
          {t("licences.title")}
        </h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          <li className="card p-5">
            <h3 className="font-bold">{t("licences.code")}</h3>
            <p className="mt-1.5 text-sm text-text-2">{t("licences.codeText")}</p>
            <a href={`${REPO}/blob/main/LICENSE`} rel="noopener noreferrer" target="_blank" className="mt-2 inline-block text-sm font-semibold text-accent hover:underline">
              MIT
            </a>
          </li>
          <li className="card p-5">
            <h3 className="font-bold">{t("licences.content")}</h3>
            <p className="mt-1.5 text-sm text-text-2">{t("licences.contentText")}</p>
            <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr" rel="noopener noreferrer" target="_blank" className="mt-2 inline-block text-sm font-semibold text-accent hover:underline">
              CC BY-NC-SA 4.0
            </a>
          </li>
        </ul>
      </section>

      <p className="mt-12 text-sm text-text-2">
        <Link href="/accessibilite" className="font-semibold text-accent hover:underline">
          {t("a11yLink")} →
        </Link>
      </p>
    </div>
  );
}
