// @ts-check

import { k } from "./kaplay";
import "./loader";
import "kaplay/global";
import { checkbox, downloader, tltext, tlsprite } from "./components";
import { dynamicPos, dynamicVec2, setVec2, updatePos, updateVec2 } from "./dynamic";
import { addSpriteCheckbox } from "./objects/addSpriteCheckbox";

/**
 * @typedef {import("kaplay").Vec2} Vec2
 */

// configuration & variables
const HAIR_COUNT = 35;
const FACES_COUNT = 40;
const OUTFITS_COUNT = 35;


const bgs = [
    Color.fromHex("#8db7ff"),
    Color.fromHex("#ffc3f2"),
    Color.fromHex("#c97373"),
];

const rooms = [
    getCamPos().clone(),
    getCamPos().clone().add(width(), 0),
];

const layers = {
    belowbody: 1,
    hair: 2,
    body: 3,
    belowface: 4,
    face: 5,
    outfit: 6,
    fronthair: 7,
}

/** @type { import("kaplay").AudioPlay } */
let bgMusic;

// Cursor ///////////////////////////////////////////////////////////////////////

const c = add([
    sprite("default"),
    pos(0, 0),
    z(1000),
    fixed(),
    {
        h: false,
    }
]);

c.hidden = true;

// Click to start ///////////////////////////////////////////////////////////////
add([
    text("click\n to\nstart", { size: 36, font: "juiceisntbelow" }),
    tltext([
        { lang: "en", text: "click\n\ to\nstart" },
    ]),
    color(74, 48, 82),
    anchor("center"),
    pos(center().sub(width(), 0)),
]);

const cts = add([
    rect(width(), height()),
    opacity(0),
    pos(-width(), 0),
    area(),
]);

cts.onClick(() => {
    bgMusic = play("chillaxation", { volume: 0.05, loop: true });

    cts.destroy();
});

/// First UI and Scenario //////////////////////////////////////////////////////////////////////////
let curBg = 0;

const title = add([
    sprite("en_title"),
    pos(center().x - 25, 30),
    anchor("center"),
    z(50),
    tlsprite("title", ["en", "jp"])
]);

// #region Body

const BODY_POS = dynamicVec2(function(v) {
    v.x = k.width() / 2;
    v.y = k.height();
 });

const HAIR_POS = dynamicVec2(function(v) {
    v.x = BODY_POS.x;
    v.y = BODY_POS.y - 193;
})

const FACE_POS = dynamicVec2(function(v) {
    v.x = BODY_POS.x;
    v.y = BODY_POS.y - 86;
});

const OUTFIT_POS = dynamicVec2(function(v) {
    v.x = BODY_POS.x;
    v.y = BODY_POS.y;
});

const curSelection = {
    hair: 1,
    face: 0,
    outfit: 0,
}

const maxSelections = {
    hair: HAIR_COUNT,
    face: FACES_COUNT,
    outfit: OUTFITS_COUNT,
}

const drawBody = () => {
    drawSprite({
        sprite: "hair",
        anchor: "top",
        pos: HAIR_POS,
        frame: curSelection.hair - 1
    });

    drawSprite({
        sprite: "body",
        anchor: "bot",
        pos: BODY_POS,
    });

    drawSprite({
        sprite: "faces",
        anchor: "bot",
        pos: FACE_POS,
        frame: curSelection.face,
    });

    drawSprite({
        sprite: "outfits",
        anchor: "bot",
        pos: OUTFIT_POS,
        frame: curSelection.outfit,
    });

    drawSprite({
        sprite: "hair",
        anchor: "top",
        pos: HAIR_POS,
        frame: curSelection.hair,
    });
};

onDraw(() => {
    drawBody();
});

const neko = add([
    pos(BODY_POS.add(0, -158)),
    sprite("neko"),
    anchor("center"),
    z(layers.belowbody),
    "extra",
]);

const sorbet = add([
    pos(BODY_POS.add(-14, -178)),
    sprite("sorbet"),
    z(layers.belowbody),
    "extra",
]);

const flush = add([
    pos(BODY_POS.add(0, -118)),
    sprite("flush"),
    anchor("center"),
    z(layers.belowface),
    "extra",
]);

get("extra").forEach((obj) => obj.hidden = true);

// #endregion

/// gui /////////////////////////////////////////////////////////////////////////
const downloadButton = add([
    sprite("download"),
    color(74, 48, 82),
    anchor("center"),
    pos(25, 146),
    z(50),
    area(),
    downloader(),
    "bc",
]);

add([
    pos(25, 196),
    color(74, 48, 82),
    z(50),
    area(),
    anchor("center"),
    checkbox("guicheck", "incorrect", "", hideGui, showGui, "nohide"),
    "bc",
]);

const changeBG = add([
    sprite("palette"),
    anchor("center"),
    pos(title.pos.add(160, 0)),
    z(50),
    area(),
    {
        change() {
            // Set curBg as +1 unless it reaches the end of the array
            curBg = (curBg + 1) % bgs.length;
            setBackground(bgs[curBg]);
        }
    }
]);

changeBG.onClick(() => {
    changeBG.change();
});

const random = add([
    sprite("random"),
    color(74, 48, 82),
    anchor("center"),
    pos(25, 296),
    z(50),
    area(),
    "bc",
]);

random.onClick(randomPart);

add([
    pos(25, 246),
    color(74, 48, 82),
    z(50),
    area(),
    anchor("center"),
    checkbox("musiccheck", "incorrect", "",
        () => bgMusic.volume = 0,
        () => bgMusic.volume = 0.05,
        "nohide",
    ),
    "bc",
]);

// #region Create Things Btns
const POS_HAIR_BTN_L = dynamicVec2((v) => setVec2(v, BODY_POS.x - 85, BODY_POS.y - 160));
const POS_HAIR_BTN_R = dynamicVec2((v) => setVec2(v, BODY_POS.x + 85, BODY_POS.y - 160));
const POS_FACE_BTN_L = dynamicVec2((v) => setVec2(v, BODY_POS.x - 65, BODY_POS.y - 110));
const POS_FACE_BTN_R = dynamicVec2((v) => setVec2(v, BODY_POS.x + 65, BODY_POS.y - 110));
const POS_OUTFIT_BTN_L = dynamicVec2((v) => setVec2(v, BODY_POS.x - 70, BODY_POS.y - 28));
const POS_OUTFIT_BTN_R = dynamicVec2((v) => setVec2(v, BODY_POS.x + 70, BODY_POS.y - 28));

addButtons(POS_HAIR_BTN_L, POS_HAIR_BTN_R, "hair");
addButtons(POS_FACE_BTN_L, POS_FACE_BTN_R, "faces");
addButtons(POS_OUTFIT_BTN_L, POS_OUTFIT_BTN_R, "outfits");
// #endregion

// #region Create Accs Btns
const POS_FLUSH_BTN = dynamicVec2((v) => setVec2(v, HAIR_POS.x - 120, HAIR_POS.y - 80));
const POS_SORBET_BTN = dynamicVec2((v) => setVec2(v, BODY_POS.x - 24.5, BODY_POS.y - 80));
const POS_NEKO_BTN = dynamicVec2((v) => setVec2(v, BODY_POS.x + 120 - 24.5, BODY_POS.y - 80));

addSpriteCheckbox(
    POS_FLUSH_BTN,
    "flush",
    false,
    (check) => {
        flush.hidden = !check;
    }
);
// #endregion

add([
    pos(center().x - 120 - 24.5, 80),
    z(50),
    color(74, 48, 82),
    area(),
    anchor("center"),
    checkbox("checkbox", "correct", "sorbet_icon",
        () => sorbet.hidden = false,
        () => sorbet.hidden = true
    ),
    "gui",
    "bc",
]);

add([
    pos(center().x - 24.5, 80),
    color(74, 48, 82),
    z(50),
    area(),
    anchor("center"),
    checkbox("checkbox", "correct", "flush_icon",
        () => flush.hidden = false,
        () => flush.hidden = true
    ),
    "gui",
    "bc",
]);

add([
    pos(center().x + 120 - 24.5, 80),
    z(50),
    color(74, 48, 82),
    area(),
    anchor("center"),
    checkbox("checkbox", "correct", "neko_icon",
        () => neko.hidden = false,
        () => neko.hidden = true
    ),
    "gui",
    "bc",
]);

/// Some events
onHover("bc", (o) => {
    o.color = rgb(31, 16, 42);
});

onHoverEnd("bc", (o) => {
    o.color = rgb(74, 48, 82);
});

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

onKeyPress("s", () => {
    downloadButton.download();
});

/// functions ////////////////////////
function addLeftButton(pos, toChange) {
    addButton(pos, toChange, "left");
}

function addRightButton(pos, toChange) {
    addButton(pos, toChange, "right");
}

/**
 * Add buttons in the screen
 * 
 * @param {Vec2} pos1 - The position of the left button
 * @param {Vec2} pos2 - The position of the right button
 * @param {string} thing - The thing that will be changed
 */
function addButtons(pos1, pos2, thing) {
    addButton(pos1, thing, "left");
    addButton(pos2, thing, "right");
}

/**
 * Add a button to the screen
 * 
 * @param {Vec2} pos 
 * @param {string} thing 
 * @param {"left" | "right"} side 
 */
function addButton(pos, thing, side) {
    k.add([
        k.sprite("button", { flipX: side === "left" }),
        k.color(212, 110, 179),
        dynamicPos(() => pos),
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
    curSelection.hair = Math.round((Math.random() * (HAIR_COUNT - 0) + 0) / 2) * 2;
    curSelection.face = randi(FACES_COUNT);
    curSelection.outfit = randi(OUTFITS_COUNT);
}

function hideGui() {
    get("gui").forEach((g) => {
        if (!g.is("nohide")) g.hidden = true;
    });
}

function showGui() {
    get("gui").forEach((g) => {
        if (g.is("ahide")) {
            g.hidden = true;
        }
        else {
            if (g.is("check")) {
                g.hidden = !g.checked;
            }
            else {
                g.hidden = false;
            }
        }
    });
}


/**
 * Set a part of the character
 * 
 * @param {keyof typeof curSelection} part 
 * @param {number} step 
 */
function setPart(part, step = 1) {
    // avoid array out of bounds
    curSelection[part] = Math.max(0, Math.min(curSelection[part] + step, maxSelections[part]));
}

function pressButton(b, s) {
    let sum = b.is("left") ? -1 : 1;
    sum = b.is("hair") ? sum * 2 : sum;

    if (b.is("hair")) setPart("hair", sum);
    else if (b.is("faces")) setPart("face", sum);
    else if (b.is("outfits")) setPart("outfit", sum);
}

get("*").forEach((o) => {
    if (!o.is("area")) return;

    o.onHover(() => {
        c.use(sprite("pointer"));
    });

    o.onHoverEnd(() => {
        c.use(sprite("default"));
    });
});

// #region Lifecycle
onResize(() => {
    for (const update of updateVec2) {
        update()
    }

    for (const obj of updatePos) {
        obj.updateDynamicPos();
    }
})
// #endregion
