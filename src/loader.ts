import { k } from "./kaplay";
import { s } from "./shared.ts";

const EN_CHARS =
    " ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890Ññ,.?!+-=_:;/\\¿¡@#'&*<>[]{}()$%€~`|";

k.loadSprite("about", "./sprites/about.png");
k.loadSprite("arrow", "./sprites/arrow.png");
k.loadSprite("body", "./sprites/body.png");
k.loadSprite("button", "./sprites/button.png");
k.loadSprite("logo", "./sprites/logo/logo.png");
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
k.loadSprite("accessory_flush", "./sprites/accesories/accesories2.png");
k.loadSprite("accessory_neko", "./sprites/accesories/accesories3.png");
k.loadSprite("accessory_sorbet", "./sprites/accesories/accesories1.png");

k.loadSprite("en_title", "./sprites/title.png");

k.loadAseprite(
    "hairstyles",
    "./sprites/hairstyles/hairstyles.png",
    "./sprites/hairstyles/hairstyles.json",
).onLoad(d => {
    s.parts.hair = d.frames.length - 1;
});

k.loadAseprite(
    "tophairstyles",
    "./sprites/hairstyles/tophairstyles.png",
    "./sprites/hairstyles/tophairstyles.json",
).onLoad(d => {
    s.parts.hair = d.frames.length - 1;
});

k.loadAseprite(
    "faces",
    "./sprites/faces/faces.png",
    "./sprites/faces/faces.json",
).onLoad(d => {
    s.parts.face = d.frames.length - 1;
});

k.loadAseprite(
    "outfits",
    "./sprites/outfits/outfits.png",
    "./sprites/outfits/outfits.json",
).onLoad(d => {
    s.parts.outfit = d.frames.length - 1;
});

k.loadSound("chillaxation", "./sounds/chillaxation.mp3");

k.loadBitmapFont("juiceisntbelow", "./sprites/thejuiceisntbelow.png", 26, 37, {
    chars: EN_CHARS,
});

k.loadFont("happy", "./fonts/happy.ttf");
