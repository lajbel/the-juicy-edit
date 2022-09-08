import kaboom from "kaboom";
import { checkbox, downloader, hoverOnce } from "./components";
import { easings, tween, tweentypes } from "./easing.js"

// initialize context
export default kaboom({
    width: 364,
    height: 324,
    letterbox: true,
    stretch: true,
    background: [141, 183, 255],
    touchToMouse: true,
    debug: true,
    font: "juiceisntbelow",
    canvas: document.querySelector("#myGame"),
});

// configuration & variables
const hairCount = 35;
const facesCount = 40;
const outfitsCount = 35;
const gameChars = " ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890Ññ,.?!+-=_:;/\\¿¡@#'&*<>[]{}()$%€~`|";
const japChars = " ァアィイゥウェエォオ";

const bgs = [
    rgb(141, 183, 255),
    rgb(131, 77, 196),
    rgb(255, 107, 107),
    rgb(181, 255, 141),
    rgb(255, 158, 141),
    rgb(189, 141, 255),
    rgb(189, 141, 255),
];

const rooms = [
    camPos().clone(),
    camPos().clone().add(width(), 0),
]

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
loadSprite("title", "./sprites/title.png");

loadSprite("hair", "./sprites/hair.png", { sliceX: 10, sliceY: 7 });
loadSprite("faces", "./sprites/faces.png", { sliceX: 7, sliceY: 6 });
loadSprite("outfits", "./sprites/outfits.png", { sliceX: 5, sliceY: 7 });

loadSound("chillaxation", "./sounds/chillaxation.mp3");

loadBitmapFont("juiceisntbelow", "./sprites/thejuiceisntbelow.png", 26, 37, { chars: gameChars });

// camera ///////////////////////////////////////////////////////////////////////
const camHelper = add([
    pos(camPos().sub(width(), 0)),
]);

camHelper.onUpdate(() => camPos(camHelper.pos));

onClick("camera_changer", (ch) => {
    tween(camHelper.pos, ["x"], 0.9, camHelper.pos.clone().x, ch.to.x, easings.easeOutBounce);
});

// cursor ///////////////////////////////////////////////////////////////////////
onLoad(() => {
    const attr = document.getElementById("myGame").attributes.style.nodeValue;
    document.getElementById("myGame").setAttribute("style", attr.replace("default", "none;"));
})

const canvasIsHover = () => canvas.parentElement.querySelector(':hover') === canvas;

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

// click to start ///////////////////////////////////////////////////////////////
add([
    text("click\n to\nstart"),
    color(74, 48, 82),
    origin("center"),
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

    tween(camHelper.pos, ["x"], 1, camHelper.pos.clone().x, 184, easings.easeOutBounce);

    cts.destroy();
});

/// bg //////////////////////////////////////////////////////////////////////////
const bg = add([
    pos(0, 0),
    rect(width(), height()),
    color(bgs[0]),
    {
        cur: 0,
    },
]);

add([
    sprite("title"),
    pos(center().x - 30, 20),
    origin("center"),
    z(50),
]);

/// body ////////////////////////////////////////////////////////////////////////
const body = add([
    sprite("body"),
    pos(center().x, height()),
    origin("bot"),
    z(layers.body),
]);

const hair = add([
    pos(body.pos.add(0, -193)),
    origin("top"),
    z(layers.hair),
    "hair",
    {
        cur: 0,
    },
]);

add([
    pos(body.pos.add(0, -193)),
    origin("top"),
    z(layers.fronthair),
    "fronthair",
]);

const face = add([
    pos(center().x, height() - 86),
    origin("bot"),
    z(layers.face),
    "faces",
    {
        cur: 0,
    }
]);

const outfit = add([
    pos(center().x, height()),
    origin("bot"),
    z(layers.outfit),
    "outfits",
    {
        cur: 0,
    }
]);

const neko = add([
    pos(body.pos.add(0, -158)),
    sprite("neko"),
    origin("center"),
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
    origin("center"),
    z(layers.belowface),
    "extra",
]);

every("extra", (obj) => obj.hidden = true);

/// gui /////////////////////////////////////////////////////////////////////////
add([
    sprite("download"),
    origin("center"),
    pos(25, 146),
    z(50),
    area(),
    hoverOnce(),
    downloader(),
    "bc",
]);

add([
    pos(25, 196),
    z(50),
    area(),
    origin("center"),
    hoverOnce(),
    checkbox("guicheck", "incorrect", "", hideGui, showGui, "nohide", "ahide"),
    "bc",
]);

const changeBG = add([
    sprite("palette"),
    origin("center"),
    pos(306, 23),
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
    origin("center"),
    pos(25, 296),
    z(50),
    area(),
    hoverOnce(),
    "bc",
]);

random.onClick(randomPart);

add([
    pos(25, 246),
    z(50),
    area(),
    hoverOnce(),
    origin("center"),
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
    area(),
    hoverOnce(),
    origin("center"),
    checkbox("checkbox", "correct", "sorbet_icon",
        () => sorbet.hidden = false,
        () => sorbet.hidden = true
    ),
    "gui",
    "bc",
]);

add([
    pos(center().x - 24.5, 80),
    z(50),
    area(),
    hoverOnce(),
    origin("center"),
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
    area(),
    hoverOnce(),
    origin("center"),
    checkbox("checkbox", "correct", "neko_icon",
        () => neko.hidden = false,
        () => neko.hidden = true
    ),
    "gui",
    "bc",
]);

// buttons things
onClick("left", (b) => btn(b, true));
onClick("right", (b) => btn(b, false));

// about screen
const about = add([
    pos(width() + 6, 0),
]);

about.add([
    text("the juicy edit", { size: 22 }),
    pos(4, 10),
    color(74, 48, 82),
]);

about.add([
    text("by lajbel", { size: 16 }),
    pos(4, 30),
    color(74, 48, 82),
]);

about.add([
    text("Music", { size: 18 }),
    pos(4, 54),
    color(74, 48, 82),
]);

about.add([
    text("HibbityBibbityBop", { size: 16 }),
    pos(4, 72),
    color(74, 48, 82),
]);

about.add([
    text("Publishing", { size: 18 }),
    pos(4, 96),
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
    text("you are free to use you creations\nas you want\nthanks for play", { size: 12 }),
    pos(center().x, height() - 40),
    origin("center"),
    color(74, 48, 82),
]);

about.add([
    sprite("catwithhotdog"),
    pos(230, 10),
]);

add([
    sprite("about"),
    origin("botright"),
    pos(width() - 3, height() - 3),
    area(),
    hoverOnce(),
    "camera_changer",
    "bc",
    "gui",
    {
        to: rooms[1],
    }
]);

add([
    sprite("arrow"),
    origin("botleft"),
    pos(width() + 3, height() - 5),
    area(),
    hoverOnce(),
    "camera_changer",
    "bc",
    "gui",
    {
        to: rooms[0],
    }
]);

every("bc", (o) => {
    o.color = rgb(74, 48, 82);

    o.onHoverOnce(() => {
        o.color = rgb(31, 16, 42);
    }, () => {
        o.color = rgb(74, 48, 82);
    });
});

// keys /////////////////////////////////////////////////////////////////////////
onKeyPressRepeat("r", randomPart);

/// functions ////////////////////////
function addLeftButton(pos, toChange) {
    addButton(1, pos, toChange, "left");
}

function addRightButton(pos, toChange) {
    addButton(0, pos, toChange, "right");
}

function addButton(number, w, thing, side) {
    const btn = add([
        sprite("button", { flipX: number }),
        pos(w),
        origin("center"),
        area(),
        z(10),
        hoverOnce(),
        "btn",
        "gui",
        thing,
        side,
    ]);

    btn.color = rgb(212, 110, 179);

    btn.onHoverOnce(() => {
        btn.color = rgb(135, 62, 132);
    }, () => {
        btn.color = rgb(212, 110, 179);
    });
}

function randomPart() {
    hair.cur = Math.round((Math.random() * (hairCount - 0) + 0) / 2) * 2;
    face.cur = randi(facesCount);
    outfit.cur = randi(outfitsCount);

    setPart2(hairCount, "hair", "fronthair", true, false);
    setPart(facesCount, "faces", true, false);
    setPart(outfitsCount, "outfits", true, false);
}

function hideGui() {
    every("gui", (g) => {
        if (!g.is("nohide")) g.hidden = true;
    });
}

function showGui() {
    every("gui", (g) => {
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
    if (b.is("hair")) setPart2(hairCount, "hair", "fronthair", s);
    else if (b.is("faces")) setPart(facesCount, "faces", s);
    else if (b.is("outfits")) setPart(outfitsCount, "outfits", s)
}

every((o) => {
    if (!o.is("area")) return;

    o.on("hoverEnter", () => {
        c.use(sprite("pointer"));
    });

    o.on("hoverExit", () => {
        c.use(sprite("default"));
    });
});
