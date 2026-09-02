"use client";
import { useTranslations } from "next-intl";

export function SkipLink() {
  const t = useTranslations("Nav");
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:font-bold focus:text-accent-contrast"
    >
      {t("skip")}
    </a>
  );
}
