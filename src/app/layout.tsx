import type { ReactNode } from "react";

// Le layout racine ne rend que ses enfants : la balise <html> est posée par
// app/[locale]/layout.tsx afin de porter l'attribut lang correct.
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
