// Emblème du site : un cœur stylisé percé d'une serrure. Dessin original.
// Le cœur est tracé en courbes de Bézier uniquement et parfaitement symétrique
// (la version précédente utilisait deux arcs dont le rayon était trop court pour
// la corde à joindre : le navigateur l'agrandissait, ce qui aplatissait le flanc gauche).
export const HEART_PATH =
  "M32 56 C32 56 6 40 6 24 C6 14 14 9 20 9 C26 9 30 13 32 17 C34 13 38 9 44 9 C50 9 58 14 58 24 C58 40 32 56 32 56 Z";

export function Emblem({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={className} fill="none">
      <path d={HEART_PATH} fill="currentColor" opacity="0.92" />
      <circle cx="32" cy="29" r="6" fill="var(--bg)" />
      <path d="M29.2 32 L26 45 H38 L34.8 32 Z" fill="var(--bg)" />
    </svg>
  );
}
