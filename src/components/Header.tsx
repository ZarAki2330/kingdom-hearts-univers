import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { Emblem } from "./Emblem";
import { SkipLink } from "./SkipLink";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { MainNav } from "./MainNav";

export function Header({ locale }: { locale: Locale }) {
  const t = useTranslations("Nav");
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur supports-[backdrop-filter]:bg-bg/70">
      <SkipLink />
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5 text-accent" aria-label={t("home")}>
          <Emblem className="h-8 w-8" />
          <span className="font-display text-lg font-bold tracking-wide text-text">
            Kingdom Hearts <span className="text-accent">Univers</span>
          </span>
        </Link>
        <MainNav />
        <div className="ml-auto flex items-center gap-2">
          <ThemeSwitcher />
          <LocaleSwitcher current={locale} />
        </div>
      </div>
    </header>
  );
}
