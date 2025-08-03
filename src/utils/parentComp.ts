import type { GameObj } from "kaplay";
import { k } from "../kaplay.ts";

export const parent = (obj: GameObj = k._k.game.root) => {
    return {
        id: "parentcomp",
        add() {
            this.parent = obj;
        },
    };
};
