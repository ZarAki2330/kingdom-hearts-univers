import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { getGame, localized } from "@/data/games";
import { eventsByEra } from "@/data/timeline";
import { CATEGORY_SLUG, displayName, getEntry } from "@/data/encyclopedia";

/**
 * Frise des événements de l'univers, rendue côté serveur : les textes ne partent pas
 * dans le bundle du navigateur, et la frise reste lisible sans JavaScript.
 */
export async function EventsTimeline({ locale }: { locale: Locale }) {
  const t = await getTranslations("Timeline");
  const groups = eventsByEra();

  return (
    <div className="mt-8">
      <nav aria-labelledby="eras" className="card p-5">
        <h3 id="eras" className="eyebrow">
          {t("eras")}
        </h3>
        <ol className="mt-3 grid gap-x-8 gap-y-1.5 sm:grid-cols-2">
          {groups.map(({ era, events }, i) => (
            <li key={era.id} className="text-sm">
              <a href={`#${era.id}`} className="font-semibold hover:text-accent hover:underline">
                <span className="tabular text-text-2">{String(i + 1).padStart(2, "0")}. </span>
                {localized(era.title, locale)}
              </a>
              <span className="tabular ml-1.5 text-xs text-text-2">({events.length})</span>
            </li>
          ))}
        </ol>
      </nav>

      <div className="mt-10 space-y-12">
        {groups.map(({ era, events }) => (
          <section key={era.id} id={era.id} aria-labelledby={`era-${era.id}`} className="scroll-mt-24">
            <h3 id={`era-${era.id}`} className="font-display text-2xl font-bold text-accent">
              {localized(era.title, locale)}
            </h3>
            <p className="prose-max mt-2 text-text-2">{localized(era.summary, locale)}</p>

            <ol className="timeline mt-6 space-y-6">
              {events.map((ev) => {
                const game = ev.game ? getGame(ev.game) : undefined;
                const entries = (ev.entries ?? []).map(getEntry).filter((e) => e !== undefined);
                return (
                  <li key={ev.id} id={ev.id} className="relative scroll-mt-24">
                    <span className="timeline-dot" aria-hidden="true" />
                    <div className="card p-4">
                      {ev.when && <p className="eyebrow">{localized(ev.when, locale)}</p>}
                      <h4 className="mt-0.5 text-lg font-bold leading-tight">{localized(ev.title, locale)}</h4>
                      {localized(ev.text, locale)
                        .split(/\n\n+/)
                        .map((p, i) => (
                          <p key={i} className="prose-max mt-2 leading-relaxed">
                            {p}
                          </p>
                        ))}
                      <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-sm">
                        {game && (
                          <Link href={`/jeux/${game.slug}`} className="font-semibold text-accent hover:underline">
                            {game.title}
                          </Link>
                        )}
                        {entries.map((e) => (
                          <Link
                            key={e.slug}
                            href={`/encyclopedie/${CATEGORY_SLUG[e.category]}/${e.slug}`}
                            className="rounded-md border border-line px-2 py-0.5 text-xs font-semibold text-text-2 transition-colors hover:border-accent hover:text-accent"
                          >
                            {displayName(e, locale)}
                          </Link>
                        ))}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </section>
        ))}
      </div>
    </div>
  );
}
