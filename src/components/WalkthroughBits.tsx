import Image from "next/image";
import type { Locale } from "@/i18n/routing";
import { localized } from "@/data/games";
import { tileImage } from "@/data/walkthrough";
import type { Linker } from "@/lib/autolink";
import type { CollectibleKind, WalkBoss, WalkCollectible, WalkTable } from "@/data/walkthrough";
import { ImageZoom } from "@/components/ImageZoom";

/** Paragraphes d'un texte de données : séparés par une ligne vide. */
export function paragraphs(text: string) {
  return text.split(/\n\n+/);
}

/**
 * Un bloc de texte de soluce : soit une liste, soit un paragraphe. Un bloc dont toutes les
 * lignes commencent par un tiret devient une liste à puces — c'est plus lisible qu'une
 * énumération noyée dans une phrase, et c'est le seul cas où les données passent à la ligne.
 */
export function TextBlock({ text, link, className = "" }: { text: string; link?: Linker; className?: string }) {
  const lines = text.split("\n");
  const isList = lines.length > 1 && lines.every((l) => l.trim().startsWith("- "));
  if (isList) {
    return (
      <ul className={`ml-5 list-disc space-y-1.5 ${className}`}>
        {lines.map((l, i) => (
          <li key={i} className="leading-relaxed">
            <RichText text={l.trim().slice(2)} link={link} />
          </li>
        ))}
      </ul>
    );
  }
  return (
    <p className={`leading-relaxed ${className}`}>
      <RichText text={text} link={link} />
    </p>
  );
}

/**
 * Un paragraphe de soluce. Le seul enrichissement admis dans les données est le gras,
 * écrit **comme ceci** : il sert à faire ressortir ce qu'il ne faut pas rater dans un
 * pas-à-pas (un objet, une capacité, un geste obligatoire). Tout le reste est du texte.
 */
export function RichText({ text, link }: { text: string; link?: Linker }) {
  return (
    <>
      {text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i}>{link ? link(part, `b-${i}`) : part}</strong>
        ) : (
          <span key={i}>{link ? link(part, `t-${i}`) : part}</span>
        ),
      )}
    </>
  );
}

/**
 * Pictogrammes des éléments à ramasser. Ils doublent une étiquette écrite : ils ne portent
 * jamais l'information seuls, et restent donc décoratifs pour un lecteur d'écran.
 */
const ICONS: Record<CollectibleKind, string> = {
  chest: "M3 8h18v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8Zm0 0 2.4-4h13.2L21 8M12 8v12M9 12h6",
  trinity: "M12 3a4 4 0 1 1-3.4 6.1M12 3a4 4 0 1 0 3.4 6.1M8.6 9.1A4 4 0 1 0 15.4 9.1M12 3v0",
  puppies: "M5 10c0-3 3-5 7-5s7 2 7 5-3 6-7 6-7-3-7-6Zm3-4L6 3m10 3 2-3M9 11h.01M15 11h.01M12 14c-1 0-1.5-.5-1.5-.5",
  minigame: "M7 12h4m-2-2v4m5-1h.01M17 11h.01M4 8h16v8H4z",
  ability: "m12 3 2.5 5.5L20 11l-5.5 2.5L12 19l-2.5-5.5L4 11l5.5-2.5L12 3Z",
  keyblade: "M4 20 14 10m0 0 3-3m-3 3-2-2m8-4a2.5 2.5 0 1 0-3.5 3.5M6 18h2v2",
  journal: "M5 4h11a2 2 0 0 1 2 2v14H7a2 2 0 0 1-2-2V4Zm3 4h7M8 12h7",
  synthesis: "M12 3v4m0 10v4M3 12h4m10 0h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18",
  report: "M6 3h9l3 3v15H6V3Zm3 6h7M9 13h7M9 17h4",
};

function Icon({ kind }: { kind: CollectibleKind }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-accent" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d={ICONS[kind]} />
    </svg>
  );
}

/** Un combat : niveau conseillé, stratégie, puis les attaques à connaître. */
export function BossCard({
  boss,
  locale,
  labels,
  link,
}: {
  boss: WalkBoss;
  locale: Locale;
  labels: { level: string; reward: string; attacks: string };
  link?: Linker;
}) {
  // Le visuel du combat, ou à défaut l'illustration de la fiche de l'ennemi.
  const visual = tileImage(boss);

  return (
    <section aria-labelledby={`boss-${boss.id}`} className="card kind-edge k-heartless mt-6 p-5 sm:p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 id={`boss-${boss.id}`} className="text-xl font-bold">
          {localized(boss.name, locale)}
        </h3>
        {boss.level && (
          <p className="text-sm text-text-2">
            {labels.level} <span className="tabular font-semibold text-text">{boss.level}</span>
          </p>
        )}
      </div>

      <div className="mt-3 after:clear-both after:block after:content-['']">
        {visual && (
          <figure className="mb-3 sm:float-right sm:ml-6 sm:w-[200px]">
            <ImageZoom
              src={visual.src}
              alt={localized(boss.name, locale)}
              width={visual.width}
              height={visual.height}
              credit={visual.credit}
              className="w-full"
            >
              <span className="relative block aspect-[4/3] overflow-hidden rounded-lg border border-line bg-[#0b1020]">
                <Image src={visual.src} alt="" fill sizes="200px" className="object-contain p-2" />
              </span>
            </ImageZoom>
            <figcaption className="mt-1.5 text-xs text-text-2">{visual.credit}</figcaption>
          </figure>
        )}

        {paragraphs(localized(boss.tactics, locale)).map((p, i) => (
          <TextBlock key={i} text={p} link={link} className="mt-3 first:mt-0" />
        ))}

        {boss.attacks && boss.attacks.length > 0 && (
          <>
            <h4 className="mt-5 text-sm font-bold uppercase tracking-wider text-text-2">{labels.attacks}</h4>
            <dl className="mt-2 space-y-2">
              {boss.attacks.map((a, i) => (
                <div key={i}>
                  <dt className="inline font-semibold">{localized(a.name, locale)} — </dt>
                  <dd className="inline text-text-2">{localized(a.note, locale)}</dd>
                </div>
              ))}
            </dl>
          </>
        )}
      </div>

      {boss.reward && (
        <p className="mt-4 text-sm text-text-2">
          <span className="font-semibold text-text">{labels.reward} </span>
          {localized(boss.reward, locale)}
        </p>
      )}
    </section>
  );
}

/** La liste de ce qu'il y a à ramasser dans une section. */
export function CollectibleList({
  items,
  locale,
  requiresLabel,
}: {
  items: WalkCollectible[];
  locale: Locale;
  requiresLabel: string;
}) {
  return (
    <ul className="mt-4 grid gap-3 sm:grid-cols-2">
      {items.map((c, i) => (
        <li key={i} className="card flex gap-3 p-4">
          <Icon kind={c.kind} />
          <div className="min-w-0">
            <p className="font-semibold">{localized(c.label, locale)}</p>
            <p className="mt-1 text-sm text-text-2">{localized(c.where, locale)}</p>
            {c.requires && (
              <p className="mt-1 text-sm text-text-2">
                <span className="font-semibold">{requiresLabel} </span>
                {localized(c.requires, locale)}
              </p>
            )}
            {c.note && <p className="mt-1 text-sm italic text-text-2">{localized(c.note, locale)}</p>}
          </div>
        </li>
      ))}
    </ul>
  );
}

/**
 * Un tableau de soluce avec son titre et son chapeau. Les longues listes de référence
 * (l'inventaire, le bestiaire) sont marquées `collapsed` et arrivent repliées : une page
 * qui aligne cinq tableaux de trente lignes devient autrement impraticable, il faut faire
 * défiler des centaines de lignes pour atteindre le tableau suivant. Le volet est un
 * `<details>` natif : il s'ouvre sans JavaScript, et la recherche du navigateur le déplie.
 */
export function WalkTableBlock({
  table,
  locale,
  labels,
}: {
  table: WalkTable;
  locale: Locale;
  labels: { world: string; what: string; where: string; requires: string };
}) {
  const title = localized(table.title, locale);
  const intro = table.intro ? <p className="mt-2 text-text-2">{localized(table.intro, locale)}</p> : null;

  if (table.collapsed) {
    return (
      <details className="group mt-6 rounded-xl border border-line bg-bg-2/40 px-4 py-3 sm:px-5">
        <summary className="-mx-1 cursor-pointer list-none px-1 py-1 marker:content-none [&::-webkit-details-marker]:hidden">
          <span className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="grid h-6 w-6 shrink-0 place-items-center rounded-md border border-line text-accent transition-transform"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M5 12h14" className="group-open:hidden" />
                <path d="M5 12h14" className="hidden group-open:block" />
              </svg>
            </span>
            <h2 id={`t-${table.id}`} className="text-2xl font-bold">
              {title}
            </h2>
          </span>
        </summary>
        <div className="pb-2">
          {intro}
          <WalkDataTable table={table} locale={locale} labels={labels} />
        </div>
      </details>
    );
  }

  // Pas de <section> ici : le tableau défilant porte déjà un repère nommé par ce titre,
  // et deux repères de même nom se gênent au lecteur d'écran.
  return (
    <div className="mt-12">
      <h2 id={`t-${table.id}`} className="text-2xl font-bold">
        {title}
      </h2>
      {intro}
      <WalkDataTable table={table} locale={locale} labels={labels} />
    </div>
  );
}

/**
 * Tableau à trois colonnes des soluces. Les filets verticaux et les lignes alternées
 * viennent d'un constat : ces tableaux comptent parfois trente lignes, et sans repères
 * l'œil saute d'une ligne à l'autre. Le tableau défile seul quand la fenêtre est étroite.
 */
export function WalkDataTable({
  table,
  locale,
  labels,
}: {
  table: WalkTable;
  locale: Locale;
  labels: { world: string; what: string; where: string; requires: string };
}) {
  const headers = table.columns
    ? table.columns.map((c) => localized(c, locale))
    : [labels.world, labels.what, labels.where];
  // Les tableaux d'emplacements ont une première colonne courte (un nom de monde) ; les
  // tableaux sur mesure, eux, y mettent des phrases : on leur laisse plus de place.
  const w1 = table.columns ? "w-44" : "w-36";
  const w2 = table.columns ? "w-56" : "w-40";

  return (
    <div role="region" aria-labelledby={`t-${table.id}`} tabIndex={0} className="mt-4 overflow-x-auto">
      <table className="w-full min-w-[40rem] border-collapse overflow-hidden rounded-lg border border-line text-sm">
        <thead>
          <tr className="bg-bg-2 text-left">
            <th scope="col" className={`${w1} border-b border-r border-line px-3 py-2 font-bold`}>
              {headers[0]}
            </th>
            <th scope="col" className={`${w2} border-b border-r border-line px-3 py-2 font-bold`}>
              {headers[1]}
            </th>
            <th scope="col" className="border-b border-line px-3 py-2 font-bold">
              {headers[2]}
            </th>
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, i) => (
            <tr key={i} className={`align-top ${i % 2 === 1 ? "bg-bg-2/50" : ""}`}>
              <td className="border-b border-r border-line px-3 py-2 font-semibold">{localized(row.world, locale)}</td>
              <td className="border-b border-r border-line px-3 py-2">{localized(row.what, locale)}</td>
              <td className="border-b border-line px-3 py-2 text-text-2">
                {localized(row.where, locale)}
                {row.requires && (
                  <span className="mt-1 block text-xs">
                    <span className="font-semibold">{labels.requires} </span>
                    {localized(row.requires, locale)}
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
