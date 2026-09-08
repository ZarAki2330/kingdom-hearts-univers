"use client";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { CATEGORIES, CATEGORY_SLUG } from "@/data/encyclopedia";

const items = [
  { href: "/jeux", key: "games" },
  { href: "/chronologie", key: "timeline" },
  { href: "/encyclopedie", key: "encyclopedia", submenu: "encyclopedia" },
  { href: "/histoire", key: "story", submenu: "story" },
] as const;

const soon = ["guides"] as const;

/** Entrée de sous-menu fournie par le serveur (les résumés d'histoire disponibles). */
export type NavSubItem = { href: string; label: string };

export function MainNav({ extras, storyItems = [] }: { extras?: React.ReactNode; storyItems?: NavSubItem[] } = {}) {
  const t = useTranslations("Nav");
  const te = useTranslations("Encyclopedia");
  const pathname = usePathname();
  const [open, setOpen] = useState<string | null>(null);
  const bar = useRef<HTMLElement>(null);
  // Fermeture différée : laisse le temps d'aller du bouton au sous-menu à la souris.
  const closeTimer = useRef<number | undefined>(undefined);

  function openNow(key: string) {
    window.clearTimeout(closeTimer.current);
    setOpen(key);
  }
  function closeSoon() {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpen(null), 250);
  }

  useEffect(() => {
    if (!open) return;
    function onDown(e: MouseEvent) {
      if (!bar.current?.contains(e.target as Node)) setOpen(null);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(null);
    }
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => () => window.clearTimeout(closeTimer.current), []);

  /** Sous-entrées par section : les cinq catégories de l'encyclopédie, les jeux résumés pour l'histoire. */
  const submenus: Record<string, NavSubItem[]> = {
    encyclopedia: [
      ...CATEGORIES.map((c) => ({
        href: `/encyclopedie/${CATEGORY_SLUG[c]}`,
        label: te(`categories.${c}.title`),
      })),
      { href: "/glossaire", label: t("glossary") },
    ],
    story: storyItems,
  };

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  const linkClass = (active: boolean) =>
    `rounded-md px-3 py-2 text-sm font-semibold transition-colors hover:bg-surface-2 ${
      active ? "text-accent underline decoration-2 underline-offset-8" : "text-text"
    }`;

  const subList = (subItems: NavSubItem[]) => (
    <ul className="flex flex-col gap-0.5">
      {subItems.map((s) => (
        <li key={s.href}>
          <Link
            href={s.href}
            aria-current={isActive(s.href) ? "page" : undefined}
            onClick={() => setOpen(null)}
            className={`block rounded-md px-2.5 py-2 text-sm font-semibold transition-colors hover:bg-surface-2 ${
              isActive(s.href) ? "text-accent" : "text-text"
            }`}
          >
            {s.label}
          </Link>
        </li>
      ))}
    </ul>
  );

  const desktopList = (
    <ul className="flex items-center gap-1">
      {items.map((it) => {
        const active = isActive(it.href);
        const sub = "submenu" in it ? submenus[it.submenu] ?? [] : [];
        if (sub.length === 0) {
          return (
            <li key={it.key}>
              <Link href={it.href} aria-current={active ? "page" : undefined} className={linkClass(active)}>
                {t(it.key)}
              </Link>
            </li>
          );
        }
        const expanded = open === it.key;
        return (
          <li
            key={it.key}
            className="relative"
            onMouseEnter={() => openNow(it.key)}
            onMouseLeave={closeSoon}
            onFocus={() => openNow(it.key)}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(null);
            }}
          >
            <span className="flex items-center pb-0.5">
              <Link href={it.href} aria-current={active ? "page" : undefined} className={`${linkClass(active)} pr-1.5`}>
                {t(it.key)}
              </Link>
              <button
                type="button"
                onClick={() => setOpen((v) => (v === it.key ? null : it.key))}
                aria-expanded={expanded}
                aria-label={t("submenuOf", { section: t(it.key) })}
                className="rounded-md p-1 text-text-2 transition-colors hover:bg-surface-2 hover:text-text"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className={`h-3.5 w-3.5 transition-transform ${expanded ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
            </span>
            {expanded && (
              <div className="absolute left-0 top-full z-50 w-max min-w-52 max-w-[20rem] pt-1.5">
                <div className="card p-1.5">{subList(sub)}</div>
              </div>
            )}
          </li>
        );
      })}
      {soon.map((k) => (
        <li key={k}>
          <span className="cursor-not-allowed rounded-md px-3 py-2 text-sm font-semibold text-text-2" aria-disabled="true" title={t("comingSoon")}>
            {t(k)}
            <span className="ml-1.5 rounded-full border border-line px-1.5 py-0.5 text-[10px] uppercase tracking-wider">{t("comingSoon")}</span>
          </span>
        </li>
      ))}
    </ul>
  );

  const mobileList = (
    <ul className="flex flex-col gap-1">
      {items.map((it) => (
        <li key={it.key}>
          <Link href={it.href} aria-current={isActive(it.href) ? "page" : undefined} className={`block ${linkClass(isActive(it.href))}`}>
            {t(it.key)}
          </Link>
          {"submenu" in it && (submenus[it.submenu] ?? []).length > 0 && (
            <div className="ml-3 border-l border-line pl-2">{subList(submenus[it.submenu])}</div>
          )}
        </li>
      ))}
      {soon.map((k) => (
        <li key={k}>
          <span className="block cursor-not-allowed rounded-md px-3 py-2 text-sm font-semibold text-text-2" aria-disabled="true">
            {t(k)}
            <span className="ml-1.5 rounded-full border border-line px-1.5 py-0.5 text-[10px] uppercase tracking-wider">{t("comingSoon")}</span>
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <nav ref={bar} aria-label={t("menu")} className="hidden md:block">
        {desktopList}
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
          {mobileList}
          {extras && <div className="mt-2 border-t border-line pt-2">{extras}</div>}
        </nav>
      </details>
    </>
  );
}
