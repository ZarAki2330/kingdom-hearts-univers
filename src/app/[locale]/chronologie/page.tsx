import type { Locale } from "@/i18n/routing";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { byRelease, byStory } from "@/data/games";
import { Timeline } from "@/components/Timeline";
import { EventsTimeline } from "@/components/EventsTimeline";
import { languageAlternates, localeUrl } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  const t = await getTranslations({ locale, namespace: "Timeline" });
  return {
    title: t("title"),
    description: t("lead"),
    alternates: { canonical: localeUrl(locale, "/chronologie"), languages: languageAlternates("/chronologie") },
    openGraph: { title: t("title"), description: t("lead"), url: localeUrl(locale, "/chronologie") },
  };
}

export default async function TimelinePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  setRequestLocale(locale);
  const t = await getTranslations("Timeline");

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <p className="eyebrow">Kingdom Hearts</p>
      <h1 className="mt-2 text-4xl font-bold sm:text-5xl">{t("title")}</h1>
      <p className="prose-max mt-4 text-lg text-text-2">{t("lead")}</p>
      <Timeline release={byRelease()} story={byStory()} events={<EventsTimeline locale={locale} />} />
    </div>
  );
}
