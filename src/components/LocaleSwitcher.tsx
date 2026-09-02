"use client";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { locales, localeNames, type Locale } from "@/i18n/routing";

export function LocaleSwitcher({ current }: { current: Locale }) {
  const t = useTranslations("Nav");
  const router = useRouter();
  const pathname = usePathname();

  function onChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const next = e.target.value as Locale;
    router.replace(pathname, { locale: next });
  }

  return (
    <label className="flex items-center gap-1.5 text-sm">
      <span className="sr-only">{t("language")}</span>
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 text-text-2" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
      </svg>
      <select
        value={current}
        onChange={onChange}
        className="rounded-md border border-line bg-surface px-2 py-1.5 text-sm font-semibold text-text"
      >
        {locales.map((l) => (
          <option key={l} value={l} lang={l}>
            {localeNames[l]}
          </option>
        ))}
      </select>
    </label>
  );
}
