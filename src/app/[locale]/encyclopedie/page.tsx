import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { CATEGORIES, CATEGORY_SLUG, entriesOf } from "@/data/encyclopedia";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale: locale as Locale, namespace: "Encyclopedia" });
  return { title: t("title"), description: t("lead") };
}

export default async function EncyclopediaPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  setRequestLocale(locale);
  const t = await getTranslations("Encyclopedia");

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <p className="eyebrow">Kingdom Hearts</p>
      <h1 className="mt-2 text-4xl font-bold sm:text-5xl">{t("title")}</h1>
      <p className="prose-max mt-4 text-lg text-text-2">{t("lead")}</p>
      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CATEGORIES.map((c) => {
          const n = entriesOf(c).length;
          const live = n > 0;
          return (
            <li key={c} className={`card ${live ? "card-link" : "opacity-80"}`}>
              {live ? (
                <Link href={`/encyclopedie/${CATEGORY_SLUG[c]}`} className="block h-full p-5">
                  <h2 className="text-xl font-bold">{t(`categories.${c}.title`)}</h2>
                  <p className="mt-1.5 text-sm text-text-2">{t(`categories.${c}.desc`)}</p>
                  <p className="tabular mt-3 text-sm font-semibold text-accent">{t("entries", { count: n })}</p>
                </Link>
              ) : (
                <div className="p-5">
                  <h2 className="text-xl font-bold">{t(`categories.${c}.title`)}</h2>
                  <p className="mt-1.5 text-sm text-text-2">{t(`categories.${c}.desc`)}</p>
                  <p className="mt-3 text-sm text-text-2">{t("comingSoon")}</p>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
