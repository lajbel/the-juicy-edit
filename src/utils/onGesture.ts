import type { KEventController } from "kaplay";
import type { Events } from "tinygesture";
import { gesture } from "../kaplay.ts";

// TODO: Type this better
export const onGesture = (
    event: keyof Events,
    handler: (...args: any[]) => void,
): KEventController => {
    let paused = false;

    const ev = gesture.on(event, (...args) => {
        if (!paused) handler(...args);
    });

    return {
        cancel() {
            ev.cancel();
        },
        set paused(v: boolean) {
            paused = v;
        },
        get paused() {
            return paused;
        },
    };
};
