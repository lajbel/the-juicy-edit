import type { GameObj, KEventController } from "kaplay";
import { k } from "../kaplay.ts";

export const addHandlerToObj = (obj: GameObj, event: KEventController) => {
    k.onUpdate(() => {
        event.paused = obj.paused;
    });
};
