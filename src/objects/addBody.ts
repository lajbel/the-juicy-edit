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
    // if (s.enabledAccesories.sorbet) {
    //     drawSprite({
    //         sprite: "sorbet",
    //         pos: SORBET_POS,
    //         anchor: "bot",
    //         scale: vec2(s.zoom),
    //     });
    // }

    // if (s.enabledAccesories.neko) {
    //     drawSprite({
    //         sprite: "neko",
    //         anchor: "bot",
    //         pos: NEKO_POS,
    //         scale: vec2(s.zoom),
    //     });
    // }

    if (s.curParts.hair) {
        drawSprite({
            sprite: s.curParts.hair.bottomSpritesheet,
            anchor: "bot",
            pos: HEAD_POS,
            frame: s.curParts.hair.frame,
            scale: vec2(s.zoom),
        });
    }

    drawSprite({
        sprite: "body",
        anchor: "bot",
        pos: BODY_POS,
        scale: vec2(s.zoom),
    });

    if (s.curParts.face) {
        drawSprite({
            sprite: s.curParts.face.spritesheet,
            anchor: "bot",
            pos: FACE_POS,
            frame: s.curParts.face.frame,
            scale: vec2(s.zoom),
        });
    }

    if (s.curParts.outfit) {
        drawSprite({
            sprite: s.curParts.outfit.spritesheet,
            anchor: "bot",
            pos: BODY_POS,
            frame: s.curParts.outfit.frame,
            scale: vec2(s.zoom),
        });
    }

    // if (s.enabledAccesories.flush) {
    //     drawSprite({
    //         sprite: "flush",
    //         anchor: "bot",
    //         pos: FLUSH_POS,
    //         scale: vec2(s.zoom),
    //     });
    // }

    if (s.curParts.hair) {
        drawSprite({
            sprite: s.curParts.hair.topSpritesheet,
            anchor: "bot",
            pos: HEAD_POS,
            frame: s.curParts.hair.frame,
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

                tween(160, 0, 0.1, (v) => {
                    this.pos.y = v;
                }, k.easings.easeInOutQuad);

                tweening = false;
            },
        },
    ]);

    const bodyBox = k.add([]);

    return [body, bodyBox] as const;
}
