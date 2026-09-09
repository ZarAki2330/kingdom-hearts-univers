"use client";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

type Props = {
  /** Fichier à afficher en grand (celui de la fiche, à sa résolution d'origine). */
  src: string;
  /** Nom de l'entrée : sert de texte de remplacement et de titre à la visionneuse. */
  alt: string;
  width: number;
  height: number;
  /** Crédit affiché sous l'image agrandie, comme sur la fiche. */
  credit?: string;
  /** La vignette cliquable (portrait, jaquette, logo…). */
  children: React.ReactNode;
  className?: string;
};

/**
 * Visionneuse plein écran : un clic (ou Entrée) sur la vignette ouvre l'image en grand.
 * Échap ou un clic à côté ferment, la tabulation reste piégée dans la boîte et le focus
 * revient sur la vignette. L'image n'est jamais agrandie au-delà du double de sa taille
 * réelle : les visuels du site font 320 px de haut, au-delà ils deviendraient flous.
 */
export function ImageZoom({ src, alt, width, height, credit, children, className = "" }: Props) {
  const t = useTranslations("Media");
  const [open, setOpen] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) {
      return;
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    document.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    // La page derrière ne défile plus tant que la visionneuse est ouverte.
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    // La vignette est capturée maintenant : au nettoyage, la référence pourrait avoir changé.
    const trigger = triggerRef.current;
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
      trigger?.focus();
    };
  }, [open, close]);

  /** Piège de focus : la tabulation tourne en boucle entre les commandes de la boîte. */
  function onDialogKey(e: React.KeyboardEvent) {
    if (e.key !== "Tab") return;
    const focusable = [...(boxRef.current?.querySelectorAll<HTMLElement>("button, a[href]") ?? [])];
    if (focusable.length === 0) return;
    const first = focusable[0]!;
    const last = focusable[focusable.length - 1]!;
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-label={t("zoomOf", { name: alt })}
        className={`group relative block cursor-zoom-in ${className}`}
      >
        {children}
        <span
          aria-hidden="true"
          className="absolute bottom-1.5 right-1.5 rounded-md border border-line bg-surface/90 p-1 text-text-2 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5M11 8v6M8 11h6" />
          </svg>
        </span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[110] flex items-center justify-center bg-black/80 p-4"
          onClick={close}
          onKeyDown={onDialogKey}
        >
          <div
            ref={boxRef}
            role="dialog"
            aria-modal="true"
            aria-label={alt}
            className="card relative max-h-full overflow-auto p-3"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Cadre borné par la fenêtre et par le double de la taille réelle du fichier ;
                l'image s'y inscrit entière (object-contain), donc sans déformation. */}
            <div
              className="relative mx-auto"
              style={{
                width: `min(88vw, ${width * 2}px)`,
                height: `min(78vh, ${height * 2}px)`,
              }}
            >
              <Image src={src} alt={alt} fill sizes="88vw" className="object-contain" />
            </div>
            <div className="mt-3 flex items-start justify-between gap-4">
              <p className="max-w-[52ch] text-xs text-text-2">{credit}</p>
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                className="shrink-0 rounded-md border border-line px-3 py-1.5 text-sm font-semibold transition-colors hover:border-accent"
              >
                {t("close")}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
