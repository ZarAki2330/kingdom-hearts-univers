"use client";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { locales, localeNames, type Locale } from "@/i18n/routing";
import { Flag } from "./Flag";

/**
 * Sélecteur de langue : bouton + menu de liens réels (fonctionne sans JavaScript côté navigation,
 * chaque entrée pointe vers la même page dans l'autre langue). Drapeau + nom de la langue,
 * la langue courante est signalée par aria-current.
 */
export function LocaleSwitcher({ current }: { current: Locale }) {
  const t = useTranslations("Nav");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const box = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onDown(e: MouseEvent) {
      if (!box.current?.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        box.current?.querySelector("button")?.focus();
      }
    }
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={box} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="menu"
        className="flex min-h-9 items-center gap-2 rounded-md border border-line bg-surface px-2.5 py-1.5 text-sm font-semibold text-text transition-colors hover:border-accent"
      >
        <Flag locale={current} />
        <span className="hidden sm:inline">{localeNames[current]}</span>
        <span className="sr-only sm:hidden">{t("language")}</span>
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-3.5 w-3.5 text-text-2" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {open && (
        <ul role="menu" aria-label={t("language")} className="card absolute right-0 top-full z-50 mt-2 w-44 p-1.5">
          {locales.map((l) => (
            <li key={l} role="none">
              <Link
                role="menuitem"
                href={pathname}
                locale={l}
                lang={l}
                hrefLang={l}
                aria-current={l === current ? "true" : undefined}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-2.5 rounded-md px-2.5 py-2 text-sm font-semibold transition-colors hover:bg-surface-2 ${
                  l === current ? "text-accent" : "text-text"
                }`}
              >
                <Flag locale={l} />
                {localeNames[l]}
                {l === current && (
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="ml-auto h-4 w-4" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
