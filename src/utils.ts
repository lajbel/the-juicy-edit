import type { AreaComp, GameObj, KEventController, MouseButton } from "kaplay";

export const onClickAndReleaseArea = (
    btn: MouseButton,
    area: GameObj<AreaComp>,
    ev: () => any,
) => {
    let clicked = false;

    const press = onMousePress(btn, () => {
        console.log(clicked);
        clicked = true;
    });

    const release = onMouseRelease(btn, () => {
        console.log(clicked);
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
