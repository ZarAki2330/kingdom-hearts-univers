import type { Locale } from "@/i18n/routing";

/**
 * Drapeaux dessinés en SVG (et non en emoji : Windows n'affiche pas les emojis drapeaux).
 * Purement décoratifs — le nom de la langue accompagne toujours le drapeau.
 */
const shapes: Record<Locale, React.ReactNode> = {
  fr: (
    <>
      <rect width="20" height="15" fill="#fff" />
      <rect width="6.67" height="15" fill="#0055A4" />
      <rect x="13.33" width="6.67" height="15" fill="#EF4135" />
    </>
  ),
  en: (
    <>
      <rect width="20" height="15" fill="#012169" />
      <path d="M0 0l20 15M20 0L0 15" stroke="#fff" strokeWidth="3" />
      <path d="M0 0l20 15M20 0L0 15" stroke="#C8102E" strokeWidth="1.5" />
      <path d="M10 0v15M0 7.5h20" stroke="#fff" strokeWidth="5" />
      <path d="M10 0v15M0 7.5h20" stroke="#C8102E" strokeWidth="3" />
    </>
  ),
  es: (
    <>
      <rect width="20" height="15" fill="#AA151B" />
      <rect y="3.75" width="20" height="7.5" fill="#F1BF00" />
    </>
  ),
  de: (
    <>
      <rect width="20" height="15" fill="#000" />
      <rect y="5" width="20" height="5" fill="#DD0000" />
      <rect y="10" width="20" height="5" fill="#FFCE00" />
    </>
  ),
  it: (
    <>
      <rect width="20" height="15" fill="#fff" />
      <rect width="6.67" height="15" fill="#008C45" />
      <rect x="13.33" width="6.67" height="15" fill="#CD212A" />
    </>
  ),
  ja: (
    <>
      <rect width="20" height="15" fill="#fff" />
      <circle cx="10" cy="7.5" r="4.2" fill="#BC002D" />
    </>
  ),
};

export function Flag({ locale, className = "h-3.5 w-[1.15rem]" }: { locale: Locale; className?: string }) {
  return (
    <svg viewBox="0 0 20 15" aria-hidden="true" focusable="false" className={`shrink-0 rounded-[2px] ring-1 ring-inset ring-black/15 ${className}`}>
      {shapes[locale]}
    </svg>
  );
}
