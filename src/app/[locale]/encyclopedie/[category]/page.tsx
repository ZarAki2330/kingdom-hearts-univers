import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { CATEGORIES, CATEGORY_SLUG, categoryFromSlug, displayName, entriesOf } from "@/data/encyclopedia";
import { EntryCard } from "@/components/EntryCard";
import { EntryFilters, type GameOption } from "@/components/EntryFilters";
import { Pagination } from "@/components/Pagination";
import { games } from "@/data/games";
import { KINDS, PAGE_SIZE, filterEntries, readQuery } from "@/lib/entry-filter";
import { languageAlternates, localeUrl } from "@/lib/site";

type Props = {
  params: Promise<{ locale: string; category: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => CATEGORIES.map((c) => ({ locale, category: CATEGORY_SLUG[c] })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, category } = await params;
  const c = categoryFromSlug(category);
  if (!c) return {};
  const t = await getTranslations({ locale: locale as Locale, namespace: "Encyclopedia" });
  const path = `/encyclopedie/${category}`;
  return {
    title: `${t(`categories.${c}.title`)} · ${t("title")}`,
    description: t(`categories.${c}.desc`),
    alternates: { canonical: localeUrl(locale as Locale, path), languages: languageAlternates(path) },
  };
}

export default async function CategoryPage({ params, searchParams }: Props) {
  const { locale: rawLocale, category } = await params;
  const locale = rawLocale as Locale;
  setRequestLocale(locale);
  const c = categoryFromSlug(category);
  if (!c) notFound();
  const t = await getTranslations("Encyclopedia");
  const tk = (k: string) => t(k as Parameters<typeof t>[0]);

  const list = entriesOf(c).sort((a, b) => displayName(a, locale).localeCompare(displayName(b, locale), locale));
  const present = new Set(list.flatMap((e) => e.appearances));
  const gameOptions: GameOption[] = games.filter((g) => present.has(g.slug)).map((g) => ({ slug: g.slug, label: g.title }));

  // Filtres lus dans l'URL et appliqués côté serveur : les cartes partent dans le HTML.
  const query = readQuery(await searchParams);
  const filtered = filterEntries(list, c, query);
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const page = Math.min(query.page, totalPages);
  const visible = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const path = `/encyclopedie/${category}`;
  const linkQuery = {
    q: query.q || undefined,
    type: query.kind !== "all" ? query.kind : undefined,
    jeu: query.game !== "all" ? query.game : undefined,
    camp: query.camp !== "all" ? query.camp : undefined,
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <nav aria-label="Fil d'Ariane" className="text-sm">
        <Link href="/encyclopedie" className="font-semibold text-accent hover:underline">
          ← {t("back")}
        </Link>
      </nav>
      <p className="eyebrow mt-6">{t("title")}</p>
      <h1 className="mt-2 text-4xl font-bold sm:text-5xl">{t(`categories.${c}.title`)}</h1>
      <p className="prose-max mt-4 text-lg text-text-2">{t(`categories.${c}.desc`)}</p>

      {list.length === 0 ? (
        <p className="mt-8 rounded-xl border border-dashed border-line p-6 text-text-2">{t("comingSoon")}</p>
      ) : (
        <>
          <EntryFilters category={c} kinds={KINDS[c] ?? []} games={gameOptions} current={query} path={path} />
          <p className="mt-3 text-sm text-text-2" role="status" aria-live="polite">
            {t("entries", { count: filtered.length })}
            {totalPages > 1 && ` · ${t("pagination.status", { page, total: totalPages })}`}
          </p>
          {visible.length === 0 ? (
            <p className="mt-6 rounded-xl border border-dashed border-line p-6 text-center text-text-2">{t("noResult")}</p>
          ) : (
            <section aria-labelledby="resultats">
              {/* Titre de niveau 2 : les cartes portent des h3, la hiérarchie reste continue. */}
              <h2 id="resultats" className="sr-only">
                {t("results")}
              </h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {visible.map((e) => {
                  const kind = (e as { kind?: string }).kind;
                  return <EntryCard key={e.slug} entry={e} kindLabel={kind ? tk(`kinds.${kind}`) : ""} />;
                })}
              </ul>
            </section>
          )}
          <Pagination page={page} total={totalPages} pathname={path} query={linkQuery} />
        </>
      )}
    </div>
  );
}
