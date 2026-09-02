import Image from "next/image";
import type { Game } from "@/data/games";

/**
 * Jaquette d'un jeu.
 * - Si `game.cover` est renseignée (visuel officiel, crédité — voir docs/IMAGES.md), on l'affiche via next/image.
 *   Les visuels n'ont pas tous le même ratio (boîtes DS/3DS, logos) : l'image est affichée entière sur un fond
 *   à la couleur du jeu, pour que la carte garde le même format partout.
 * - Sinon, jaquette générée : dégradé à la couleur du jeu + titre court (décorative, aria-hidden).
 */
export function GameCover({
  game,
  className = "",
  sizes = "220px",
  priority = false,
}: {
  game: Game;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const bg = `radial-gradient(120% 90% at 20% 0%, ${game.accent} 0%, transparent 60%), linear-gradient(160deg, ${game.accent}cc, #0b1020 95%)`;

  if (game.cover) {
    const portrait = game.cover.height / game.cover.width > 1.2;
    return (
      <div className={`relative overflow-hidden rounded-xl ${className}`} style={{ background: bg }}>
        <Image
          src={game.cover.src}
          alt={`Jaquette de ${game.title}`}
          fill
          sizes={sizes}
          priority={priority}
          className={portrait ? "object-cover" : "object-contain p-[6%]"}
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
        style={{ fontSize: game.shortTitle.length > 6 ? "clamp(0.5rem, 16cqw, 1.25rem)" : "clamp(0.6rem, 30cqw, 2.25rem)" }}
      >
        {game.shortTitle}
      </span>
    </div>
  );
}
