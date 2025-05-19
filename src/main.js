import kaboom from "kaplay";
import "kaplay/global";
import { checkbox, downloader, tltext, tlsprite } from "./components";

// Start the Kaboom game
export default kaboom({
    width: 576,
    height: 324,
    letterbox: true,
    stretch: true,
    background: [141, 183, 255],
    touchToMouse: true,
    debug: true,
    font: "en_juiceisntbelow",
});

onUpdate(() => {
    debug.log(debug.fps())
})

// configuration & variables
const HAIR_COUNT = 35;
const FACES_COUNT = 40;
const OUTFITS_COUNT = 35;

const EN_CHARS = " ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890Ññ,.?!+-=_:;/\\¿¡@#'&*<>[]{}()$%€~`|";
const JP_CHARS = " 下遊日本人描飲売使アプクリシジユュスネッツエデイトャュョィあいなだはぶじゃりまんしてすでがとうございのをつっxび楽音";

const bgs = [
    rgb(141, 183, 255),
    rgb(57, 9, 71),
];

const rooms = [
    camPos().clone(),
    camPos().clone().add(width(), 0),
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

let bgMusic;

// load assets //////////////////////////////////////////////////////////////////
loadSprite("about", "./sprites/about.png");
loadSprite("arrow", "./sprites/arrow.png");
loadSprite("body", "./sprites/body.png");
loadSprite("button", "./sprites/button.png");
loadSprite("catwithhotdog", "./sprites/catwithhotdog.png");
loadSprite("checkbox", "./sprites/checkbox.png");
loadSprite("correct", "./sprites/correct.png");
loadSprite("default", "./sprites/default.png");
loadSprite("download", "./sprites/download.png");
loadSprite("flush", "./sprites/flush.png");
loadSprite("flush_icon", "./sprites/flush_icon.png");
loadSprite("guicheck", "./sprites/guicheck.png");
loadSprite("incorrect", "./sprites/incorrect.png");
loadSprite("musiccheck", "./sprites/musiccheck.png");
loadSprite("neko", "./sprites/neko.png");
loadSprite("neko_icon", "./sprites/neko_icon.png");
loadSprite("palette", "./sprites/palette.png");
loadSprite("pointer", "./sprites/pointer.png");
loadSprite("random", "./sprites/random.png");
loadSprite("sorbet", "./sprites/sorbet.png");
loadSprite("sorbet_icon", "./sprites/sorbet_icon.png");

loadSprite("en_title", "./sprites/title.png");
loadSprite("jp_title", "./sprites/jp_title.png");

loadSprite("hair", "./sprites/hair.png", { sliceX: 10, sliceY: 7 });
loadSprite("faces", "./sprites/faces.png", { sliceX: 7, sliceY: 6 });
loadSprite("outfits", "./sprites/outfits.png", { sliceX: 5, sliceY: 7 });

loadSound("chillaxation", "./sounds/chillaxation.mp3");

loadBitmapFont("juiceisntbelow", "./sprites/thejuiceisntbelow.png", 26, 37, { chars: EN_CHARS });
loadBitmapFont("en_juiceisntbelow", "./sprites/thejuiceisntbelow.png", 26, 37, { chars: EN_CHARS });
loadBitmapFont("jp_juiceisntbelow", "./sprites/ジュースは下じゃありません.png", 26, 37, { chars: JP_CHARS });

// Camera Objects & Helper ////////////////////////////////////////////////////////////////////
const camHelper = add([
    pos(camPos().sub(width(), 0)),
]);

camHelper.onUpdate(() => camPos(camHelper.pos));

onClick("camera_changer", (ch) => {
    tween(camHelper.pos.x, ch.to.x, 0.9, (val) => camHelper.pos.x = val, easings.easeOutBounce)
});

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

onUpdate(() => {
    const canvasIsHovered = canvasIsHover();

    if (canvasIsHovered !== c.h) {
        if (canvasIsHovered === true) c.hidden = false;
        else c.hidden = true;

        c.h = canvasIsHover();
    }

    c.pos = mousePos();
});

// Click to start ///////////////////////////////////////////////////////////////
add([
    text("click\n to\nstart", { size: 36, font: "juiceisntbelow" }),
    tltext([
        { lang: "en", text: "click\n\ to\nstart" },
        { lang: "jp", text: "クリックして\n遊びます" }
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
    tween(camHelper.pos.x, rooms[0].x, 0.9, (val) => camHelper.pos.x = val, easings.easeOutBounce)
    bgMusic = play("chillaxation", { volume: 0.05, loop: true });

    cts.destroy();
});

/// First UI and Scenario //////////////////////////////////////////////////////////////////////////
const bg = add([
    pos(0, 0),
    rect(width(), height()),
    color(bgs[0]),
    {
        cur: 0,
    },
]);

const title = add([
    sprite("en_title"),
    pos(center().x - 25, 30),
    anchor("center"),
    z(50),
    tlsprite("title", ["en", "jp"])
]);

/// Body parts ////////////////////////////////////////////////////////////////////////
const body = add([
    sprite("body"),
    pos(center().x, height()),
    anchor("bot"),
    z(layers.body),
]);

const hair = add([
    pos(body.pos.add(0, -193)),
    anchor("top"),
    z(layers.hair),
    "hair",
    {
        cur: 0,
    },
]);

add([
    pos(body.pos.add(0, -193)),
    anchor("top"),
    z(layers.fronthair),
    "fronthair",
]);

const face = add([
    pos(center().x, height() - 86),
    anchor("bot"),
    z(layers.face),
    "faces",
    {
        cur: 0,
    }
]);

const outfit = add([
    pos(center().x, height()),
    anchor("bot"),
    z(layers.outfit),
    "outfits",
    {
        cur: 0,
    }
]);

const neko = add([
    pos(body.pos.add(0, -158)),
    sprite("neko"),
    anchor("center"),
    z(layers.belowbody),
    "extra",
]);

const sorbet = add([
    pos(body.pos.add(-14, -178)),
    sprite("sorbet"),
    z(layers.belowbody),
    "extra",
]);

const flush = add([
    pos(body.pos.add(0, -118)),
    sprite("flush"),
    anchor("center"),
    z(layers.belowface),
    "extra",
]);

get("extra").forEach((obj) => obj.hidden = true);

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
    checkbox("guicheck", "incorrect", "", hideGui, showGui, "nohide", "ahide"),
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
            if (bg.cur >= bgs.length) bg.cur = 0;

            bg.color = bgs[bg.cur];
        }
    }
]);

changeBG.onClick(() => {
    bg.cur++

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
        () => bgMusic.volume(0.0),
        () => bgMusic.volume(0.05),
        "nohide",
    ),
    "bc",
]);

addLeftButton(body.pos.add(-85, -160), "hair");
addRightButton(body.pos.add(83, -160), "hair");

addLeftButton(body.pos.add(-65, -110), "faces");
addRightButton(body.pos.add(63, -110), "faces");

addLeftButton(body.pos.add(-70, -28), "outfits");
addRightButton(body.pos.add(68, -28), "outfits");

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

// about screen
const about = add([
    pos(width() + 6, 0),
]);

add([
    text("the juicy edit", { size: 22, font: "juiceisntbelow" }),
    tltext([
        { lang: "en", text: "the juicy edit" },
        { lang: "jp", text: "ジュxスディト" }
    ]),
    pos(about.pos.add(4, 10)),
    color(74, 48, 82),
]);

about.add([
    text("by lajbel", { size: 16 }),
    pos(4, 30),
    color(74, 48, 82),
]);

add([
    text("Music", { size: 18, font: "juiceisntbelow" }),
    tltext([
        { lang: "en", text: "Music" },
        { lang: "jp", text: "楽音" },
    ]),
    pos(about.pos.add(4, 54)),
    color(74, 48, 82),
]);

about.add([
    text("HibbityBibbityBop", { size: 16 }),
    pos(4, 72),
    color(74, 48, 82),
]);

add([
    text("Publishing", { size: 18, font: "juiceisntbelow" }),
    tltext([
        { lang: "en", text: "Publishing" },
        { lang: "jp", text: "出版社" }
    ]),
    pos(about.pos.add(4, 96)),
    color(74, 48, 82),
]);

about.add([
    text("The Juicy Sorbet", { size: 16 }),
    pos(4, 114),
    color(74, 48, 82),
]);

about.add([
    text("Japanese Translation", { size: 18 }),
    pos(4, 138),
    color(74, 48, 82),
]);

about.add([
    text("Hoshi", { size: 16 }),
    pos(4, 156),
    color(74, 48, 82),
]);

about.add([
    sprite("catwithhotdog"),
    pos(230, 10),
]);

add([
    sprite("about"),
    anchor("topright"),
    color(74, 48, 82),
    pos(width() - 3, 3),
    area(),
    "camera_changer",
    "bc",
    "gui",
    {
        to: rooms[1],
    }
]);

add([
    sprite("arrow"),
    anchor("botleft"),
    color(74, 48, 82),
    pos(width() + 3, height() - 5),
    area(),
    "camera_changer",
    "bc",
    "gui",
    {
        to: rooms[0],
    }
]);

const changeJp = add([
    text("jp"),
    color(74, 48, 82),
    pos(about.pos.add(width() - 10, height() - 10)),
    area(),
    anchor("botright"),
    "bc",
]);

const changeEn = add([
    text("en"),
    pos(changeJp.pos.sub(60, 0)),
    color(74, 48, 82),
    area(),
    anchor("botright"),
    "bc",
]);

changeEn.onClick(() => {
    get("tltext").forEach((t) => {
        if (t.lang == "en") return;

        t.changeLang("en");
    });

    get("tlsprite").forEach((t) => {
        if (t.lang == "en") return;

        t.changeLang("en");
    });
});

changeJp.onClick(() => {
    get("tltext").forEach((t) => {
        if (t.lang == "jp") return;

        t.changeLang("jp");
    });

    get("tlsprite").forEach((t) => {
        if (t.lang == "jp") return;

        t.changeLang("jp");
    });
});

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
    btn(b, true);
});

onClick("right", (b) => {
    btn(b, false);
});

// keys /////////////////////////////////////////////////////////////////////////
onKeyPressRepeat("r", randomPart);

onKeyPress("s", () => {
    downloadButton.download();
});

/// functions ////////////////////////
function addLeftButton(pos, toChange) {
    addButton(1, pos, toChange, "left");
}

function addRightButton(pos, toChange) {
    addButton(0, pos, toChange, "right");
}

function addButton(number, w, thing, side) {
    add([
        sprite("button", { flipX: number }),
        color(212, 110, 179),
        pos(w),
        anchor("center"),
        area(),
        z(10),
        "btn",
        "gui",
        thing,
        side,
    ]);
}

function randomPart() {
    hair.cur = Math.round((Math.random() * (HAIR_COUNT - 0) + 0) / 2) * 2;
    face.cur = randi(FACES_COUNT);
    outfit.cur = randi(OUTFITS_COUNT);

    setPart2(HAIR_COUNT, "hair", "fronthair", true, false);
    setPart(FACES_COUNT, "faces", true, false);
    setPart(OUTFITS_COUNT, "outfits", true, false);
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

function setPart(count, tag, sub, set = true) {
    const obj = get(tag)[0];

    if (set) {
        if (sub) obj.cur--;
        else obj.cur++;

        if (obj.cur < 0) obj.cur = count;
        else if (obj.cur > count) obj.cur = 0;
    }

    if (obj.cur === 0) obj.unuse("sprite");
    else obj.use(sprite(tag, { frame: obj.cur - 1 }))
}

function setPart2(count, tag, tag2, sub, set = true) {
    const obj = get(tag)[0];
    const obj2 = get(tag2)[0];

    if (set) {
        if (sub) obj.cur = obj.cur - 2;
        else obj.cur = obj.cur + 2;

        if (obj.cur < 0) obj.cur = count * 2;
        else if (obj.cur > count * 2) obj.cur = 0;
    }

    if (obj.cur == 0) {
        obj.unuse("sprite");
        obj2.unuse("sprite");
    }
    else {
        obj.use(sprite(tag, { frame: obj.cur - 2 }))
        obj2.use(sprite(tag, { frame: obj.cur - 1 }))
    }
}

function btn(b, s) {
    if (b.is("hair")) setPart2(HAIR_COUNT, "hair", "fronthair", s);
    else if (b.is("faces")) setPart(FACES_COUNT, "faces", s);
    else if (b.is("outfits")) setPart(OUTFITS_COUNT, "outfits", s)
}

getAll().forEach((o) => {
    if (!o.is("area")) return;

    o.onHover(() => {
        c.use(sprite("pointer"));
    });

    o.onHoverEnd(() => {
        c.use(sprite("default"));
    });
});
