import { useTranslations } from "next-intl";
import { Emblem } from "./Emblem";

export function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer className="mt-16 border-t border-line bg-bg-2">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:px-6 md:grid-cols-[1fr_auto]">
        <div className="flex gap-3">
          <Emblem className="h-7 w-7 shrink-0 text-accent" />
          <p className="prose-max text-sm text-text-2">{t("about")}</p>
        </div>
        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
          <li>
            <a href="https://github.com/ZarAki2330/kingdom-hearts-univers" className="hover:text-accent">
              {t("github")}
            </a>
          </li>
          <li>
            <span className="text-text-2">{t("sources")}</span>
          </li>
          <li>
            <span className="text-text-2">{t("accessibility")}</span>
          </li>
        </ul>
      </div>
    </footer>
  );
}
