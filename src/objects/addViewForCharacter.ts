import { dynamicVec2, setVec2 } from "../dynamic.ts";
import { k } from "../kaplay.ts";
import { s } from "../shared.ts";
import { addHandlerToObj } from "../utils/addHandlerToObj.ts";
import { onGesture } from "../utils/onGesture.ts";
import { addBody } from "./addBody.ts";
import { addPartsManager } from "./addPartsManager.ts";
import { view } from "./addViewManager.ts";
import { drawLogo } from "./drawLogo.ts";

const CHARACTER_VIEW_POS = dynamicVec2((v) => setVec2(v, 0, 0));

export const addViewForCharacter = () => {
    const v = k.add([
        view(CHARACTER_VIEW_POS),
        k.pos(CHARACTER_VIEW_POS),
    ]);

    addPartsManager(v);
    const body = addBody(v);

    addHandlerToObj(
        v,
        onGesture("swipedown", () => {
            body.roll();
        }),
    );

    v.onScroll((delta) => {
        if (delta.y < 0) {
            s.zoom += 10 * k.dt();
        }
        else {
            s.zoom -= 10 * k.dt();
        }
    });

    v.onDraw(() => {
        drawLogo();
    });

    v.onKeyPressRepeat("r", () => body.roll());

    // Pinch
    let startDistance = 0;

    function getDistance(touches: TouchList) {
        const [a, b] = touches;
        const dx = b.clientX - a.clientX;
        const dy = b.clientY - a.clientY;
        return Math.hypot(dx, dy);
    }

    k.canvas.addEventListener("touchstart", (e) => {
        if (e.touches.length === 2) {
            startDistance = getDistance(e.touches);
        }
    });

    addHandlerToObj(
        v,
        onGesture("pinch", (e) => {
            // TODO: Type
            const currentDistance = getDistance(e.touches);
            const newZoom = currentDistance / startDistance;
            s.zoom = newZoom;
        }),
    );
};
