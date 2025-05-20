import { k } from "../kaplay";
import "kaplay/global";
import { GameObj, Vec2 } from "kaplay";
import {
    dynamicPos,
    dynamicScale,
    dynamicVec2,
    setVec2,
    updateDynamic,
    updateVec2,
} from "../dynamic";
import { addSpriteCheckbox } from "../objects/addSpriteCheckbox";
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

    const BODY_POS = dynamicVec2((v) => setVec2(v, k.width() / 2, k.height()));

    const HEAD_POS = dynamicVec2((v) =>
        setVec2(v, BODY_POS.x, BODY_POS.y - (43 * s.zoom))
    );

    const FACE_POS = dynamicVec2((v) =>
        setVec2(v, BODY_POS.x, BODY_POS.y - (86 * s.zoom))
    );

    const NEKO_POS = dynamicVec2((v) => {
        v.x = BODY_POS.x;
        v.y = BODY_POS.y - (134 * s.zoom);
    });

    const SORBET_POS = dynamicVec2((v) => {
        v.x = BODY_POS.x + (40 * s.zoom);
        v.y = BODY_POS.y - (130 * s.zoom);
    });

    const FLUSH_POS = dynamicVec2((v) => {
        v.x = BODY_POS.x;
        v.y = BODY_POS.y - (84 * s.zoom);
    });

    const drawBody = () => {
        if (s.enabledAccesories.sorbet) {
            drawSprite({
                sprite: "sorbet",
                pos: SORBET_POS,
                anchor: "bot",
                scale: vec2(s.zoom),
            });
        }

        if (s.enabledAccesories.neko) {
            drawSprite({
                sprite: "neko",
                anchor: "bot",
                pos: NEKO_POS,
                scale: vec2(s.zoom),
            });
        }

        if (s.curParts.hair > 0) {
            drawSprite({
                sprite: "hairstyles",
                anchor: "bot",
                pos: HEAD_POS,
                frame: s.curParts.hair - 1,
                scale: vec2(s.zoom),
            });
        }

        drawSprite({
            sprite: "body",
            anchor: "bot",
            pos: BODY_POS,
            scale: vec2(s.zoom),
        });

        if (s.curParts.face > 0) {
            drawSprite({
                sprite: "faces",
                anchor: "bot",
                pos: FACE_POS,
                frame: s.curParts.face - 1,
                scale: vec2(s.zoom),
            });
        }

        if (s.curParts.outfit > 0) {
            drawSprite({
                sprite: "outfits",
                anchor: "bot",
                pos: BODY_POS,
                frame: s.curParts.outfit - 1,
                scale: vec2(s.zoom),
            });
        }

        if (s.enabledAccesories.flush) {
            drawSprite({
                sprite: "flush",
                anchor: "bot",
                pos: FLUSH_POS,
                scale: vec2(s.zoom),
            });
        }

        if (s.curParts.hair > 0) {
            drawSprite({
                sprite: "tophairstyles",
                anchor: "bot",
                pos: HEAD_POS,
                frame: s.curParts.hair - 1,
                scale: vec2(s.zoom),
            });
        }
    };

    onDraw(() => {
        drawBody();
    });
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

    // keys /////////////////////////////////////////////////////////////////////////
    onKeyPressRepeat("r", randomPart);

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

    function randomPart() {
        s.curParts.hair =
            Math.round((Math.random() * (s.parts.hair - 0) + 0) / 2)
            * 2;
        s.curParts.face = randi(s.parts.face);
        s.curParts.outfit = randi(s.parts.outfit);
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

    // #region Mobile Gesture
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

    element.addEventListener("touchmove", (e) => {
        if (e.touches.length === 2) {
            const currentDistance = getDistance(e.touches);
            const newZoom = currentDistance / startDistance;
            s.zoom = newZoom;
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
});
