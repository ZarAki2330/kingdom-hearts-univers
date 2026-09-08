import { eras, events } from "./events";
import type { Era, StoryEvent } from "./types";

export * from "./types";
export { eras, events };

/** Événements groupés par ère, dans l'ordre de la frise. */
export function eventsByEra(): { era: Era; events: StoryEvent[] }[] {
  return eras.map((era) => ({ era, events: events.filter((e) => e.era === era.id) })).filter((g) => g.events.length > 0);
}
