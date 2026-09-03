"use client";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

type Query = Record<string, string | undefined>;

/** Numéros de page à afficher : 1 … p-1 p p+1 … n (null = points de suspension). */
function pageItems(page: number, total: number): (number | null)[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const set = new Set<number>([1, total, page - 1, page, page + 1]);
  if (page <= 3) [2, 3, 4].forEach((n) => set.add(n));
  if (page >= total - 2) [total - 3, total - 2, total - 1].forEach((n) => set.add(n));
  const pages = [...set].filter((n) => n >= 1 && n <= total).sort((a, b) => a - b);
  const out: (number | null)[] = [];
  pages.forEach((n, i) => {
    if (i > 0 && n - pages[i - 1]! > 1) out.push(null);
    out.push(n);
  });
  return out;
}

/**
 * Pagination accessible : landmark <nav>, liens réels (fonctionnent sans JavaScript),
 * page courante signalée par aria-current, précédent/suivant désactivés aux extrémités.
 */
export function Pagination({ page, total, pathname, query, id }: { page: number; total: number; pathname: string; query: Query; id?: string }) {
  const t = useTranslations("Encyclopedia.pagination");
  if (total <= 1) return null;
  const href = (n: number) => {
    const clean: Record<string, string> = {};
    for (const [k, v] of Object.entries({ ...query, page: n > 1 ? String(n) : undefined })) if (v) clean[k] = v;
    return { pathname, query: clean };
  };
  const base = "inline-flex min-h-10 min-w-10 items-center justify-center rounded-full border px-3 text-sm font-semibold transition-colors";
  const idle = `${base} border-line bg-surface text-text hover:border-accent`;
  const current = `${base} border-accent bg-accent text-accent-contrast`;
  const disabled = `${base} border-line text-text-2 opacity-50`;

  return (
    <nav aria-label={t("label")} id={id} className="mt-8 flex flex-wrap items-center justify-center gap-2">
      {page > 1 ? (
        <Link href={href(page - 1)} rel="prev" className={idle}>
          <span aria-hidden="true">‹</span>
          <span className="sr-only">{t("prev")}</span>
        </Link>
      ) : (
        <span className={disabled} aria-disabled="true">
          <span aria-hidden="true">‹</span>
          <span className="sr-only">{t("prev")}</span>
        </span>
      )}
      <ul className="flex flex-wrap items-center gap-2">
        {pageItems(page, total).map((n, i) =>
          n === null ? (
            <li key={`gap-${i}`} aria-hidden="true" className="px-1 text-text-2">
              …
            </li>
          ) : (
            <li key={n}>
              {n === page ? (
                <span className={current} aria-current="page">
                  <span className="sr-only">{t("page")} </span>
                  {n}
                </span>
              ) : (
                <Link href={href(n)} className={idle}>
                  <span className="sr-only">{t("page")} </span>
                  {n}
                </Link>
              )}
            </li>
          ),
        )}
      </ul>
      {page < total ? (
        <Link href={href(page + 1)} rel="next" className={idle}>
          <span aria-hidden="true">›</span>
          <span className="sr-only">{t("next")}</span>
        </Link>
      ) : (
        <span className={disabled} aria-disabled="true">
          <span aria-hidden="true">›</span>
          <span className="sr-only">{t("next")}</span>
        </span>
      )}
      <p className="w-full text-center text-sm text-text-2">{t("status", { page, total })}</p>
    </nav>
  );
}
