export default function loadAssets() {
    loadSprite("birdy", "./sprites/birdy.png");
    loadSprite("random", "sprites/random.png");
    loadSprite("body", "./sprites/body.png");
    loadSprite("download", "./sprites/download.png");
    loadSprite("gui", "./sprites/gui.png", {
        sliceX: 2,
        sliceY: 1,
    });
    loadSprite("checkbox", "./sprites/checkbox.png");
    loadSprite("guicheck", "./sprites/guicheck.png");
    loadSprite("musiccheck", "./sprites/musiccheck.png");
    loadSprite("hair", "./sprites/hair.png", {
        sliceX: 10,
        sliceY: 7,
    });
    loadSprite("faces", "./sprites/faces.png", {
        sliceX: 7,
        sliceY: 6,
    });
    loadSprite("outfits", "./sprites/outfits.png", {
        sliceX: 5,
        sliceY: 7,
    });
    loadSprite("title", "./sprites/title.png");
    loadSprite("sorbet", "./sprites/sorbet.png");
    loadSprite("sorbet_icon", "./sprites/sorbet_icon.png");
    loadSprite("flush", "./sprites/flush.png");
    loadSprite("flush_icon", "./sprites/flush_icon.png");
    loadSprite("neko", "./sprites/neko.png")
    loadSprite("neko_icon", "./sprites/neko_icon.png");

    loadSprite("clicktostart", "./sprites/clicktostart.png");
    loadSound("chillaxation", "./sounds/chillaxation.mp3");

    loadSprite("palette", "./sprites/palette.png");

    loadSprite("correct", "./sprites/correct.png");
    loadSprite("incorrect", "./sprites/incorrect.png");
    loadSprite("arrow", "sprites/arrow.png");
    loadSprite("about", "sprites/about.png");

    loadSprite("catwithahotdog1", "sprites/catwithahotdog1.png");
    loadSprite("myavatar", "sprites/myavatar.png");

    loadBitmapFont("juiceisntbelow", "./sprites/thejuiceisntbelow.png", 26, 37, { chars: " ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890Ññ,.?!" });

    onLoad(() => {
        add([
            sprite("clicktostart"),
            origin("center"),
            scale(1.4),
            pos(center()),
            z(50),
        ]);

        onTouchStart(() => {
            go("game")
        });

        onClick(() => {
            go("game")
        });
    })
}