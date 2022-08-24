import _k, { hairC, facesC, outfitsC } from "./main";
import checkbox from "./comp_checkbox";
import downloader from "./comp_downloader";
import { easings, tween, tweentypes } from "./easing.js"

export default () => scene("game", () => {
    const bgs = [
        rgb(141, 183, 255),
        rgb(131, 77, 196),
        rgb(255, 107, 107),
        rgb(181, 255, 141),
        rgb(255, 158, 141),
        rgb(189, 141, 255),
        rgb(189, 141, 255),
    
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

    /// the music 
    const bgMusic = play("chillaxation", { volume: 0.05, loop: true });

    console.log(audioCtx)
    /// bg //////////////////////////////////////
    const bg = add([
        pos(-3, -3),
        rect(width() + 6, height() + 6),
        color(141, 183, 255),
        {
            cur: 0,
        }
    ]);

    /// body ////////////////////////////////////
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

    const fronthair = add([
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

    /// gui /////////////////////////////////////
    add([
        sprite("download"),
        origin("center"),
        pos(23, 146),
        z(50),
        area(),
        downloader(),
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
        pos(23, 296),
        z(50),
        area(),
        "bc",
    ]);

    random.onClick(() => {
        hair.cur = Math.round((Math.random() * (hairC - 0) + 0) / 2) * 2;
        face.cur = randi(facesC);
        outfit.cur = randi(outfitsC);
        // bg.cur = randi(bgs.length);

        setPart2(hairC, "hair", "fronthair", true, false);
        setPart(facesC, "faces", true, false);
        setPart(outfitsC, "outfits", true, false);

        // changeBG.change();
    });

    add([
        sprite("title"),
        pos(center().x - 30, 20),
        origin("center"),
        z(50),
    ]);

    addButton(1, body.pos.add(-85, -160), "hair", "left");
    addButton(0, body.pos.add(83, -160), "hair", "right");

    addButton(1, body.pos.add(-65, -110), "faces", "left");
    addButton(0, body.pos.add(63, -110), "faces", "right");

    addButton(1, body.pos.add(-70, -28), "outfits", "left");
    addButton(0, body.pos.add(68, -28), "outfits", "right");

    add([
        pos(center().x - 120, 80),
        z(50),
        area({ width: 26, height: 26, offset: vec2(-7, 5) }),
        origin("center"),
        checkbox("checkbox", "correct", "sorbet_icon",
            () => sorbet.hidden = false,
            () => sorbet.hidden = true
        ),
        "gui",
        "bc",
    ]);

    add([
        pos(center().x, 80),
        z(50),
        area({ width: 26, height: 26, offset: vec2(-7, 5) }),
        origin("center"),
        checkbox("checkbox", "correct", "flush_icon",
            () => flush.hidden = false,
            () => flush.hidden = true
        ),
        "gui",
        "bc",
    ]);

    add([
        pos(center().x + 120, 80),
        z(50),
        area({ width: 26, height: 26, offset: vec2(-7, 5) }),
        origin("center"),
        checkbox("checkbox", "correct", "neko_icon",
            () => neko.hidden = false,
            () => neko.hidden = true
        ),
        "gui",
        "bc",
    ]);

    add([
        pos(25, 196),
        z(50),
        area(),
        origin("center"),
        checkbox("guicheck", "incorrect", "",
            () => every("gui", (g) => {
                if (!g.is("nohide")) g.hidden = true;
            }),
            () => every("gui", (g) => {
                if (g.is("ahide")) {
                    g.hidden = true;
                }
                else {
                    if (g.is("check")) {
                        console.log(g.checked);

                        g.hidden = !g.checked;
                    }
                    else {
                        g.hidden = false
                    }
                }
            }),
            "nohide",
            "ahide",
        ),
        "bc",
    ]);

    add([
        pos(23, 246),
        z(50),
        area(),
        origin("center"),
        checkbox("musiccheck", "incorrect", "",
            () => bgMusic.volume(0.0),
            () => bgMusic.volume(0.05),
            "nohide",
        ),
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
        text("the juicy edit\nby lajbel\n\ncredits to\n\nHibbityBibbityBop\nthe jazz music\n\nThe Juicy Sorbet\npublisher\n\nTheo\nTweenLib", { size: 16.2 }),
        pos(10, 10),
    ]);

    about.add([
        text("you are free to use you creations\nas you want\nthanks for play", { size: 12 }),
        pos(center().x, height() - 40),
        origin("center"),
    ]);

    about.add([
        sprite("catwithahotdog1"),
        pos(210, 10)
    ]);

    // camera effects
    camPos(-182, 162);

    add([
        pos(-182, 162),
        sprite("clicktostart"),
        origin("center"),
        scale(1.4),
        z(50),
    ]);

    add([
        sprite("about"),
        pos(width() - 40, height() - 40),
        area(),
        "camera_changer",
        "bc",
        "gui",
        {
            to: vec2(184 * 3, 0),
        }
    ]);

    add([
        sprite("arrow"),
        pos(width() + 5, height() - 40),
        area(),
        "camera_changer",
        "bc",
        "gui",
        {
            to: vec2(184, 0),
        }
    ]);

    const camHelper = add([
        pos(camPos()),
    ]);

    camHelper.onUpdate(() => camPos(camHelper.pos))

    tween(camHelper.pos, ["x"], 0.9, -182, 184, easings.easeOutBounce);

    onClick("camera_changer", (ch) => {
        tween(camHelper.pos, ["x"], 0.9, camHelper.pos.clone().x, ch.to.x, easings.easeOutBounce);
    });

    onHover("bc", (b) => b.color = rgb(44, 44, 44), (b) => b.color = rgb(255, 255, 255))
});

/// functions ////////////////////////
function addButton(number, w, thing, side) {
    const btn = add([
        sprite("gui", { frame: number }),
        pos(w),
        origin("center"),
        area(),
        color(212, 110, 179),
        z(10),
        "btn",
        "gui",
        thing,
        side,
    ]);

    btn.onHover(() => {
        btn.color = rgb(135, 100, 100);
    }, () => {
        btn.color = rgb(212, 110, 179);
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
    if (b.is("hair")) setPart2(hairC, "hair", "fronthair", s);
    else if (b.is("faces")) setPart(facesC, "faces", s);
    else if (b.is("outfits")) setPart(outfitsC, "outfits", s)
}