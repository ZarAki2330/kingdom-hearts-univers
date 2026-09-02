import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { releaseYear, type Game } from "@/data/games";
import { GameCover } from "./GameCover";

export function GameCard({ game }: { game: Game }) {
  const t = useTranslations("Games");
  const year = releaseYear(game);
  return (
    <li className="card card-link">
      <Link href={`/jeux/${game.slug}`} className="flex h-full gap-4 p-3">
        <GameCover game={game} className="h-28 w-20 shrink-0" />
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
