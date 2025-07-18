import type { TimerController, Vec2 } from "kaplay";
import { k } from "../kaplay.ts";

const TWEEN_CAMERA_TIME = 1;

/**
 * Add a navigation with views where you can move horizontally between
 * them.
 *
 * @param views The views.
 */
export function addViewManager(views: Vec2[]) {
    let curCamPos = vec2(0);
    let curView = 0;
    let curTimers: TimerController[] = [];

    const tweenCamPosTo = (v: Vec2) => {
        curCamPos = curCamPos.clone();

        if (curTimers.length > 0) {
            curTimers.forEach((t) => {
                t.cancel();
            });

            curTimers = [];
        }

        curTimers.push(
            k.tween(curCamPos.x, v.x, TWEEN_CAMERA_TIME, (v) => {
                curCamPos.x = v;
            }, k.easings.easeOutBounce),
            k.tween(curCamPos.y, v.y, TWEEN_CAMERA_TIME, (v) => {
                curCamPos.y = v;
            }, k.easings.easeOutBounce),
            k.wait(TWEEN_CAMERA_TIME, () => {
                curTimers = [];
            }),
        );
    };

    k.onUpdate(() => {
        setCamPos(center().add(curCamPos));
    });

    k.onResize(() => {
        curCamPos = views[curView];
    });

    k.onKeyPress("d", () => {
        curView = (curView + 1) % views.length;
        const view = views[curView];
        tweenCamPosTo(view);
    });

    k.onKeyPress("a", () => {
        curView = (curView - 1 + views.length) % views.length;
        const view = views[curView];
        tweenCamPosTo(view);
    });
}
