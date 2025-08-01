import type { TimerController, Vec2 } from "kaplay";
import { gesture, k } from "../kaplay.ts";

const TWEEN_CAMERA_TIME = 0.5;
const EASING = k.easings.easeInOutQuad;

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
            }, EASING),
            k.tween(curCamPos.y, v.y, TWEEN_CAMERA_TIME, (v) => {
                curCamPos.y = v;
            }, EASING),
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

    const nextView = () => {
        curView = (curView + 1) % views.length;
        const view = views[curView];
        tweenCamPosTo(view);
    };

    const prevView = () => {
        curView = (curView - 1 + views.length) % views.length;
        const view = views[curView];
        tweenCamPosTo(view);
    };

    k.onKeyPress("d", () => {
        nextView();
    });

    k.onKeyPress("a", () => {
        prevView();
    });

    gesture.on("swipeleft", () => {
        nextView();
    });

    gesture.on("swiperight", () => {
        prevView();
    });
}
