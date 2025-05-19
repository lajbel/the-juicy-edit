import { k } from "./kaplay";

const EN_CHARS = " ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890Ññ,.?!+-=_:;/\\¿¡@#'&*<>[]{}()$%€~`|";

k.loadSprite("about", "./sprites/about.png");
k.loadSprite("arrow", "./sprites/arrow.png");
k.loadSprite("body", "./sprites/body.png");
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

k.loadSprite("en_title", "./sprites/title.png");

k.loadSprite("hair", "./sprites/hair.png", { sliceX: 10, sliceY: 7 });
k.loadSprite("faces", "./sprites/faces.png", { sliceX: 7, sliceY: 6 });
k.loadSprite("outfits", "./sprites/outfits.png", { sliceX: 5, sliceY: 7 });

k.loadSound("chillaxation", "./sounds/chillaxation.mp3");

k.loadBitmapFont("juiceisntbelow", "./sprites/thejuiceisntbelow.png", 26, 37, { chars: EN_CHARS });

k.loadFont("happy", "./fonts/happy.ttf");