import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { Emblem } from "./Emblem";
import { SkipLink } from "./SkipLink";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { MainNav } from "./MainNav";
import { stories } from "@/data/story";
import { getGame } from "@/data/games";
import { SearchPalette } from "./SearchPalette";

export function Header({ locale }: { locale: Locale }) {
  const t = useTranslations("Nav");
  // Sous-menu Histoire : les jeux dont le résumé est publié, dans l'ordre chronologique interne.
  const storyItems = stories
    .map((s) => getGame(s.game))
    .filter((g) => g !== undefined)
    .sort((a, b) => (a.chronoOrder ?? 0) - (b.chronoOrder ?? 0))
    .map((g) => ({ href: `/histoire/${g.slug}`, label: g.title }));
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur supports-[backdrop-filter]:bg-bg/70">
      <SkipLink />
      {/* flex-wrap : aux grandes tailles de texte, le bloc de droite passe à la ligne au lieu de déborder. */}
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3 px-3 py-3 sm:gap-4 sm:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-2.5 text-accent" aria-label={t("home")}>
          <Emblem className="h-9 w-9" />
          <span className="flex flex-col whitespace-nowrap font-display font-bold leading-none">
            <span className="text-[0.85rem] tracking-[0.04em] text-text sm:text-[0.95rem]">Kingdom Hearts</span>
            <span className="mt-1 text-[0.7rem] uppercase tracking-[0.32em] text-accent">Univers</span>
          </span>
        </Link>
        <MainNav extras={<ThemeSwitcher />} storyItems={storyItems} />
        <div className="ml-auto flex items-center gap-1.5 sm:gap-2">
          <SearchPalette />
          <div className="hidden sm:block">
            <ThemeSwitcher />
          </div>
          <LocaleSwitcher current={locale} />
        </div>
      </div>
    </header>
  );
}
