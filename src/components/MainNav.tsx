"use client";
import type React from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";

const items = [
  { href: "/jeux", key: "games" },
  { href: "/chronologie", key: "timeline" },
  { href: "/encyclopedie", key: "encyclopedia" },
] as const;

const soon = ["story", "guides"] as const;

export function MainNav({ extras }: { extras?: React.ReactNode } = {}) {
  const t = useTranslations("Nav");
  const pathname = usePathname();
  const list = (
      <ul className="flex flex-col gap-1 md:flex-row md:items-center">
        {items.map((it) => {
          const active = pathname === it.href || pathname.startsWith(it.href + "/");
          return (
            <li key={it.key}>
              <Link
                href={it.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-md px-3 py-2 text-sm font-semibold transition-colors hover:bg-surface-2 ${
                  active ? "text-accent underline decoration-2 underline-offset-8" : "text-text"
                }`}
              >
                {t(it.key)}
              </Link>
            </li>
          );
        })}
        {soon.map((k) => (
          <li key={k}>
            <span
              className="cursor-not-allowed rounded-md px-3 py-2 text-sm font-semibold text-text-2"
              aria-disabled="true"
              title={t("comingSoon")}
            >
              {t(k)}
              <span className="ml-1.5 rounded-full border border-line px-1.5 py-0.5 text-[10px] uppercase tracking-wider">
                {t("comingSoon")}
              </span>
            </span>
          </li>
        ))}
      </ul>
  );

  return (
    <>
      <nav aria-label={t("menu")} className="hidden md:block">
        {list}
      </nav>
      <details className="relative md:hidden">
        <summary
          className="flex list-none cursor-pointer items-center gap-2 rounded-md border border-line bg-surface px-2.5 py-1.5 text-sm font-semibold [&::-webkit-details-marker]:hidden"
          aria-label={t("menu")}
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
          <span className="sr-only">{t("menu")}</span>
        </summary>
        <nav aria-label={t("menu")} className="card absolute left-0 top-full z-50 mt-2 w-64 p-2">
          {list}
          {extras && <div className="mt-2 border-t border-line pt-2">{extras}</div>}
        </nav>
      </details>
    </>
  );
}
