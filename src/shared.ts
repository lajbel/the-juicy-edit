import type { GameState } from "./types.ts";

export const s: GameState = {
    zoom: 1,
    curIds: {
        hair: 0,
        face: 0,
        outfit: 0,
        accesory: 0,
    },
    // Classify parts by numbers
    collections: {},
    enabledCollections: {},
    enabledParts: {
        hair: [],
        face: [],
        outfit: [],
    },
    curParts: { hair: undefined, face: undefined, outfit: undefined },
    curPartIndexes: {
        hair: -1,
        face: -1,
        outfit: -1,
    },
    curAccesories: [],
};
