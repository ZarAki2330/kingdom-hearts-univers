import { byStory } from "@/data/games";
import { hasStory, stories } from "@/data/story";
const chrono = byStory().flatMap((g) => g.games);
console.log("jeux chrono:", chrono.length, "— résumés:", stories.length);
console.log("sans résumé:", chrono.filter((g) => !hasStory(g.slug)).map((g) => g.slug).join(", ") || "aucun");
console.log("résumés hors chrono:", stories.filter((s) => !chrono.some((g) => g.slug === s.game)).map((s) => s.game).join(", ") || "aucun");
