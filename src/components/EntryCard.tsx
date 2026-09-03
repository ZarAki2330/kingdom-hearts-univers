import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { CATEGORY_SLUG, displayName, localized, type Entry } from "@/data/encyclopedia";
import { EntryPortrait } from "./EntryPortrait";

export function EntryCard({ entry, kindLabel }: { entry: Entry; kindLabel: string }) {
  const locale = useLocale() as Locale;
  return (
    <li className="card card-link">
      <Link href={`/encyclopedie/${CATEGORY_SLUG[entry.category]}/${entry.slug}`} className="flex h-full items-center gap-4 p-3">
        <EntryPortrait entry={entry} className="h-16 w-16 shrink-0" />
        <div className="min-w-0">
          <span className="eyebrow">{kindLabel}</span>
          <h3 className="text-base font-bold leading-tight">{displayName(entry, locale)}</h3>
          <p className="mt-0.5 line-clamp-2 text-sm text-text-2">{localized(entry.tagline, locale)}</p>
        </div>
      </Link>
    </li>
  );
}
