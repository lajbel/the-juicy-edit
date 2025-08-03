import type { AreaComp, GameObj, KEventController, MouseButton } from "kaplay";
import { k } from "../kaplay.ts";

export const onClickAndReleaseArea = (
    btn: MouseButton,
    area: GameObj<AreaComp>,
    ev: () => any,
) => {
    let clicked = false;

    const press = k.onMousePress(btn, () => {
        clicked = true;
    });

    const release = k.onMouseRelease(btn, () => {
        if (clicked) {
            clicked = false;
            if (area.isHovering()) {
                ev();
            }
        }
    });

    const controller: KEventController = {
        cancel() {
            press.cancel();
            release.cancel();
        },
        set paused(p: boolean) {
            press.paused = p;
            release.paused = p;
        },
        get paused() {
            if (press.paused && release.paused) return true;
            return false;
        },
    };

    return controller;
};
