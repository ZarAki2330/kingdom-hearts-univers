import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { releaseYear, type Game } from "@/data/games";
import { GameCover } from "./GameCover";

/** `priority` : réservé aux premières cartes de la liste, celles visibles d'emblée. */
export function GameCard({ game, priority = false }: { game: Game; priority?: boolean }) {
  const t = useTranslations("Games");
  const year = releaseYear(game);
  return (
    <li className="card card-link">
      <Link href={`/jeux/${game.slug}`} className="flex h-full flex-col gap-3 p-3">
        <GameCover game={game} className="aspect-[16/10] w-full" sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 90vw" priority={priority} />
        <div className="flex min-w-0 flex-col gap-1.5 py-1">
          <span className="eyebrow">{t(`kind.${game.kind}`)}</span>
          <h3 className="text-base font-bold leading-tight">{game.title}</h3>
          <p className="tabular text-sm text-text-2">
            {game.status === "upcoming" ? t("tba") : game.status === "cancelled" ? t("cancelled") : year}
            {game.mainStoryHours ? ` · ${t("hours", { hours: `≈ ${game.mainStoryHours}` })}` : ""}
          </p>
          <p className="mt-auto truncate text-xs text-text-2">{game.platforms.join(" · ")}</p>
        </div>
      </Link>
    </li>
  );
}
