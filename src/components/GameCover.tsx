import Image from "next/image";
import type { Game } from "@/data/games";

/**
 * Visuel d'un jeu.
 * - `logo` (par défaut) : logo officiel sur fond dégradé à la couleur du jeu, format paysage (comme khdestiny.fr).
 * - `box` : jaquette officielle (visuel secondaire des fiches), affichée entière.
 * - Sans visuel disponible : carte générée (dégradé + titre court, décorative).
 * Les images officielles sont créditées — voir docs/IMAGES.md.
 */
export function GameCover({
  game,
  className = "",
  sizes = "220px",
  priority = false,
  variant = "logo",
}: {
  game: Game;
  className?: string;
  sizes?: string;
  priority?: boolean;
  variant?: "logo" | "box";
}) {
  // Fond du jeu : la couleur du titre sert de halo lumineux au-dessus d'une base sombre commune,
  // pour que les logos officiels (souvent argentés ou blancs) restent lisibles sur tous les jeux.
  const base = "#070b16";
  const halo = `color-mix(in oklab, ${game.accent} 82%, white 10%)`;
  const mid = `color-mix(in oklab, ${game.accent} 62%, ${base})`;
  const deep = `color-mix(in oklab, ${game.accent} 40%, ${base})`;
  // La couleur vit dans les angles, le centre reste sombre : c'est là que se pose le logo.
  const bg = [
    `radial-gradient(105% 85% at 8% -5%, ${halo} 0%, transparent 58%)`,
    `radial-gradient(95% 80% at 95% 105%, ${mid} 0%, transparent 62%)`,
    `linear-gradient(162deg, ${mid} 0%, ${deep} 55%, ${base} 100%)`,
  ].join(", ");
  const image = variant === "box" ? game.cover : game.logo;

  if (image) {
    const portrait = variant === "box" && image.height / image.width > 1.2;
    return (
      <div className={`relative overflow-hidden rounded-xl ${className}`} style={{ background: bg }}>
        <div className="stars absolute inset-0" aria-hidden="true" />
        <div className="cover-vignette absolute inset-0" aria-hidden="true" />
        <Image
          src={image.src}
          alt={variant === "box" ? `Jaquette de ${game.title}` : `Logo de ${game.title}`}
          fill
          sizes={sizes}
          priority={priority}
          className={portrait ? "object-cover" : "object-contain p-[7%]"}
        />
      </div>
    );
  }
  return (
    <div
      aria-hidden="true"
      className={`relative flex items-center justify-center overflow-hidden rounded-xl ${className}`}
      style={{ containerType: "inline-size", background: bg }}
    >
      <div className="stars absolute inset-0" />
      <div className="cover-vignette absolute inset-0" />
      <span
        className="relative px-3 text-center font-display font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,.6)]"
        style={{ fontSize: game.shortTitle.length > 6 ? "clamp(0.5rem, 12cqw, 1.25rem)" : "clamp(0.6rem, 22cqw, 2.25rem)" }}
      >
        {game.shortTitle}
      </span>
    </div>
  );
}
