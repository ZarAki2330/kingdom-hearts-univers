import Image from "next/image";
import { Link } from "@/i18n/navigation";
import type { WalkImage } from "@/data/walkthrough";

/**
 * Tuile illustrée d'une section ou d'une quête. Le visuel est posé sur un fond sombre et
 * affiché entier (object-contain) : les illustrations du site n'ont pas toutes le même
 * cadrage, et un recadrage automatique couperait des visages. Une tuile « à venir » garde
 * son image mais perd son lien, en teinte atténuée.
 */
export function WalkTile({
  href,
  title,
  subtitle,
  image,
  soon,
  soonLabel,
  index,
  accent,
}: {
  href?: string;
  title: string;
  subtitle?: string;
  image?: WalkImage;
  soon?: boolean;
  soonLabel?: string;
  index?: number;
  accent?: string;
}) {
  // Même principe que les cartes de jeux : la couleur vit dans les angles, le centre reste
  // sombre pour que les rendus détourés (souvent clairs) restent lisibles.
  const background = accent
    ? `radial-gradient(120% 100% at 50% 120%, color-mix(in oklab, ${accent} 55%, #070b16) 0%, #070b16 70%)`
    : "linear-gradient(160deg, #131a2c 0%, #070b16 70%)";
  const visual = (
    <span
      className="relative block aspect-[4/3] overflow-hidden rounded-lg border border-line"
      style={{ background }}
    >
      {image ? (
        <Image
          src={image.src}
          alt=""
          fill
          sizes="(min-width: 1024px) 220px, (min-width: 640px) 30vw, 45vw"
          className={`object-contain p-2 ${soon ? "opacity-45 saturate-50" : ""}`}
        />
      ) : (
        <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-accent/25 to-transparent" />
      )}
      {soon && soonLabel && (
        <span className="absolute bottom-1.5 left-1.5 rounded-full border border-line bg-surface/90 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-text-2">
          {soonLabel}
        </span>
      )}
    </span>
  );

  const label = (
    <span className="mt-2 block">
      <span className={`block text-sm font-bold leading-tight ${soon ? "text-text-2" : "text-accent"}`}>
        {index !== undefined && <span className="tabular mr-1 text-text-2">{index}.</span>}
        {title}
      </span>
      {subtitle && <span className="mt-0.5 block text-xs text-text-2">{subtitle}</span>}
    </span>
  );

  if (soon || !href) {
    return (
      <li className="block">
        {visual}
        {label}
      </li>
    );
  }
  return (
    <li>
      <Link href={href} className="group block rounded-lg focus-visible:outline-none">
        <span className="block transition-transform group-hover:-translate-y-0.5">{visual}</span>
        <span className="group-hover:underline">{label}</span>
      </Link>
    </li>
  );
}

/** La grille de tuiles : trois colonnes sur ordinateur, deux sur mobile. */
export function WalkTileGrid({ children }: { children: React.ReactNode }) {
  return <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 lg:grid-cols-4">{children}</ul>;
}
