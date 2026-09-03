import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { buildIndex, search } from "@/lib/search";

type Props = { params: Promise<{ locale: string }>; searchParams: Promise<{ q?: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale: locale as Locale, namespace: "Search" });
  return { title: t("label"), robots: { index: false } };
}

/** Page de recherche sans JavaScript (formulaire GET), complémentaire de la palette Ctrl+K. */
export default async function SearchPage({ params, searchParams }: Props) {
  const { locale: rawLocale } = await params;
  const { q = "" } = await searchParams;
  const locale = rawLocale as Locale;
  setRequestLocale(locale);
  const t = await getTranslations("Search");
  const tk = (k: string) => t(k as Parameters<typeof t>[0]);
  const results = q.trim() ? search(buildIndex(), q, 50) : [];

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-4xl font-bold sm:text-5xl">{t("label")}</h1>
      <form action="" method="get" role="search" className="mt-6 flex gap-2">
        <label className="flex-1">
          <span className="sr-only">{t("placeholder")}</span>
          <input
            type="search"
            name="q"
            defaultValue={q}
            placeholder={t("placeholder")}
            className="w-full rounded-full border border-line bg-surface px-4 py-2.5"
          />
        </label>
        <button type="submit" className="rounded-full bg-accent px-5 py-2.5 font-bold text-accent-contrast">{t("submit")}</button>
      </form>
      {q.trim() && (
        <p className="mt-4 text-sm text-text-2" aria-live="polite">{t("count", { count: results.length, q })}</p>
      )}
      <ul className="mt-6 space-y-2">
        {results.map((r) => (
          <li key={r.href} className="card card-link">
            <Link href={r.href} className="flex items-center gap-3 p-3">
              <span aria-hidden="true" className="h-10 w-10 shrink-0 rounded-full" style={{ background: `linear-gradient(160deg, ${r.accent}, #0b1020)` }} />
              <span className="min-w-0 flex-1">
                <span className="block font-bold">{locale !== "fr" && r.nameEn ? r.nameEn : r.name}</span>
                <span className="block text-sm text-text-2">{locale === "fr" ? r.sub.fr : r.sub.en}</span>
              </span>
              <span className="shrink-0 rounded-full border border-line px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-text-2">{tk(`types.${r.type}`)}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
