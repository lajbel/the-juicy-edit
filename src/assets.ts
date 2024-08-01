import { EN_CHARS, faceItems, JP_CHARS } from "./config";
import { k } from "./engine";

k.loadSprite("about", "./sprites/about.png");
k.loadSprite("arrow", "./sprites/arrow.png");
k.loadSprite("human", "./sprites/human.png");
k.loadSprite("button", "./sprites/button.png");
k.loadSprite("catwithhotdog", "./sprites/catwithhotdog.png");
k.loadSprite("checkbox", "./sprites/checkbox.png");
k.loadSprite("correct", "./sprites/correct.png");
k.loadSprite("default", "./sprites/default.png");
k.loadSprite("download", "./sprites/download.png");
k.loadSprite("flush", "./sprites/flush.png");
k.loadSprite("flush_icon", "./sprites/flush_icon.png");
k.loadSprite("guicheck", "./sprites/guicheck.png");
k.loadSprite("incorrect", "./sprites/incorrect.png");
k.loadSprite("musiccheck", "./sprites/musiccheck.png");
k.loadSprite("neko", "./sprites/neko.png");
k.loadSprite("neko_icon", "./sprites/neko_icon.png");
k.loadSprite("palette", "./sprites/palette.png");
k.loadSprite("pointer", "./sprites/pointer.png");
k.loadSprite("random", "./sprites/random.png");
k.loadSprite("sorbet", "./sprites/sorbet.png");
k.loadSprite("sorbet_icon", "./sprites/sorbet_icon.png");

k.loadAseprite(
    "ui_pack",
    "./sprites/ui/ui_pack.png",
    "./sprites/ui/ui_pack.json",
);

const faces = k.loadAseprite(
    "faces",
    "./sprites/faces.png",
    "./sprites/faces.json",
);

k.loadSprite("en_title", "./sprites/title.png");
k.loadSprite("jp_title", "./sprites/jp_title.png");

k.loadSprite("hair", "./sprites/hair.png", { sliceX: 10, sliceY: 7 });
k.loadSprite("outfits", "./sprites/outfits.png", { sliceX: 5, sliceY: 7 });

k.loadSound("chillaxation", "./sounds/chillaxation.mp3");

k.loadBitmapFont("juiceisntbelow", "./sprites/thejuiceisntbelow.png", 26, 37, {
    chars: EN_CHARS,
});

k.loadBitmapFont("happy", "./fonts/happy_28x36.png", 28, 36);

k.loadBitmapFont(
    "en_juiceisntbelow",
    "./sprites/thejuiceisntbelow.png",
    26,
    37,
    { chars: EN_CHARS },
);
k.loadBitmapFont(
    "jp_juiceisntbelow",
    "./sprites/ジュースは下じゃありません.png",
    26,
    37,
    { chars: JP_CHARS },
);

faces.onLoad((data) => {
    data.frames.forEach((q, i) => {
        faceItems.push({
            id: i,
            unlocked: true,
        });
    });
});
