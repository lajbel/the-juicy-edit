export type PartKind = "hair" | "face" | "outfit";
export type AllKind = "accesory" | PartKind;

/**
 * The global game state.
 */
export interface GameState {
    /** In-game Zoom */
    zoom: number;
    /** Count of IDs */
    curIds: Record<AllKind, number>;
    /** Loaded collections. */
    collections: Record<string, {
        "parts": {
            hair: Part[];
            face: Part[];
            outfit: Part[];
        };
        "accesories": Accesory[];
    }>;
    /** Names of enabled collections. */
    enabledCollections: Record<string, boolean>;
    /** Enabled parts arrays */
    enabledParts: {
        hair: Part[];
        face: Part[];
        outfit: Part[];
    };
    /** Current selected parts references. */
    curParts: {
        hair?: Part;
        face?: Part;
        outfit?: Part;
    };
    /** Current selected part indexes. */
    curPartIndexes: {
        hair: number;
        face: number;
        outfit: number;
    };
    /** Current selected accessories sprites. */
    curAccesories: string[];
}

type Part = {
    kind: PartKind;
    id: number;
    spritesheet?: string;
    topSpritesheet?: string;
    bottomSpritesheet?: string;
    frame: number;
};

interface Accesory {
    id: number;
    sprite: string;
}
