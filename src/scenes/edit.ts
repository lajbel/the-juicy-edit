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
import { addColorPalette } from "../objects/addPaletteMenu.ts";
import { addSpriteCheckbox } from "../objects/addSpriteCheckbox";
import { secrets } from "../secrets.ts";
import { s } from "../shared";

k.scene("edit", () => {
    const bgMusic = play("chillaxation", { volume: 0.05, loop: true });

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

    // #region Create Things Btns
    const HAIR_BTN_L_POS = dynamicVec2((v) =>
        setVec2(v, BODY_POS.x - (85 * s.zoom), BODY_POS.y - (160 * s.zoom))
    );
    const HAIR_BTN_R_POS = dynamicVec2((v) =>
        setVec2(v, BODY_POS.x + (85 * s.zoom), BODY_POS.y - (160 * s.zoom))
    );
    const FACE_BTN_L_POS = dynamicVec2((v) =>
        setVec2(v, BODY_POS.x - (65 * s.zoom), BODY_POS.y - (110 * s.zoom))
    );
    const FACE_BTN_R_POS = dynamicVec2((v) =>
        setVec2(v, BODY_POS.x + (65 * s.zoom), BODY_POS.y - (110 * s.zoom))
    );
    const DRESS_BTN_L_POS = dynamicVec2((v) =>
        setVec2(v, BODY_POS.x - (70 * s.zoom), BODY_POS.y - (28 * s.zoom))
    );
    const DRESS_BTN_R_POS = dynamicVec2((v) =>
        setVec2(v, BODY_POS.x + (70 * s.zoom), BODY_POS.y - (28 * s.zoom))
    );

    addButtons(HAIR_BTN_L_POS, HAIR_BTN_R_POS, "hair");
    addButtons(FACE_BTN_L_POS, FACE_BTN_R_POS, "faces");
    addButtons(DRESS_BTN_L_POS, DRESS_BTN_R_POS, "outfits");
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

    addSpriteCheckbox(
        POS_FLUSH_BTN,
        "accessory_flush",
        SPRITE_CHECKBOX_SIZE,
        false,
        (check) => {
            s.enabledAccesories.flush = check;
        },
    );

    addSpriteCheckbox(
        POS_NEKO_BTN,
        "accessory_neko",
        SPRITE_CHECKBOX_SIZE,
        false,
        (check) => {
            s.enabledAccesories.neko = check;
        },
    );

    addSpriteCheckbox(
        SORBET_BTN_POS,
        "accessory_sorbet",
        SPRITE_CHECKBOX_SIZE,
        false,
        (check) => {
            s.enabledAccesories.sorbet = check;
        },
    );
    // #endregion

    /// Some events
    onHover("btn", (btn) => {
        btn.color = rgb(135, 62, 132);
    });

    onHoverEnd("btn", (btn) => {
        btn.color = rgb(212, 110, 179);
    });

    onClick("left", (b) => {
        pressButton(b, true);
    });

    onClick("right", (b) => {
        pressButton(b, false);
    });

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

    k.onKeyPress("d", () => {
        k.setCamPos(k.getCamPos().add(k.width(), 0));
    });

    k.onKeyPress("a", () => {
        k.setCamPos(k.getCamPos().add(-k.width(), 0));
    });
    // #endregion

    // #region Camera Flow
    let camX = 0;
    let camY = 1;

    k.onUpdate(() => {
        setCamPos(center().add(width() * camX, height() * camY));
    });

    k.onKeyPress("d", () => {
        camX += 1;
    });

    k.onKeyPress("a", () => {
        camX -= 1;
    });
    // #endregion

    /// functions ////////////////////////
    /**
     * Add buttons in the screen
     *
     * @param pos1 - The position of the left button
     * @param pos2 - The position of the right button
     * @param thing - The thing that will be changed
     */
    function addButtons(pos1: Vec2, pos2: Vec2, thing: string) {
        addButton(pos1, thing, "left");
        addButton(pos2, thing, "right");
    }

    /**
     * Add a button to the screen
     *
     * @param pos
     * @param thing
     * @param side
     */
    function addButton(pos: Vec2, thing: string, side: "left" | "right") {
        k.add([
            k.sprite("button", { flipX: side === "left" }),
            k.color(212, 110, 179),
            dynamicPos(() => pos),
            dynamicScale(() => s.zoom),
            k.anchor("center"),
            k.area(),
            k.z(10),
            "btn",
            "gui",
            thing,
            side,
        ]);
    }

    /**
     * Set a part of the character
     */
    function setPart(part: keyof typeof s.curParts, step: number = 1) {
        s.curParts[part] += step;

        if (s.curParts[part] < 0) {
            s.curParts[part] = s.parts[part];
        }
        else if (s.curParts[part] > s.parts[part]) {
            s.curParts[part] = 0;
        }
    }

    function pressButton(b: GameObj, s: boolean) {
        let sum = b.is("left") ? -1 : 1;

        if (b.is("hair")) setPart("hair", sum);
        else if (b.is("faces")) setPart("face", sum);
        else if (b.is("outfits")) setPart("outfit", sum);
    }

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

    // #region Secrets
    onKeyPress("space", () => {
        const secretKey = `${s.curParts.hair}${
            s.enabledAccesories.flush ? "Y" : "N"
        }${s.curParts.face}${
            s.enabledAccesories.neko ? "Y" : "N"
        }${s.curParts.outfit}${s.enabledAccesories.sorbet ? "Y" : "N"}`;

        secrets[secretKey]?.();
    });
    // #endregion

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
        });
    });
    // #endregion
});
