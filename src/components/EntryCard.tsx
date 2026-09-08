import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { CATEGORY_SLUG, displayName, localized, type Entry } from "@/data/encyclopedia";
import { EntryPortrait } from "./EntryPortrait";

export function EntryCard({ entry, kindLabel }: { entry: Entry; kindLabel: string }) {
  const locale = useLocale() as Locale;
  // Sur la carte on affiche la forme courte du titre quand elle existe : un titre long
  // (« Pirates des Caraïbes : La Malédiction du Black Pearl ») passait à la ligne et
  // agrandissait la carte, créant un décalage dans la grille.
  const src = entry.category === "characters" ? entry.source : undefined;
  const source = src ? (src.short ? (locale === "fr" ? src.short.fr : src.short.en) : locale === "fr" ? src.fr : src.en) : undefined;
  const sourceFull = src ? (locale === "fr" ? src.fr : src.en) : undefined;
  return (
    <li className="card card-link">
      <Link href={`/encyclopedie/${CATEGORY_SLUG[entry.category]}/${entry.slug}`} className="flex h-full items-center gap-4 p-3">
        <EntryPortrait entry={entry} className="h-16 w-16 shrink-0" />
        <div className="min-w-0">
          <span className="eyebrow flex min-w-0 items-baseline gap-1">
            <span className="shrink-0">{kindLabel}</span>
            {source && (
              <span className="min-w-0 truncate normal-case tracking-normal text-text-2" title={sourceFull}>
                · {source}
              </span>
            )}
          </span>
          <h3 className="text-base font-bold leading-tight">{displayName(entry, locale)}</h3>
          <p className="mt-0.5 line-clamp-2 text-sm text-text-2">{localized(entry.tagline, locale)}</p>
        </div>
      </Link>
    </li>
  );
}
