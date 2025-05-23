import { dynamicScale, dynamicVec2, setVec2 } from "../dynamic.ts";
import { k } from "../kaplay.ts";
import { s } from "../shared.ts";

export const BODY_POS = dynamicVec2((v) =>
    setVec2(v, k.width() / 2, k.height())
);

export const HEAD_POS = dynamicVec2((v) =>
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

export const drawBody = () => {
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

export function addBody() {
    let tweening = false;

    const body = add([
        pos(0, 0),
        {
            draw() {
                drawBody();
            },
            async roll() {
                if (tweening) return;
                tweening = true;

                await tween(0, 160, 0.1, (v) => {
                    this.pos.y = v;
                }, k.easings.easeInOutQuad);

                s.curParts.hair =
                    Math.round((Math.random() * (s.parts.hair - 0) + 0) / 2)
                    * 2;
                s.curParts.face = randi(s.parts.face);
                s.curParts.outfit = randi(s.parts.outfit);

                tween(160, 0, 0.1, (v) => {
                    this.pos.y = v;
                }, k.easings.easeInOutQuad);

                tweening = false;
            },
        },
    ]);

    const bodyBox = k.add([
        k.sprite("body"),
        k.area(),
        k.anchor("bot"),
        k.pos(BODY_POS.x, BODY_POS.y),
        k.opacity(0),
        dynamicScale(() => s.zoom),
    ]);

    return [body, bodyBox] as const;
}
