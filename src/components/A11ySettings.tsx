"use client";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

/**
 * Réglages d'accessibilité : contraste, animations, taille du texte.
 * Chaque réglage pose un attribut sur <html> (lu par globals.css) et se mémorise
 * dans le navigateur ; ThemeScript le réapplique avant le premier rendu.
 * « Système » = aucun attribut : la préférence du système d'exploitation s'applique.
 */
const SETTINGS = [
  { key: "contrast", attr: "data-contrast", storage: "khu-contrast", options: [null, "more"] },
  { key: "motion", attr: "data-motion", storage: "khu-motion", options: [null, "reduce"] },
  { key: "text", attr: "data-text", storage: "khu-text", options: [null, "large", "xlarge"] },
] as const;

type Values = Record<string, string | null>;

export function A11ySettings() {
  const t = useTranslations("A11y");
  /** Clés construites à la volée (`contrast.options.more`…) : le typage strict de next-intl
   *  ne sait pas les vérifier, la présence des textes est garantie par le fichier de messages. */
  const tk = (key: string) => t(key as Parameters<typeof t>[0]);
  const [values, setValues] = useState<Values>({ contrast: null, motion: null, text: null });

  useEffect(() => {
    const next: Values = {};
    for (const s of SETTINGS) {
      try {
        next[s.key] = localStorage.getItem(s.storage);
      } catch {
        next[s.key] = null;
      }
    }
    // Lecture unique après hydratation : évite un décalage serveur/client.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setValues(next);
  }, []);

  function apply(setting: (typeof SETTINGS)[number], value: string | null) {
    setValues((v) => ({ ...v, [setting.key]: value }));
    if (value) document.documentElement.setAttribute(setting.attr, value);
    else document.documentElement.removeAttribute(setting.attr);
    try {
      if (value) localStorage.setItem(setting.storage, value);
      else localStorage.removeItem(setting.storage);
    } catch {}
  }

  function reset() {
    for (const s of SETTINGS) apply(s, null);
  }

  return (
    <div className="mt-8 space-y-6">
      {SETTINGS.map((s) => (
        <fieldset key={s.key} className="card p-5">
          <legend className="px-1 text-lg font-bold">{tk(`${s.key}.title`)}</legend>
          <p className="prose-max mt-1 text-sm text-text-2">{tk(`${s.key}.help`)}</p>
          <div role="group" className="mt-4 flex flex-wrap gap-2">
            {s.options.map((opt) => {
              const selected = values[s.key] === opt;
              return (
                <button
                  key={opt ?? "auto"}
                  type="button"
                  onClick={() => apply(s, opt)}
                  aria-pressed={selected}
                  className={`rounded-md border px-3.5 py-2 text-sm font-semibold transition-colors ${
                    selected ? "border-accent bg-accent text-accent-contrast" : "border-line bg-surface hover:border-accent"
                  }`}
                >
                  {tk(`${s.key}.options.${opt ?? "auto"}`)}
                </button>
              );
            })}
          </div>
        </fieldset>
      ))}
      <p>
        <button
          type="button"
          onClick={reset}
          className="rounded-md border border-line bg-surface px-3.5 py-2 text-sm font-semibold transition-colors hover:border-accent"
        >
          {t("reset")}
        </button>
      </p>
      <p role="status" aria-live="polite" className="text-sm text-text-2">
        {t("saved")}
      </p>
    </div>
  );
}
