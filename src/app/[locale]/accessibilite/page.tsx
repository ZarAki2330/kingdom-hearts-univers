import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { A11ySettings } from "@/components/A11ySettings";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  const t = await getTranslations({ locale, namespace: "A11y" });
  return { title: t("title"), description: t("lead") };
}

export default async function AccessibilityPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  setRequestLocale(rawLocale as Locale);
  const t = await getTranslations("A11y");

  const commitments = ["keyboard", "contrast", "structure", "images", "language"] as const;

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <p className="eyebrow">Kingdom Hearts Univers</p>
      <h1 className="mt-2 text-4xl font-bold sm:text-5xl">{t("title")}</h1>
      <p className="prose-max mt-4 text-lg text-text-2">{t("lead")}</p>

      <section aria-labelledby="settings" className="mt-10">
        <h2 id="settings" className="text-2xl font-bold">
          {t("settings")}
        </h2>
        <p className="prose-max mt-2 text-text-2">{t("settingsHelp")}</p>
        <A11ySettings />
      </section>

      <section aria-labelledby="commitments" className="mt-14">
        <h2 id="commitments" className="text-2xl font-bold">
          {t("commitments")}
        </h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {commitments.map((c) => (
            <li key={c} className="card p-5">
              <h3 className="font-bold">{t(`items.${c}.title`)}</h3>
              <p className="mt-1.5 text-sm text-text-2">{t(`items.${c}.text`)}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="feedback" className="mt-14">
        <h2 id="feedback" className="text-2xl font-bold">
          {t("feedback")}
        </h2>
        <p className="prose-max mt-2 text-text-2">{t("feedbackText")}</p>
      </section>
    </div>
  );
}
