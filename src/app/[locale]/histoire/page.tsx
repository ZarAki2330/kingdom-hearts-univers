import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { byStory, localized } from "@/data/games";
import { getStory } from "@/data/story";
import { GameCover } from "@/components/GameCover";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  const t = await getTranslations({ locale, namespace: "Story" });
  return { title: t("title"), description: t("lead") };
}

export default async function StoryIndexPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  setRequestLocale(locale);
  const t = await getTranslations("Story");
  const groups = byStory();
  const done = groups.flatMap((g) => g.games).filter((g) => getStory(g.slug)).length;
  const total = groups.flatMap((g) => g.games).length;

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <p className="eyebrow">Kingdom Hearts</p>
      <h1 className="mt-2 text-4xl font-bold sm:text-5xl">{t("title")}</h1>
      <p className="prose-max mt-4 text-lg text-text-2">{t("lead")}</p>
      <p className="mt-3 text-sm text-text-2">{t("progress", { done, total })}</p>

      <ol className="mt-10 space-y-4">
        {groups.flatMap((group) =>
          group.games.map((game) => {
            const story = getStory(game.slug);
            const inner = (
              <>
                <GameCover game={game} className="h-20 w-32 shrink-0 rounded-lg" sizes="128px" />
                <div className="min-w-0">
                  <span className="eyebrow">{story ? t("summary") : t("soon")}</span>
                  <h2 className="text-lg font-bold leading-tight">{game.title}</h2>
                  <p className="mt-1 line-clamp-2 text-sm text-text-2">{localized(game.synopsis, locale)}</p>
                </div>
              </>
            );
            return (
              <li key={game.slug}>
                {story ? (
                  <div className="card card-link">
                    <Link href={`/histoire/${game.slug}`} className="flex items-center gap-4 p-4">
                      {inner}
                    </Link>
                  </div>
                ) : (
                  <div className="card flex items-center gap-4 p-4 opacity-60">{inner}</div>
                )}
              </li>
            );
          }),
        )}
      </ol>
    </div>
  );
}
