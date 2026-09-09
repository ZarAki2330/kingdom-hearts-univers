import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Emblem } from "./Emblem";

export function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer className="mt-16 border-t border-line bg-bg-2">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:px-6 md:grid-cols-[1fr_auto]">
        <div className="flex gap-3">
          <Emblem className="h-7 w-7 shrink-0 text-accent" />
          <div className="prose-max text-sm text-text-2">
            <p>{t("about")}</p>
            <p className="mt-2">{t("images")}</p>
          </div>
        </div>
        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
          <li>
            <Link href="/a-propos" className="text-text-2 transition-colors hover:text-accent">
              {t("legal")}
            </Link>
          </li>
          <li>
            <Link href="/a-propos#sources" className="text-text-2 transition-colors hover:text-accent">
              {t("sources")}
            </Link>
          </li>
          {/* Lien Accessibilité masqué à la demande d'Adam : la page /accessibilite reste
              en ligne et atteignable par son adresse, elle n'est simplement plus listée ici. */}
        </ul>
      </div>
    </footer>
  );
}
