import { gesture, k } from "../kaplay";
import "kaplay/global";
import type { GameObj, Vec2 } from "kaplay";
import {
    dynamicPos,
    dynamicScale,
    dynamicVec2,
    setVec2,
    updateDynamic,
    updateVec2,
} from "../dynamic";
import { addBody, BODY_POS, HEAD_POS } from "../objects/addBody.ts";
import {
    addCollectionView,
    COLLECTIONS_VIEW_MENU,
} from "../objects/addCollectionView.ts";
import {
    addPartsManager,
    updateEnabledParts,
} from "../objects/addPartsManager.ts";
import { addSpriteCheckbox } from "../objects/addSpriteCheckbox";
import { addViewManager } from "../objects/addViewManager.ts";
import { secrets } from "../secrets.ts";
import { s } from "../shared";
import { onClickAndReleaseArea } from "../utils.ts";

loadBean();

k.scene("edit", () => {
    const bgMusic = play("chillaxation", { volume: 0.05, loop: true });

    // #region Character edit menu
    const CHARACTER_EDIT_POS = dynamicVec2((v) => setVec2(v, 0, 0));
    // #endregion

    // #region Packs Menu

    const views = [CHARACTER_EDIT_POS, COLLECTIONS_VIEW_MENU];

    addViewManager(views);
    addCollectionView();
    addPartsManager();

    // #region Logo
    const LOGO_POS = dynamicVec2((v) => setVec2(v, k.width() / 2, 20));

    function drawLogo() {
        drawSprite({
            sprite: "logo",
            pos: LOGO_POS,
            anchor: "top",
        });
    }

    onDraw(() => {
        drawLogo();
    });
    // #endregion

    // #region Body
    const [body, bodyBox] = addBody();
    // #endregion

    // #region Create Accs Btns
    const SPRITE_CBOX_SEPARATION = () => 60 * s.zoom;
    const CHECKBOX_Y_SEPARATION = () => HEAD_POS.y - (180 * s.zoom);

    const POS_FLUSH_BTN = dynamicVec2((v) =>
        setVec2(
            v,
            HEAD_POS.x - SPRITE_CBOX_SEPARATION(),
            CHECKBOX_Y_SEPARATION(),
        )
    );
    const POS_NEKO_BTN = dynamicVec2((v) =>
        setVec2(v, HEAD_POS.x, CHECKBOX_Y_SEPARATION())
    );
    const SORBET_BTN_POS = dynamicVec2((v) =>
        setVec2(
            v,
            HEAD_POS.x + SPRITE_CBOX_SEPARATION(),
            CHECKBOX_Y_SEPARATION(),
        )
    );

    const SPRITE_CHECKBOX_SIZE = vec2(50, 50);
    // #endregion

    onScroll((delta) => {
        if (delta.y < 0) {
            s.zoom += 10 * dt();
        }
        else {
            s.zoom -= 10 * dt();
        }
    });

    // #region Create other stuff

    // #endregion

    // #region Input
    onKeyPressRepeat("r", () => body.roll());
    // #endregion

    // #region Gestures
    let startDistance = 0;

    function getDistance(touches) {
        const [a, b] = touches;
        const dx = b.clientX - a.clientX;
        const dy = b.clientY - a.clientY;
        return Math.hypot(dx, dy);
    }

    const element = k.canvas;

    element.addEventListener("touchstart", (e) => {
        if (e.touches.length === 2) {
            startDistance = getDistance(e.touches);
        }
    });

    gesture.on("pinch", (e) => {
        const currentDistance = getDistance(e.touches);
        const newZoom = currentDistance / startDistance;
        s.zoom = newZoom;
    });

    gesture.on("swipedown", () => {
        body.roll();
    });

    // #region Lifecycle
    // TODO: Optimize this
    onUpdate(() => {
        for (const update of updateVec2) {
            update();
        }

        for (const obj of updateDynamic) {
            obj.updateDynamicPos?.();
            obj.updateDynamicScale?.();
        }
    });
    // #endregion

    // #region
    onUpdate(() => {
        drawText({
            text: debug.fps().toString(),
            size: 10,
            fixed: true,
        });
    });
    // #endregion
});
