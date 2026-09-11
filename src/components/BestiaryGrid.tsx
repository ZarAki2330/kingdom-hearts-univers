import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { localized } from "@/data/games";
import { CATEGORY_SLUG, displayName, getEntry, kindClass } from "@/data/encyclopedia";
import type { WalkBeastGroup } from "@/data/walkthrough";
import { EntryPortrait } from "./EntryPortrait";
import { RichText } from "./WalkthroughBits";

export type BeastLabels = {
  hp: string;
  atk: string;
  def: string;
  exp: string;
  worlds: string;
};

/**
 * Une fiche de bestiaire : le portrait, les caractéristiques, les mondes, et le lien vers
 * la fiche encyclopédique complète. La carte entière est cliquable, comme dans
 * l'encyclopédie — c'est la même promesse, et donc le même geste.
 */
function BeastCard({
  beast,
  locale,
  labels,
}: {
  beast: WalkBeastGroup["beasts"][number];
  locale: Locale;
  labels: BeastLabels;
}) {
  const entry = getEntry(beast.entry);
  // Une fiche absente ne doit pas faire tomber la page : on n'affiche simplement rien.
  if (!entry) return null;
  const name = displayName(entry, locale);
  const stats: [string, string][] = [
    [labels.hp, beast.hp],
    [labels.atk, beast.atk],
    [labels.def, beast.def],
    [labels.exp, beast.exp],
  ];

  return (
    <li className={`card card-link kind-edge ${kindClass(entry)}`}>
      <Link
        href={`/encyclopedie/${CATEGORY_SLUG[entry.category]}/${entry.slug}`}
        className="flex h-full flex-col gap-3 p-4"
      >
        {/* L'en-tête garde une hauteur fixe : c'est ce qui aligne les tableaux de
            caractéristiques d'une carte à l'autre, et donc ce qui les rend comparables.
            La liste des mondes, elle, va de deux à huit entrées : elle passe en dessous. */}
        <div className="flex h-14 items-center gap-3">
          <EntryPortrait entry={entry} className="h-14 w-14 shrink-0" sizes="56px" />
          <h3 className="min-w-0 text-base font-bold leading-tight">{name}</h3>
        </div>

        <dl className="grid grid-cols-4 gap-px overflow-hidden rounded-lg border border-line bg-line text-center">
          {stats.map(([label, value]) => (
            <div key={label} className="bg-bg-2 px-1 py-1.5">
              <dt className="text-[0.65rem] font-bold uppercase tracking-wider text-text-2">{label}</dt>
              <dd className="tabular whitespace-nowrap text-[0.8125rem] font-semibold">{value}</dd>
            </div>
          ))}
        </dl>

        {beast.note && (
          <p className="text-sm leading-relaxed text-text-2">
            <RichText text={localized(beast.note, locale)} />
          </p>
        )}

        <p className="mt-auto text-xs leading-relaxed text-text-2">
          <span className="font-semibold">{labels.worlds} </span>
          {localized(beast.worlds, locale)}
        </p>
      </Link>
    </li>
  );
}

/** Le bestiaire d'une quête : un groupe de fiches par famille ou par milieu. */
export function BestiaryGrid({
  groups,
  locale,
  labels,
}: {
  groups: WalkBeastGroup[];
  locale: Locale;
  labels: BeastLabels;
}) {
  return (
    <>
      {groups.map((g) => (
        <section key={g.id} id={g.id} aria-labelledby={`b-${g.id}`} className="mt-10 scroll-mt-24">
          <h2 id={`b-${g.id}`} className="text-2xl font-bold">
            {localized(g.title, locale)}
          </h2>
          {g.intro && <p className="mt-2 text-text-2">{localized(g.intro, locale)}</p>}
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {g.beasts.map((b) => (
              <BeastCard key={b.entry} beast={b} locale={locale} labels={labels} />
            ))}
          </ul>
        </section>
      ))}
    </>
  );
}
