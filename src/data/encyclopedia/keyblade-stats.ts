import type { KeybladeGameStat } from "./types";

/**
 * Statistiques des Keyblades jeu par jeu (source : KH Wiki, https://www.khwiki.com).
 * Une même Keyblade n'a pas les mêmes valeurs d'un jeu à l'autre : Kingdom Hearts donne une
 * puissance d'attaque, Chain of Memories des notes de carte, Birth by Sleep et Dream Drop
 * Distance des taux de critique, Kingdom Hearts III fait évoluer la lame du niveau 0 au
 * niveau 10 (d'où les fourchettes « +4 → +9 »).
 * Les noms de capacités sont ceux de la version anglaise, faute de source française fiable.
 */
export const keybladeStats: Record<string, KeybladeGameStat[]> = {
  "abaddon-plasma": [
    { game: "358-2-days", strength: "+71", magic: "+0", abilities: ["Chain Power", "Chain Time", "Heart Bonus"] },
  ],
  "abyssal-tide": [
    { game: "358-2-days", strength: "+55", magic: "+0", abilities: ["Combo Boost", "Combo-Jump"] },
  ],
  "advent-red": [
    { game: "kingdom-hearts-iii", strength: "+4 → +9", magic: "+4 → +9", abilities: ["MP Converter", "Magic Roulette", "Full MP Blast"] },
  ],
  "all-for-one": [
    { game: "dream-drop-distance", strength: "+10", magic: "+12", reach: "98", critRate: "30%", shift: "3%" },
  ],
  "astral-blast": [
    { game: "358-2-days", strength: "+88", magic: "+0", abilities: ["Chain Power", "Combo-Jump", "Combo-Air Slide"] },
  ],
  "aubade": [
    { game: "358-2-days", strength: "+80", magic: "+0", abilities: ["Striker", "Grand Slam"] },
  ],
  "bond-of-flame": [
    { game: "chain-of-memories", grades: "– / C+ / B+" },
    { game: "kingdom-hearts-ii", strength: "+4", magic: "+4", reach: "114", abilities: ["Fire Boost"] },
    { game: "358-2-days", strength: "+118", magic: "+28", abilities: ["Fire Finish", "Magic Finale", "Second Chance"] },
  ],
  "braveheart": [
    { game: "kingdom-hearts-iii", strength: "+5", magic: "+5" },
  ],
  "brightcrest": [
    { game: "birth-by-sleep", strength: "+4", magic: "+7", reach: "113", critRate: "75%", critBonus: "x1.5" },
  ],
  "chaos-ripper": [
    { game: "birth-by-sleep", strength: "+10", magic: "-2", reach: "150", critRate: "25%", critBonus: "x1.5" },
  ],
  "circle-of-life": [
    { game: "kingdom-hearts-ii", strength: "+4", magic: "+1", reach: "114", abilities: ["MP Haste"] },
  ],
  "classic-tone": [
    { game: "kingdom-hearts-iii", strength: "+6 → +11", magic: "+9 → +14", reach: "157", abilities: ["MP Haste"] },
  ],
  "counterpoint": [
    { game: "dream-drop-distance", strength: "+12", magic: "+14", reach: "113", critRate: "20%", shift: "10%" },
  ],
  "crabclaw": [
    { game: "kingdom-hearts", strength: "+6", magic: "+1", reach: "medium" },
    { game: "chain-of-memories", grades: "C / C / B+" },
  ],
  "crown-of-guilt": [
    { game: "358-2-days", strength: "+67", magic: "+29", abilities: ["Fire Finish", "Magic Bracer", "Magic Finale"] },
  ],
  "crystal-snow": [
    { game: "kingdom-hearts-iii", strength: "+3 → +8", magic: "+6 → +11", reach: "130", abilities: ["Freeze Protection", "Blizzard Boost"] },
  ],
  "darker-than-dark": [
    { game: "358-2-days", strength: "+75", magic: "+37", abilities: ["Magic Bracer", "Vitality Barrier", "Damage Control"] },
  ],
  "darkgnaw": [
    { game: "birth-by-sleep", strength: "+5", magic: "+2", reach: "98", critRate: "25%", critBonus: "x1.35" },
  ],
  "dawn-till-dusk": [
    { game: "kingdom-hearts-iii", strength: "+4 → +9", magic: "+4 → +9", reach: "100", abilities: ["Fire Boost", "Firaza", "Formchange Extender"] },
  ],
  "decisive-pumpkin": [
    { game: "kingdom-hearts-ii", strength: "+6", magic: "+1", reach: "126", abilities: ["Combo Boost"] },
  ],
  "destinys-embrace": [
    { game: "birth-by-sleep", strength: "+3", magic: "+3", reach: "85", critRate: "75%", critBonus: "x1.35" },
    { game: "kingdom-hearts-iii", strength: "+5", magic: "+5" },
  ],
  "diamond-dust": [
    { game: "kingdom-hearts", strength: "+3", magic: "+3", reach: "medium" },
    { game: "chain-of-memories", grades: "B+ / B+ / B" },
  ],
  "divewing": [
    { game: "dream-drop-distance", strength: "+12", magic: "+15", reach: "113", critRate: "30%", shift: "5%" },
  ],
  "divine-rose": [
    { game: "kingdom-hearts", strength: "+10", reach: "short" },
    { game: "chain-of-memories", grades: "A / D+ / C" },
  ],
  "dual-disc": [
    { game: "dream-drop-distance", strength: "+10", magic: "+7", reach: "98", critRate: "30%", shift: "5%" },
  ],
  "earthshaker": [
    { game: "birth-by-sleep", strength: "+3", magic: "+1", reach: "98", critRate: "25%", critBonus: "x1.2" },
  ],
  "elemental-encoder": [
    { game: "kingdom-hearts-iii", strength: "+4 → +9", magic: "+4 → +9", abilities: ["Lucky Strike", "Magic Roulette", "Formchange Extender"] },
  ],
  "end-of-pain": [
    { game: "dream-drop-distance", strength: "+14", magic: "+16", reach: "113", critRate: "30%", shift: "3%" },
  ],
  "ends-of-the-earth": [
    { game: "birth-by-sleep", strength: "+5", magic: "+3", reach: "130", critRate: "50%", critBonus: "x1.35" },
  ],
  "ever-after": [
    { game: "kingdom-hearts-iii", strength: "+2 → +7", magic: "+6 → +11", reach: "130", abilities: ["Leaf Bracer", "Aeroza", "Aero Boost"] },
  ],
  "fairy-harp": [
    { game: "kingdom-hearts", strength: "+8", magic: "+1", reach: "short" },
    { game: "chain-of-memories", grades: "C+ / C+ / C" },
  ],
  "fairy-stars": [
    { game: "birth-by-sleep", strength: "+2", magic: "+3", critRate: "25%", critBonus: "x1.2" },
  ],
  "fatal-crest": [
    { game: "kingdom-hearts-ii", strength: "+3", magic: "+5", reach: "148", abilities: ["Berserk Charge"] },
  ],
  "favorite-deputy": [
    { game: "kingdom-hearts-iii", strength: "+5 → +10", magic: "+3 → +8", reach: "115", abilities: ["Lucky Strike", "Formchange Extender"] },
  ],
  "fenrir": [
    { game: "kingdom-hearts-ii", strength: "+7", magic: "+1", reach: "168", abilities: ["Negative Combo"] },
  ],
  "ferris-gear": [
    { game: "dream-drop-distance", strength: "+8", magic: "+8", reach: "85", critRate: "20%", shift: "3%" },
  ],
  "follow-the-wind": [
    { game: "chain-of-memories", grades: "C+ / A / D" },
    { game: "kingdom-hearts-ii", strength: "+3", magic: "+1", reach: "130", abilities: ["Draw"] },
  ],
  "frolic-flame": [
    { game: "birth-by-sleep", strength: "+3", magic: "+3", reach: "85", critRate: "50%", critBonus: "x1.5" },
  ],
  "glimpse-of-darkness": [
    { game: "358-2-days", strength: "+70", magic: "+0", abilities: ["Defender", "Striker"] },
  ],
  "grand-chef": [
    { game: "kingdom-hearts-iii", strength: "+4 → +9", magic: "+6 → +11", reach: "157", abilities: ["Wizard's Ruse", "Chef Extraordinaire"] },
  ],
  "guardian-bell": [
    { game: "dream-drop-distance", strength: "+7", magic: "+10", reach: "98", critRate: "20%", shift: "5%" },
  ],
  "guardian-soul": [
    { game: "kingdom-hearts-ii", strength: "+5", magic: "+1", reach: "156", abilities: ["Reaction Boost"] },
  ],
  "gull-wing": [
    { game: "kingdom-hearts-ii", strength: "+3", reach: "112", abilities: ["Experience Boost"] },
  ],
  "happy-gear": [
    { game: "kingdom-hearts-iii", strength: "+6 → +11", magic: "+2 → +7", reach: "115", abilities: ["Focus Converter", "Full MP Blast"] },
  ],
  "heros-crest": [
    { game: "kingdom-hearts-ii", strength: "+4", reach: "124", abilities: ["Air Combo Boost"] },
  ],
  "heros-origin": [
    { game: "kingdom-hearts-iii", strength: "+5 → +10", magic: "+2 → +7", reach: "130", abilities: ["Defender", "Formchange Extender"] },
  ],
  "hidden-dragon": [
    { game: "chain-of-memories", grades: "D+ / C+ / B+" },
    { game: "kingdom-hearts-ii", strength: "+2", magic: "+2", reach: "104", abilities: ["MP Rage"] },
  ],
  "hunny-spout": [
    { game: "kingdom-hearts-iii", strength: "+4 → +9", magic: "+4 → +9", reach: "82", abilities: ["Harvester", "Formchange Extender"] },
  ],
  "hyperdrive": [
    { game: "birth-by-sleep", strength: "+4", magic: "+3", critRate: "50%", critBonus: "x1.35" },
  ],
  "jungle-king": [
    { game: "kingdom-hearts", strength: "+5", reach: "long" },
  ],
  "kingdom-key": [
    { game: "kingdom-hearts", strength: "+3", reach: "medium" },
    { game: "chain-of-memories", grades: "D+ / D+ / D+" },
    { game: "kingdom-hearts-ii", strength: "+3", magic: "+1", reach: "100", abilities: ["Defender", "Damage Control"] },
    { game: "358-2-days", strength: "+15" },
    { game: "re-coded", reach: "medium", abilities: ["Auto-Potion", "Medic", "Magic Upgrade", "Attack Upgrade"] },
    { game: "dream-drop-distance", strength: "5", magic: "4", reach: "75", critRate: "20%", shift: "5%" },
    { game: "kingdom-hearts-iii", strength: "+4 → +9", magic: "+3 → +8", reach: "100", abilities: ["Treasure Magnet", "Formchange Extender"] },
  ],
  "kingdom-key-d": [
    { game: "kingdom-hearts-ii", strength: "+3" },
    { game: "358-2-days", strength: "+80", magic: "+10", abilities: ["Defender", "Damage Control", "Second Chance"] },
    { game: "kingdom-hearts-iii", strength: "+5", magic: "+5" },
  ],
  "knockout-punch": [
    { game: "dream-drop-distance", strength: "12", magic: "10", reach: "113", critRate: "10%", shift: "10%" },
  ],
  "lady-luck": [
    { game: "kingdom-hearts", strength: "+8", magic: "+2", reach: "medium" },
    { game: "chain-of-memories", grades: "C+ / C+ / D" },
    { game: "re-coded", reach: "medium", abilities: ["Drain Counter", "Shell", "Magic Upgrade", "Attach Fire"] },
  ],
  "leviathan": [
    { game: "358-2-days", strength: "+54", magic: "+0", abilities: ["Chain Power", "Combo Jump", "Combo-Air Slide"] },
  ],
  "lionheart": [
    { game: "kingdom-hearts", strength: "+10", magic: "+1", reach: "long" },
    { game: "chain-of-memories", grades: "B / B / B" },
    { game: "re-coded", reach: "long", abilities: ["Sonic Arts", "Brick Wall", "Magic Bracer", "Auto-Dodge"] },
  ],
  "lost-memory": [
    { game: "birth-by-sleep", strength: "+6", magic: "+5", reach: "98", critRate: "75%", critBonus: "x1.5" },
  ],
  "lunar-eclipse": [
    { game: "358-2-days", strength: "+100", magic: "+31", abilities: ["Striker", "Grand Slam", "Damage Control"] },
  ],
  "mark-of-a-hero": [
    { game: "birth-by-sleep", strength: "+5", magic: "+1", critRate: "50%", critBonus: "x1.5" },
  ],
  "masters-defender": [
    { game: "birth-by-sleep", strength: "+7", magic: "+7", reach: "long", critRate: "50%", critBonus: "x1.5" },
    { game: "kingdom-hearts-iii", strength: "+5", magic: "+5" },
  ],
  "maverick-flare": [
    { game: "chain-of-memories", grades: "D+ / C+ / B+" },
    { game: "358-2-days", strength: "+80", magic: "+0", abilities: ["Combo Boost", "Combo-Jump", "Critical Boost"] },
  ],
  "metal-chocobo": [
    { game: "kingdom-hearts", strength: "+10", magic: "-1", reach: "long" },
    { game: "chain-of-memories", grades: "C+ / C+ / B+" },
    { game: "re-coded", reach: "very-long", abilities: ["Impact Arts", "Attack Upgrade", "Full Swing", "Brick Wall"] },
  ],
  "midnight-blue": [
    { game: "kingdom-hearts-iii", strength: "+4 → +9", magic: "+4 → +9", reach: "115", abilities: ["Blizzard Boost", "Blizzaza", "Formchange Extender"] },
  ],
  "midnight-roar": [
    { game: "chain-of-memories", grades: "C+ / A / D" },
    { game: "358-2-days", strength: "+70", magic: "+0", abilities: ["Defender"] },
  ],
  "missing-ache": [
    { game: "358-2-days", strength: "+20", magic: "+0" },
  ],
  "monochrome": [
    { game: "chain-of-memories", grades: "D+ / B / B+" },
    { game: "kingdom-hearts-ii", strength: "+3", magic: "+2", reach: "102", abilities: ["Item Boost"] },
  ],
  "mysterious-abyss": [
    { game: "kingdom-hearts-ii", strength: "+3", magic: "+3", reach: "98", abilities: ["Blizzard Boost"] },
  ],
  "nano-gear": [
    { game: "kingdom-hearts-iii", strength: "+5 → +10", magic: "+4 → +9", reach: "150", abilities: ["Stun Protection", "Formchange Extender"] },
  ],
  "no-name": [
    { game: "birth-by-sleep", strength: "+6", magic: "+7", reach: "long", critRate: "75%", critBonus: "x1.35" },
  ],
  "oathkeeper": [
    { game: "kingdom-hearts", strength: "+9", magic: "+1", reach: "medium" },
    { game: "chain-of-memories", grades: "B / – / B+" },
    { game: "kingdom-hearts-ii", strength: "+3", magic: "+3", reach: "98", abilities: ["Form Boost"] },
    { game: "358-2-days", strength: "+100", magic: "+30", abilities: ["Defender"] },
    { game: "re-coded", reach: "medium", abilities: ["Undo", "Regen", "Auto-Life", "Protect"] },
    { game: "kingdom-hearts-iii", strength: "+7 → +12", magic: "+7 → +12", abilities: ["MP Converter", "Situation Boost", "Formchange Extender"] },
  ],
  "oblivion": [
    { game: "kingdom-hearts", strength: "+11", magic: "-1", reach: "long" },
    { game: "chain-of-memories", grades: "A / A / D" },
    { game: "kingdom-hearts-ii", strength: "+6", magic: "+2", reach: "122", abilities: ["Drive Boost"] },
    { game: "358-2-days", strength: "+110", magic: "+30", abilities: ["Defender", "Damage Control", "Second Chance"] },
    { game: "re-coded", reach: "long", abilities: ["Attack Haste", "Auto-Payback", "Two-Edged Blade", "Auto-Counter"] },
    { game: "kingdom-hearts-iii", strength: "+8 → +13", magic: "+6 → +11", abilities: ["HP Converter", "Situation Boost", "Formchange Extender"] },
  ],
  "olympia": [
    { game: "kingdom-hearts", strength: "+9", reach: "medium" },
    { game: "chain-of-memories", grades: "C+ / D+ / B" },
    { game: "re-coded", reach: "medium", abilities: ["Impact Arts", "Brick Wall", "Protect", "Blade Bash"] },
  ],
  "omega-weapon": [
    { game: "358-2-days", strength: "+90", magic: "+30", abilities: ["Vitality Surge", "Vitality Barrier", "Alive 'n' Kicking"] },
  ],
  "ominous-blight": [
    { game: "358-2-days", strength: "+45", magic: "+0", abilities: ["Combo Boost", "Combo-Jump"] },
  ],
  "one-winged-angel": [
    { game: "kingdom-hearts", strength: "+8", magic: "-2", reach: "long" },
    { game: "chain-of-memories", grades: "C / C / –" },
  ],
  "pain-of-solitude": [
    { game: "358-2-days", strength: "+24", magic: "+12" },
  ],
  "phantom-green": [
    { game: "kingdom-hearts-iii", strength: "+4 → +9", magic: "+4 → +9", reach: "115", abilities: ["Thunder Boost", "Thundaza", "Formchange Extender"] },
  ],
  "photon-debugger": [
    { game: "chain-of-memories", grades: "B / C+ / B+" },
    { game: "kingdom-hearts-ii", strength: "+3", magic: "+2", reach: "104", abilities: ["Thunder Boost"] },
  ],
  "pixie-petal": [
    { game: "birth-by-sleep", strength: "+3", magic: "+6", critRate: "75%", critBonus: "x1.5" },
  ],
  "pumpkinhead": [
    { game: "kingdom-hearts", strength: "+7", reach: "long" },
    { game: "chain-of-memories", grades: "C+ / C+ / D+" },
  ],
  "rainfell": [
    { game: "birth-by-sleep", strength: "+2", magic: "+2", reach: "75", critRate: "25%", critBonus: "x1.2" },
  ],
  "rejection-of-fate": [
    { game: "358-2-days", strength: "+52", magic: "+0", abilities: ["Offensive Block", "Defender", "Second Chance"] },
  ],
  "royal-radiance": [
    { game: "birth-by-sleep", strength: "+8", magic: "+7", reach: "long", critRate: "75%", critBonus: "x2.0" },
  ],
  "rumbling-rose": [
    { game: "kingdom-hearts-ii", strength: "+5", reach: "100", abilities: ["Finishing Plus"] },
  ],
  "shooting-star": [
    { game: "kingdom-hearts-iii", strength: "+3 → +8", magic: "+5 → +10", reach: "130", abilities: ["Magic Treasure Magnet", "Formchange Extender"] },
  ],
  "sign-of-innocence": [
    { game: "358-2-days", strength: "+60", magic: "+18", abilities: ["Thunder Finish", "Magic Bracer"] },
  ],
  "silent-dirge": [
    { game: "358-2-days", strength: "+64", magic: "+23", abilities: ["Defender", "Combo-Block", "Brick Wall"] },
  ],
  "skull-noise": [
    { game: "dream-drop-distance", strength: "+7", magic: "+7", reach: "85", critRate: "20%", shift: "5%" },
  ],
  "sleeping-lion": [
    { game: "kingdom-hearts-ii", strength: "+5", magic: "+3", reach: "152", abilities: ["Combo Plus"] },
  ],
  "spellbinder": [
    { game: "kingdom-hearts", strength: "+4", magic: "+2", reach: "medium" },
    { game: "chain-of-memories", grades: "D+ / A / D+" },
  ],
  "star-seeker": [
    { game: "chain-of-memories", grades: "C / D+ / B+" },
    { game: "kingdom-hearts-ii", strength: "+3", magic: "+1", reach: "128", abilities: ["Air Combo Plus"] },
    { game: "358-2-days", strength: "+115", magic: "+30", abilities: ["Combo Boost", "Combo-Jump", "Combo-Air Slide"] },
  ],
  "starlight": [
    { game: "kingdom-hearts-iii", strength: "+4 → +9", magic: "+4 → +9", reach: "100", abilities: ["MP Haste", "Formchange Extender"] },
  ],
  "stormfall": [
    { game: "birth-by-sleep", strength: "+5", magic: "+4", reach: "98", critRate: "50%", critBonus: "x1.35" },
  ],
  "stroke-of-midnight": [
    { game: "birth-by-sleep", strength: "+2", magic: "+2", critRate: "75%", critBonus: "x1.35" },
  ],
  "sweet-dreams": [
    { game: "dream-drop-distance", strength: "+14", magic: "+12", reach: "113", critRate: "30%", shift: "5%" },
  ],
  "sweet-memories": [
    { game: "kingdom-hearts-ii", reach: "102", abilities: ["Lucky Lucky", "Drive Converter"] },
  ],
  "sweetstack": [
    { game: "birth-by-sleep", strength: "+6", magic: "+4", critRate: "100%", critBonus: "x1.2" },
  ],
  "three-wishes": [
    { game: "kingdom-hearts", strength: "+6", reach: "medium" },
    { game: "chain-of-memories", grades: "C+ / D+ / B" },
    { game: "re-coded", reach: "medium", abilities: ["Sonic Arts", "Magic Bracer", "Aero Counter", "Steal Munny"] },
  ],
  "total-eclipse": [
    { game: "chain-of-memories", grades: "D+ / B / B+" },
    { game: "358-2-days", strength: "+65", magic: "+0", abilities: ["Defender", "Striker", "Combo-Block"] },
  ],
  "treasure-trove": [
    { game: "birth-by-sleep", strength: "+3", magic: "+2", critRate: "25%", critBonus: "x1.2" },
  ],
  "true-lights-flight": [
    { game: "358-2-days", strength: "+55", magic: "+0", abilities: ["Offensive Block", "Defender"] },
  ],
  "twilight-blaze": [
    { game: "358-2-days", strength: "+120", magic: "+0", abilities: ["Combo-Jump", "Combo-Block", "Critical Boost"] },
  ],
  "two-become-one": [
    { game: "chain-of-memories", grades: "B+ / B+ / B+" },
    { game: "kingdom-hearts-ii", strength: "+5", magic: "+4", reach: "112", abilities: ["Light & Darkness"] },
    { game: "358-2-days", strength: "+110", magic: "+30", abilities: ["Defender", "Damage Control"] },
  ],
  "ultima-weapon": [
    { game: "kingdom-hearts", strength: "+12", magic: "+2", reach: "long" },
    { game: "chain-of-memories", grades: "– / – / A" },
    { game: "kingdom-hearts-ii", strength: "+6", magic: "+4", reach: "166", abilities: ["MP Hastega"] },
    { game: "birth-by-sleep", strength: "+7", magic: "+6", critRate: "75%", critBonus: "x1.5" },
    { game: "re-coded", reach: "very-long", abilities: ["Heavy Blade", "Brick Wall", "Protect", "Undo"] },
    { game: "dream-drop-distance", strength: "16", magic: "16", reach: "113", critRate: "30%", shift: "10%" },
    { game: "kingdom-hearts-iii", strength: "+8 → +13", magic: "+3 → +13", reach: "165", abilities: ["Combo Boost", "Air Combo Boost", "Situation Boost"] },
  ],
  "umbrella": [
    { game: "358-2-days", strength: "+40", magic: "+0", abilities: ["Offensive Block"] },
  ],
  "unbound": [
    { game: "dream-drop-distance", strength: "+18", magic: "+14", reach: "113", critRate: "30%", shift: "20%" },
  ],
  "victory-line": [
    { game: "birth-by-sleep", strength: "+4", magic: "+2", critRate: "75%", critBonus: "x1.35" },
  ],
  "void-gear": [
    { game: "birth-by-sleep", strength: "+8", magic: "+4", reach: "long", critRate: "50%", critBonus: "x1.5" },
  ],
  "way-to-the-dawn": [
    { game: "kingdom-hearts-ii", strength: "+3" },
    { game: "358-2-days", strength: "+124", magic: "+30", abilities: ["Vitality Surge", "Vitality Barrier", "Alive 'n' Kicking"] },
    { game: "dream-drop-distance", strength: "5", magic: "4", reach: "85", critRate: "10%", shift: "5%" },
    { game: "kingdom-hearts-iii", strength: "+5", magic: "+5" },
  ],
  "wayward-wind": [
    { game: "birth-by-sleep", strength: "+3", magic: "+1", reach: "65", critRate: "50%", critBonus: "x1.35" },
    { game: "kingdom-hearts-iii", strength: "+5", magic: "+5" },
  ],
  "wheel-of-fate": [
    { game: "kingdom-hearts-iii", strength: "+6 → +11", magic: "+4 → +9", reach: "150", abilities: ["Waterza", "Formchange Extender"] },
  ],
  "winners-proof": [
    { game: "kingdom-hearts-ii", strength: "+5", magic: "+7", reach: "166", abilities: ["No Experience"] },
  ],
  "wishing-lamp": [
    { game: "kingdom-hearts-ii", strength: "+4", magic: "+3", reach: "116", abilities: ["Jackpot"] },
  ],
  "wishing-star": [
    { game: "kingdom-hearts", strength: "+5", reach: "short" },
    { game: "chain-of-memories", grades: "C / C / D+" },
    { game: "re-coded", reach: "medium", abilities: ["Medic", "Auto-Dodge", "Attack Haste", "Brick Wall"] },
  ],
  "zero-one": [
    { game: "re-coded", reach: "long", abilities: ["Attack Upgrade", "Auto-Dodge", "Magic Upgrade", "Attach Slow"] },
  ],
};
