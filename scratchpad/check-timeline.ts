import { eras, events } from "@/data/timeline";
import { terms } from "@/data/glossary";
import { getGame } from "@/data/games";
import { getEntry } from "@/data/encyclopedia";

let bad = 0;
const eraIds = new Set(eras.map((e) => e.id));
const ids = new Set<string>();
for (const e of events) {
  if (ids.has(e.id)) { console.log("ÉVÉNEMENT EN DOUBLE", e.id); bad++; }
  ids.add(e.id);
  if (!eraIds.has(e.era)) { console.log("ÈRE INCONNUE", e.id, e.era); bad++; }
  if (e.game && !getGame(e.game)) { console.log("JEU INCONNU", e.id, e.game); bad++; }
  for (const s of e.entries ?? []) if (!getEntry(s)) { console.log("SLUG INCONNU", e.id, s); bad++; }
}
const termIds = new Set(terms.map((t) => t.id));
for (const t of terms) {
  if (t.entry && !getEntry(t.entry)) { console.log("FICHE INCONNUE", t.id, t.entry); bad++; }
  for (const r of t.related ?? []) if (!termIds.has(r)) { console.log("TERME LIÉ INCONNU", t.id, r); bad++; }
}
console.log(`${eras.length} ères, ${events.length} événements, ${terms.length} termes`);
console.log(bad === 0 ? "OK" : bad + " problèmes");
