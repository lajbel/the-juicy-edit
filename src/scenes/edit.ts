import { k } from "../kaplay";
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
    const COLLECTIONS_VIEW_MENU = dynamicVec2((v) => setVec2(v, k.width(), 0));

    const collectionsView = add([
        dynamicPos(() => COLLECTIONS_VIEW_MENU),
    ]);

    for (const col in s.enabledCollections) {
        let curScale = 1;
        let curOpacity = 1;

        const colButton = collectionsView.add([
            sprite(`${col}_potrait`),
            pos(0, height() / 2),
            anchor("left"),
            area(),
            opacity(curScale),
            scale(curOpacity),
            {
                updateState() {
                    let toScale = 1;
                    let toOpacity = 1;

                    if (!s.enabledCollections[col]) {
                        toScale = 0.9;
                        toOpacity = 0.8;
                    }

                    k.tween(curScale, toScale, 0.1, (v) => {
                        curScale = v;
                        colButton.scale.x = v;
                        colButton.scale.y = v;
                    });

                    k.tween(curOpacity, toOpacity, 0.1, (v) => {
                        curOpacity = v;
                        colButton.opacity = v;
                    });
                },
            },
        ]);

        onClickAndReleaseArea("left", colButton, () => {
            s.enabledCollections[col] = !s.enabledCollections[col];
            colButton.updateState();
            updateEnabledParts();
        });
    }

    // #endregion

    const views = [CHARACTER_EDIT_POS, COLLECTIONS_VIEW_MENU];

    addViewManager(views);
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
    let touchStartY = 0;
    let touchStartX = 0;
    let rollStarted = false;

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
        else if (e.touches.length === 1) {
            touchStartY = e.touches[0].clientY;
            touchStartX = e.touches[0].clientX;
            rollStarted = false;
        }
    });

    element.addEventListener("touchmove", (e) => {
        if (e.touches.length === 2) {
            const currentDistance = getDistance(e.touches);
            const newZoom = currentDistance / startDistance;
            s.zoom = newZoom;
        }
        else if (e.touches.length === 1) {
            const deltaY = e.touches[0].clientY - touchStartY;
            const deltaX = e.touches[0].clientX - touchStartX;

            if (
                deltaY > 30 && deltaX < 1 && !rollStarted
            ) {
                body.roll();
                rollStarted = true;
            }
        }
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
