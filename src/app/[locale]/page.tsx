import type { Locale } from "@/i18n/routing";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { games } from "@/data/games";
import { locales } from "@/i18n/routing";
import { Emblem } from "@/components/Emblem";

const sections = [
  { key: "games", href: "/jeux", live: true },
  { key: "timeline", href: "/chronologie", live: true },
  { key: "characters", href: "/encyclopedie/personnages", live: true },
  { key: "enemies", href: "/encyclopedie/ennemis", live: true },
  { key: "worlds", href: "/", live: false },
  { key: "keyblades", href: "/", live: false },
] as const;

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  setRequestLocale(locale);
  const t = await getTranslations("Home");
  const tn = await getTranslations("Nav");

  const released = games.filter((g) => g.status === "released" && g.kind !== "collection");
  const platforms = new Set(games.flatMap((g) => g.platforms.map((p) => p.replace(/ \(.*\)/, ""))));
  const years = new Date().getFullYear() - 2002;

  return (
    <>
      <section className="hero relative overflow-hidden border-b border-line">
        <div className="stars absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-[1.2fr_1fr] md:items-center md:py-24">
          <div>
            <p className="eyebrow">{t("eyebrow")}</p>
            <h1 className="mt-3 text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
              Kingdom Hearts <span className="text-accent">Univers</span>
            </h1>
            <p className="prose-max mt-6 text-lg text-text-2">{t("lead")}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/jeux"
                className="rounded-full bg-accent px-6 py-3 font-bold text-accent-contrast shadow-card transition-transform hover:-translate-y-0.5"
              >
                {t("ctaGames")}
              </Link>
              <Link
                href="/chronologie"
                className="rounded-full border-2 border-line bg-surface px-6 py-3 font-bold text-text transition-colors hover:border-accent"
              >
                {t("ctaTimeline")}
              </Link>
            </div>
          </div>
          <figure className="relative mx-auto max-w-sm">
            <Emblem className="mx-auto h-40 w-40 text-accent drop-shadow-[0_0_40px_var(--glow)] md:h-56 md:w-56" />
            <blockquote className="mt-6 text-center font-display text-lg text-text">
              <p>{t("quote")}</p>
              <footer className="mt-2 text-sm text-text-2">— {t("quoteAuthor")}</footer>
            </blockquote>
          </figure>
        </div>
      </section>

      <section aria-labelledby="stats" className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 id="stats" className="sr-only">{t("statsTitle")}</h2>
        <dl className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            [released.length, t("stats.games")],
            [years, t("stats.years")],
            [platforms.size, t("stats.platforms")],
            [locales.length, t("stats.languages")],
          ].map(([n, label]) => (
            <div key={label} className="rounded-xl border border-line bg-surface px-5 py-4">
              <dd className="tabular font-display text-3xl font-bold text-accent">{n}</dd>
              <dt className="text-sm text-text-2">{label}</dt>
            </div>
          ))}
        </dl>
      </section>

      <section aria-labelledby="explore" className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <h2 id="explore" className="text-2xl font-bold sm:text-3xl">{t("sectionsTitle")}</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((s) => (
            <li key={s.key} className={`card ${s.live ? "card-link" : "opacity-80"}`}>
              {s.live ? (
                <Link href={s.href} className="block h-full p-5">
                  <h3 className="text-lg font-bold">{t(`sections.${s.key}.title`)}</h3>
                  <p className="mt-1.5 text-sm text-text-2">{t(`sections.${s.key}.desc`)}</p>
                </Link>
              ) : (
                <div className="p-5">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-lg font-bold">{t(`sections.${s.key}.title`)}</h3>
                    <span className="rounded-full border border-line px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider text-text-2">
                      {tn("comingSoon")}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm text-text-2">{t(`sections.${s.key}.desc`)}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="latest" className="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
        <div className="card flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="eyebrow">{t("latestTitle")}</p>
            <h2 id="latest" className="mt-1 text-2xl font-bold">Kingdom Hearts IV</h2>
            <p className="prose-max mt-2 text-text-2">{t("latestDesc")}</p>
          </div>
          <Link
            href="/jeux/kingdom-hearts-iv"
            className="shrink-0 rounded-full border-2 border-accent px-5 py-2.5 font-bold text-accent hover:bg-accent hover:text-accent-contrast"
          >
            {tn("games")} →
          </Link>
        </div>
      </section>
    </>
  );
}
