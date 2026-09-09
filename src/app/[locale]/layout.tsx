import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
import { SITE_URL, languageAlternates, localeUrl } from "@/lib/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeScript } from "@/components/ThemeScript";
// Polices auto-hébergées (pas d'appel à Google Fonts : vie privée + hors-ligne)
import { body, display } from "../fonts";
import "../globals.css";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  const t = await getTranslations({ locale, namespace: "Meta" });
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: t("title"), template: `%s · ${t("title")}` },
    description: t("description"),
    applicationName: t("title"),
    alternates: {
      canonical: localeUrl(locale, "/"),
      languages: languageAlternates("/"),
    },
    // Aperçu des liens partagés (réseaux sociaux, messageries) : visuel du site par défaut,
    // remplacé par l'image de l'entrée sur les fiches.
    openGraph: {
      type: "website",
      siteName: t("title"),
      title: t("title"),
      description: t("description"),
      url: localeUrl(locale, "/"),
      locale,
      alternateLocale: routing.locales.filter((l) => l !== locale),
      images: [{ url: "/og.png", width: 1200, height: 630, alt: t("title") }],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/og.png"],
    },
    robots: { index: true, follow: true },
    manifest: "/manifest.webmanifest",
    icons: {
      icon: [{ url: "/favicon.ico", sizes: "any" }, { url: "/icon-192.png", type: "image/png", sizes: "192x192" }],
      apple: "/apple-touch-icon.png",
    },
  };
}

/** Couleur de la barre du navigateur, accordée au fond du site. */
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f1e8" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1020" },
  ],
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!hasLocale(routing.locales, rawLocale)) notFound();
  const locale: Locale = rawLocale;
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      {/* suppressHydrationWarning : des extensions navigateur (ColorZilla, Grammarly…) ajoutent des attributs à <body> avant React */}
      <body className="min-h-dvh flex flex-col" suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          <Header locale={locale} />
          <main id="main" tabIndex={-1} className="flex-1 focus:outline-none">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
