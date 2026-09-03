"use client";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link, useRouter } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { search, type SearchItem } from "@/lib/search";

/**
 * Palette de recherche globale (Ctrl/⌘ K). Charge l'index une seule fois, à l'ouverture.
 * Accessible : dialog modal, combobox + listbox, navigation aux flèches, Échap pour fermer.
 */
export function SearchPalette() {
  const t = useTranslations("Search");
  const locale = useLocale() as Locale;
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [index, setIndex] = useState<SearchItem[] | null>(null);
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const id = useId();

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") close();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close]);

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    if (index) return;
    fetch("/api/search-index")
      .then((r) => r.json())
      .then((d: SearchItem[]) => setIndex(d))
      .catch(() => setIndex([]));
  }, [open, index]);

  const results = index ? search(index, q, 10) : [];
  const sub = (it: SearchItem) => (locale === "fr" ? it.sub.fr : it.sub.en);
  const name = (it: SearchItem) => (locale !== "fr" && it.nameEn ? it.nameEn : it.name);

  function onInputKey(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") { e.preventDefault(); setActive((a) => Math.min(a + 1, results.length - 1)); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setActive((a) => Math.max(a - 1, 0)); }
    else if (e.key === "Enter") {
      e.preventDefault();
      const r = results[active];
      if (r) { close(); router.push(r.href); }
      else if (q.trim()) { close(); router.push(`/recherche?q=${encodeURIComponent(q.trim())}`); }
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 rounded-md border border-line bg-surface px-2.5 py-1.5 text-sm text-text-2 hover:border-accent"
        aria-label={t("open")}
        aria-keyshortcuts="Control+K Meta+K"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" />
        </svg>
        <span className="hidden lg:inline">{t("label")}</span>
        <kbd className="hidden whitespace-nowrap rounded border border-line px-1 font-sans text-[10px] lg:inline">Ctrl K</kbd>
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center bg-black/50 p-4 pt-[10vh]" onClick={close}>
          <div
            role="dialog"
            aria-modal="true"
            aria-label={t("label")}
            className="card w-full max-w-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2 border-b border-line px-4">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 text-text-2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" />
              </svg>
              <input
                ref={inputRef}
                role="combobox"
                aria-expanded={results.length > 0}
                aria-controls={`${id}-list`}
                aria-activedescendant={results[active] ? `${id}-opt-${active}` : undefined}
                aria-autocomplete="list"
                value={q}
                onChange={(e) => { setQ(e.target.value); setActive(0); }}
                onKeyDown={onInputKey}
                placeholder={t("placeholder")}
                className="w-full bg-transparent py-3.5 text-base outline-none"
              />
              <button type="button" onClick={close} className="rounded px-2 py-1 text-xs text-text-2 hover:bg-surface-2" aria-label={t("close")}>Esc</button>
            </div>
            <ul id={`${id}-list`} role="listbox" className="max-h-[60vh] overflow-y-auto p-2">
              {!index && q && <li className="px-3 py-2 text-sm text-text-2">{t("loading")}</li>}
              {index && q && results.length === 0 && <li className="px-3 py-2 text-sm text-text-2">{t("noResult")}</li>}
              {results.map((r, i) => (
                <li key={r.href} id={`${id}-opt-${i}`} role="option" aria-selected={i === active}>
                  <Link
                    href={r.href}
                    onClick={close}
                    onMouseEnter={() => setActive(i)}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 ${i === active ? "bg-surface-2" : ""}`}
                  >
                    <span aria-hidden="true" className="h-8 w-8 shrink-0 rounded-full" style={{ background: `linear-gradient(160deg, ${r.accent}, #0b1020)` }} />
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-bold">{name(r)}</span>
                      <span className="block truncate text-xs text-text-2">{sub(r)}</span>
                    </span>
                    <span className="shrink-0 rounded-full border border-line px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-text-2">{t(`types.${r.type}`)}</span>
                  </Link>
                </li>
              ))}
              {!q && (
                <li className="px-3 py-2 text-sm text-text-2">{t("hint")}</li>
              )}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
