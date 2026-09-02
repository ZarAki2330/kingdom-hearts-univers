import type { Game } from "@/data/games";

/**
 * Jaquette générée : dégradé à la couleur du jeu + titre court.
 * Sera remplacée par les visuels officiels une fois les droits vérifiés.
 */
export function GameCover({ game, className = "" }: { game: Game; className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`relative flex items-center justify-center overflow-hidden rounded-xl ${className}`}
      style={{
        containerType: "inline-size",
        background: `radial-gradient(120% 90% at 20% 0%, ${game.accent} 0%, transparent 60%), linear-gradient(160deg, ${game.accent}cc, #0b1020 95%)`,
      }}
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
