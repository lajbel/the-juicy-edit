import type { GameObj, PosComp, TimerController, Vec2 } from "kaplay";
import { gesture, k } from "../kaplay.ts";

const TWEEN_CAMERA_TIME = 0.5;
const EASING = k.easings.easeInOutQuad;

type ViewObj = GameObj<ViewComp | PosComp>;

let views: ViewObj[] = [];
let viewPositions: Vec2[] = [];

/**
 * Add a navigation with views where you can move horizontally between
 * them.
 *
 * @param viewPositions The views.
 */
export function addViewManager() {
    let curCamPos = k.vec2(0);
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
        k.setCamPos(k.center().add(curCamPos));
    });

    k.onResize(() => {
        curCamPos = viewPositions[curView];
    });

    const nextView = () => {
        views[curView].paused = true;
        curView = (curView + 1) % viewPositions.length;
        views[curView].paused = false;
        tweenCamPosTo(viewPositions[curView]);
    };

    const prevView = () => {
        views[curView].paused = true;
        curView = (curView - 1 + viewPositions.length) % viewPositions.length;
        views[curView].paused = false;
        tweenCamPosTo(viewPositions[curView]);
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

interface ViewComp {
}

/**
 * Register a game object as a view.
 */
export const view = (pos: Vec2): ViewComp => {
    return {
        id: "view",
        add() {
            viewPositions.push(pos);
            views.push(this);
        },
    };
};
