"use client";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

const THEMES = ["dawn", "day", "dusk", "night"] as const;
type Theme = (typeof THEMES)[number];
const KEY = "khu-theme";

const icons: Record<Theme, string> = {
  dawn: "M12 18a6 6 0 0 0 6-6H6a6 6 0 0 0 6 6ZM2 18h20M12 4v2M4.9 7.9l1.4 1.4M19.1 7.9l-1.4 1.4",
  day: "M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4",
  dusk: "M12 16a6 6 0 0 1 6-6H6a6 6 0 0 1 6 6ZM2 16h20M4 20h16",
  night: "M21 13.5A8.5 8.5 0 0 1 10.5 3a8.5 8.5 0 1 0 10.5 10.5Z",
};

export function ThemeSwitcher() {
  const t = useTranslations("Theme");
  const tn = useTranslations("Nav");
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(KEY) as Theme | null;
      // Lecture unique après hydratation : évite un décalage serveur/client
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (saved && THEMES.includes(saved)) setTheme(saved);
    } catch {}
  }, []);

  function apply(next: Theme) {
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(KEY, next);
    } catch {}
  }

  return (
    <div role="group" aria-label={tn("theme")} className="flex rounded-md border border-line bg-surface p-0.5">
      {THEMES.map((th) => (
        <button
          key={th}
          type="button"
          onClick={() => apply(th)}
          aria-pressed={theme === th}
          aria-label={t(th)}
          title={t(th)}
          className={`rounded p-1.5 transition-colors hover:bg-surface-2 ${
            theme === th ? "bg-accent text-accent-contrast" : "text-text-2"
          }`}
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d={icons[th]} />
          </svg>
        </button>
      ))}
    </div>
  );
}
