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
  const bg = `radial-gradient(120% 90% at 20% 0%, ${game.accent} 0%, transparent 60%), linear-gradient(160deg, ${game.accent}cc, #0b1020 95%)`;
  const image = variant === "box" ? game.cover : game.logo;

  if (image) {
    const portrait = variant === "box" && image.height / image.width > 1.2;
    return (
      <div className={`relative overflow-hidden rounded-xl ${className}`} style={{ background: bg }}>
        <div className="stars absolute inset-0" aria-hidden="true" />
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
      <span
        className="relative px-3 text-center font-display font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,.6)]"
        style={{ fontSize: game.shortTitle.length > 6 ? "clamp(0.5rem, 12cqw, 1.25rem)" : "clamp(0.6rem, 22cqw, 2.25rem)" }}
      >
        {game.shortTitle}
      </span>
    </div>
  );
}
