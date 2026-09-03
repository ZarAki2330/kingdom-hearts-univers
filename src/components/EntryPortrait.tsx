import Image from "next/image";
import { useLocale } from "next-intl";
import type { Locale } from "@/i18n/routing";
import { displayName, type Entry } from "@/data/encyclopedia";

/** Initiales pour le portrait généré : « Roi Mickey » → « RM », « Sora » → « S ». */
function initials(name: string) {
  const words = name.replace(/\(.*?\)/g, "").trim().split(/[\s,-]+/).filter(Boolean);
  return words.slice(0, 2).map((w) => w[0]!.toUpperCase()).join("");
}

type Props = {
  entry: Entry;
  className?: string;
  sizes?: string;
  /** `round` : médaillon (listes) ; `panel` : vignette carrée arrondie, image entière (fiche). */
  shape?: "round" | "panel";
  /** Vrai sur la fiche détaillée : l'image devient informative (alt = nom), sinon décorative (alt vide). */
  informative?: boolean;
};

/**
 * Portrait d'une entrée : image officielle si renseignée (voir docs/IMAGES.md),
 * sinon médaillon généré aux couleurs de l'entrée.
 * Personnages et ennemis (rendus en pied) sont cadrés sur le haut ; mondes et Keyblades affichés entiers.
 */
export function EntryPortrait({ entry, className = "", sizes = "96px", shape = "round", informative = false }: Props) {
  const locale = useLocale() as Locale;
  const label = displayName(entry, locale);
  const bg = `radial-gradient(120% 90% at 20% 0%, ${entry.accent} 0%, transparent 60%), linear-gradient(160deg, ${entry.accent}cc, #0b1020 95%)`;
  const radius = shape === "round" ? "rounded-full" : "rounded-2xl";
  if (entry.image) {
    const figure = entry.category === "characters" || entry.category === "enemies";
    const tall = entry.image.height > entry.image.width * 1.3;
    const fit = shape === "panel" || !figure ? "object-contain p-[6%]" : tall ? "object-cover object-top" : "object-cover";
    return (
      <div className={`relative overflow-hidden ${radius} ${className}`} style={{ background: bg }}>
        <div className="stars absolute inset-0" aria-hidden="true" />
        <Image src={entry.image.src} alt={informative ? label : ""} fill sizes={sizes} className={fit} />
      </div>
    );
  }
  return (
    <div
      aria-hidden="true"
      className={`relative flex items-center justify-center overflow-hidden ${radius} font-display font-bold text-white ${className}`}
      style={{ background: bg, containerType: "inline-size" }}
    >
      <div className="stars absolute inset-0" />
      <span className="relative drop-shadow-[0_2px_6px_rgba(0,0,0,.6)]" style={{ fontSize: "clamp(0.75rem, 38cqw, 3rem)" }}>
        {initials(label)}
      </span>
    </div>
  );
}
