import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getGame } from "@/data/games";
import type { KeybladeGameStat } from "@/data/encyclopedia";
import { GameCover } from "./GameCover";

const REACH = new Set(["short", "medium", "long", "very-long"]);

/**
 * Statistiques d'une Keyblade jeu par jeu. Chaque titre mesure ses armes à sa façon :
 * seules les colonnes réellement renseignées sont affichées, et la table défile
 * horizontalement dans son propre cadre sur petit écran.
 */
export async function KeybladeStats({ stats }: { stats: KeybladeGameStat[] }) {
  const t = await getTranslations("Encyclopedia");
  const tk = (key: string) => t(key as Parameters<typeof t>[0]);
  const rows = stats.map((s) => ({ ...s, gameEntry: getGame(s.game) })).filter((s) => s.gameEntry);
  if (rows.length === 0) return null;

  const has = {
    strength: rows.some((r) => r.strength),
    magic: rows.some((r) => r.magic),
    grades: rows.some((r) => r.grades),
    reach: rows.some((r) => r.reach),
    critRate: rows.some((r) => r.critRate),
    critBonus: rows.some((r) => r.critBonus),
    shift: rows.some((r) => r.shift),
    abilities: rows.some((r) => r.abilities?.length),
  };
  const reachLabel = (v: string) => (REACH.has(v) ? tk(`stats.reachValues.${v}`) : v);

  return (
    <section aria-labelledby="stats-by-game" className="mt-10">
      <h2 id="stats-by-game" className="text-2xl font-bold">
        {t("stats.title")}
      </h2>
      {/* Région défilante annoncée et atteignable au clavier (WCAG 2.1 : contenu à défilement horizontal). */}
      <div className="card mt-4 overflow-x-auto" role="region" aria-labelledby="stats-by-game" tabIndex={0}>
        <table className="w-full min-w-[42rem] border-collapse text-sm">
          <caption className="sr-only">{t("stats.title")}</caption>
          <thead>
            <tr className="border-b border-line text-left">
              <th scope="col" className="px-4 py-3 font-bold">
                {t("stats.game")}
              </th>
              {has.strength && (
                <th scope="col" className="px-4 py-3 text-right font-bold">
                  {t("facts.strength")}
                </th>
              )}
              {has.magic && (
                <th scope="col" className="px-4 py-3 text-right font-bold">
                  {t("facts.magic")}
                </th>
              )}
              {has.grades && (
                <th scope="col" className="px-4 py-3 font-bold">
                  {t("stats.grades")}
                </th>
              )}
              {has.reach && (
                <th scope="col" className="px-4 py-3 font-bold">
                  {t("stats.reach")}
                </th>
              )}
              {has.critRate && (
                <th scope="col" className="px-4 py-3 text-right font-bold">
                  {t("stats.critRate")}
                </th>
              )}
              {has.critBonus && (
                <th scope="col" className="px-4 py-3 text-right font-bold">
                  {t("stats.critBonus")}
                </th>
              )}
              {has.shift && (
                <th scope="col" className="px-4 py-3 text-right font-bold">
                  {t("stats.shift")}
                </th>
              )}
              {has.abilities && (
                <th scope="col" className="px-4 py-3 font-bold">
                  {t("stats.abilities")}
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.game} className="border-b border-line last:border-0">
                <th scope="row" className="whitespace-nowrap px-4 py-3 text-left font-semibold">
                  <Link href={`/jeux/${r.gameEntry!.slug}`} className="flex items-center gap-2.5 hover:text-accent">
                    <GameCover game={r.gameEntry!} className="h-7 w-11 shrink-0 rounded" sizes="44px" />
                    <span>{r.gameEntry!.title}</span>
                  </Link>
                </th>
                {has.strength && <td className="tabular px-4 py-3 text-right whitespace-nowrap">{r.strength ?? "–"}</td>}
                {has.magic && <td className="tabular px-4 py-3 text-right whitespace-nowrap">{r.magic ?? "–"}</td>}
                {has.grades && <td className="tabular px-4 py-3 whitespace-nowrap">{r.grades ?? "–"}</td>}
                {has.reach && <td className="px-4 py-3 whitespace-nowrap">{r.reach ? reachLabel(r.reach) : "–"}</td>}
                {has.critRate && <td className="tabular px-4 py-3 text-right whitespace-nowrap">{r.critRate ?? "–"}</td>}
                {has.critBonus && <td className="tabular px-4 py-3 text-right whitespace-nowrap">{r.critBonus ?? "–"}</td>}
                {has.shift && <td className="tabular px-4 py-3 text-right whitespace-nowrap">{r.shift ?? "–"}</td>}
                {has.abilities && (
                  <td className="px-4 py-3" lang={r.abilities?.length ? "en" : undefined}>
                    {r.abilities?.length ? r.abilities.join(" · ") : "–"}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {has.abilities && <p className="mt-2 text-xs text-text-2">{t("stats.abilitiesNote")}</p>}
      <p className="mt-1 text-xs text-text-2">{t("stats.source")}</p>
    </section>
  );
}
