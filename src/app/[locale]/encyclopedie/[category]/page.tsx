import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { CATEGORIES, CATEGORY_SLUG, categoryFromSlug, displayName, entriesOf } from "@/data/encyclopedia";
import { EntryList } from "@/components/EntryList";

type Props = { params: Promise<{ locale: string; category: string }> };

const KINDS: Record<string, string[]> = {
  characters: ["original", "disney", "final-fantasy"],
  enemies: ["heartless", "nobody", "unversed", "dream-eater"],
  worlds: ["original", "disney", "final-fantasy"],
};

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => CATEGORIES.map((c) => ({ locale, category: CATEGORY_SLUG[c] })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, category } = await params;
  const c = categoryFromSlug(category);
  if (!c) return {};
  const t = await getTranslations({ locale: locale as Locale, namespace: "Encyclopedia" });
  return { title: `${t(`categories.${c}.title`)} · ${t("title")}`, description: t(`categories.${c}.desc`) };
}

export default async function CategoryPage({ params }: Props) {
  const { locale: rawLocale, category } = await params;
  const locale = rawLocale as Locale;
  setRequestLocale(locale);
  const c = categoryFromSlug(category);
  if (!c) notFound();
  const t = await getTranslations("Encyclopedia");
  const list = entriesOf(c).sort((a, b) => displayName(a, locale).localeCompare(displayName(b, locale), locale));

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
        <EntryList entries={list} kinds={KINDS[c] ?? []} />
      )}
    </div>
  );
}
