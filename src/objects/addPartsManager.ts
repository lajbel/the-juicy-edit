import type { Vec2 } from "kaplay";
import { dynamicPos, dynamicScale, dynamicVec2, setVec2 } from "../dynamic.ts";
import { k } from "../kaplay.ts";
import { s } from "../shared.ts";
import type { PartKind } from "../types.ts";
import { onClickAndReleaseArea } from "../utils.ts";
import { BODY_POS } from "./addBody.ts";

export function addPartsManager() {
    updateEnabledParts();

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

    /// Some events
    onHover("btn", (btn) => {
        btn.color = rgb(135, 62, 132);
    });

    onHoverEnd("btn", (btn) => {
        btn.color = rgb(212, 110, 179);
    });

    addButtons(HAIR_BTN_L_POS, HAIR_BTN_R_POS, "hair");
    addButtons(FACE_BTN_L_POS, FACE_BTN_R_POS, "face");
    addButtons(DRESS_BTN_L_POS, DRESS_BTN_R_POS, "outfit");
}

// #region Parts Flow
function nextPart(partKind: PartKind) {
    const curPart = s.curPartIndexes[partKind];
    const nextIndex = curPart + 1;

    if (nextIndex >= s.enabledParts[partKind].length) {
        s.curPartIndexes[partKind] = -1;
        s.curParts[partKind] = undefined;
    }
    else {
        s.curPartIndexes[partKind] = nextIndex;
        s.curParts[partKind] = s.enabledParts[partKind][nextIndex];
    }
}

function previousPart(partKind: PartKind) {
    const curPart = s.curPartIndexes[partKind];
    const prevIndex = curPart === -1
        ? s.enabledParts[partKind].length - 1
        : curPart - 1;

    if (prevIndex < 0) {
        s.curPartIndexes[partKind] = -1;
        s.curParts[partKind] = undefined;
    }
    else {
        s.curPartIndexes[partKind] = prevIndex;
        s.curParts[partKind] = s.enabledParts[partKind][prevIndex];
    }
}

function updateEnabledParts() {
    s.curParts.face = undefined;
    s.curParts.hair = undefined;
    s.curParts.outfit = undefined;
    s.curPartIndexes.face = -1;
    s.curPartIndexes.hair = -1;
    s.curPartIndexes.outfit = -1;
    s.enabledParts.face = [];
    s.enabledParts.outfit = [];
    s.enabledParts.hair = [];

    for (let collection in s.enabledCollections) {
        if (!s.enabledCollections[collection]) continue;
        const col = s.collections[collection];

        s.enabledParts.face.push(...col.parts.face);
        s.enabledParts.outfit.push(...col.parts.outfit);
        s.enabledParts.hair.push(...col.parts.hair);
    }
}

// #endregion

// #region Buttons
/**
 * Add a button to the screen
 *
 * @param pos
 * @param part
 * @param side
 */
function addButton(pos: Vec2, part: PartKind, side: "left" | "right") {
    const button = k.add([
        k.sprite("button", { flipX: side === "left" }),
        k.color(212, 110, 179),
        dynamicPos(() => pos),
        dynamicScale(() => s.zoom),
        k.anchor("center"),
        k.area(),
        k.z(10),
        "btn",
        "gui",
        part,
        side,
    ]);

    onClickAndReleaseArea("left", button, () => {
        if (side == "left") {
            previousPart(part);
        }
        else {
            nextPart(part);
        }
    });
}

function addButtons(pos1: Vec2, pos2: Vec2, thing: PartKind) {
    addButton(pos1, thing, "left");
    addButton(pos2, thing, "right");
}

// #endregion
