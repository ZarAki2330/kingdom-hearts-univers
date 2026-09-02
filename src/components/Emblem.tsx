// Emblème du site : un cœur stylisé percé d'une serrure. Dessin original.
export function Emblem({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={className} fill="none">
      <path
        d="M32 58 C18 46 6 36 6 23 A13 13 0 0 1 32 16 A13 13 0 0 1 58 23 C58 36 46 46 32 58 Z"
        fill="currentColor"
        opacity="0.92"
      />
      <circle cx="32" cy="28" r="5.5" fill="var(--bg)" />
      <path d="M29.5 31 L26.5 44 H37.5 L34.5 31 Z" fill="var(--bg)" />
    </svg>
  );
}
