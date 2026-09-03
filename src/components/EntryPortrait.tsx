import Image from "next/image";
import { useLocale } from "next-intl";
import type { Locale } from "@/i18n/routing";
import { displayName, type Entry } from "@/data/encyclopedia";

/** Initiales pour le portrait généré : « Roi Mickey » → « RM », « Sora » → « S ». */
function initials(name: string) {
  const words = name.replace(/\(.*?\)/g, "").trim().split(/[\s,-]+/).filter(Boolean);
  return words.slice(0, 2).map((w) => w[0]!.toUpperCase()).join("");
}

/**
 * Portrait d'une entrée : image officielle si renseignée (voir docs/IMAGES.md),
 * sinon médaillon généré aux couleurs de l'entrée.
 */
export function EntryPortrait({ entry, className = "", sizes = "96px" }: { entry: Entry; className?: string; sizes?: string }) {
  const locale = useLocale() as Locale;
  const label = displayName(entry, locale);
  const bg = `radial-gradient(120% 90% at 20% 0%, ${entry.accent} 0%, transparent 60%), linear-gradient(160deg, ${entry.accent}cc, #0b1020 95%)`;
  if (entry.image) {
    return (
      <div className={`relative overflow-hidden rounded-full ${className}`} style={{ background: bg }}>
        <Image src={entry.image.src} alt={label} fill sizes={sizes} className="object-cover" />
      </div>
    );
  }
  return (
    <div
      aria-hidden="true"
      className={`relative flex items-center justify-center overflow-hidden rounded-full font-display font-bold text-white ${className}`}
      style={{ background: bg, containerType: "inline-size" }}
    >
      <div className="stars absolute inset-0" />
      <span className="relative drop-shadow-[0_2px_6px_rgba(0,0,0,.6)]" style={{ fontSize: "clamp(0.75rem, 38cqw, 3rem)" }}>
        {initials(label)}
      </span>
    </div>
  );
}
