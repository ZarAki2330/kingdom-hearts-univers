import { entries, CATEGORY_SLUG } from "@/data/encyclopedia";
import fs from "node:fs";
const rows = entries.map((e) => ({
  slug: e.slug,
  cat: CATEGORY_SLUG[e.category],
  fr: e.name,
  en: e.names?.en ?? e.name,
}));
fs.writeFileSync("scratchpad/names.json", JSON.stringify(rows));
console.log(rows.length, "entrées");
console.log("sans nom anglais distinct :", rows.filter((r) => r.en === r.fr).length);
