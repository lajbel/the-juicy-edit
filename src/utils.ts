import type { AreaComp, GameObj, KEventController, MouseButton } from "kaplay";
import { k } from "./kaplay.ts";
import { s } from "./shared.ts";

export const onClickAndReleaseArea = (
    btn: MouseButton,
    area: GameObj<AreaComp>,
    ev: () => any,
) => {
    let clicked = false;

    const press = onMousePress(btn, () => {
        clicked = true;
    });

    const release = onMouseRelease(btn, () => {
        if (clicked) {
            clicked = false;
            if (area.isHovering()) {
                ev();
            }
        }
    });

    const controller: KEventController = {
        cancel() {
            press.cancel();
            release.cancel();
        },
        set paused(p: boolean) {
            press.paused = p;
            release.paused = p;
        },
        get paused() {
            if (press.paused && release.paused) return true;
            return false;
        },
    };

    return controller;
};

export function loadCollection(
    name: string,
    accesories?: string[],
) {
    s.collections[name] = {
        accesories: [],
        parts: {
            face: [],
            hair: [],
            outfit: [],
        },
    };
    s.enabledCollections[name] = true;

    return k.load(
        new Promise((resolve, reject) => {
            k.loadSprite(
                `${name}_potrait`,
                `./sprites/collections/${name}/potrait.png`,
            );

            k.loadAseprite(
                `${name}_hairstyles`,
                `./sprites/collections/${name}/hairstyles/hairstyles.png`,
                `./sprites/collections/${name}/hairstyles/hairstyles.json`,
            ).onLoad(data => {
                let frame = 0;

                for (let i = s.curIds.hair; i < data.frames.length; i++) {
                    s.collections[name].parts.hair.push({
                        id: i,
                        kind: "hair",
                        topSpritesheet: `${name}_tophairstyles`,
                        bottomSpritesheet: `${name}_hairstyles`,
                        frame: frame,
                    });

                    frame++;
                }

                s.curIds.hair = data.frames.length;
            });

            k.loadAseprite(
                `${name}_tophairstyles`,
                `./sprites/collections/${name}/hairstyles/tophairstyles.png`,
                `./sprites/collections/${name}/hairstyles/tophairstyles.json`,
            );

            k.loadAseprite(
                `${name}_faces`,
                `./sprites/collections/${name}/faces/faces.png`,
                `./sprites/collections/${name}/faces/faces.json`,
            ).onLoad((data) => {
                let frame = 0;

                for (let i = s.curIds.face; i < data.frames.length; i++) {
                    s.collections[name].parts.face.push({
                        id: i,
                        kind: "face",
                        spritesheet: `${name}_faces`,
                        frame: frame,
                    });

                    frame++;
                }

                s.curIds.face = data.frames.length;
            });

            k.loadAseprite(
                `${name}_outfits`,
                `./sprites/collections/${name}/outfits/outfits.png`,
                `./sprites/collections/${name}/outfits/outfits.json`,
            ).onLoad((data) => {
                let frame = 0;

                for (let i = s.curIds.outfit; i < data.frames.length; i++) {
                    s.collections[name].parts.outfit.push({
                        id: i,
                        kind: "outfit",
                        spritesheet: `${name}_outfits`,
                        frame: frame,
                    });

                    frame++;
                }

                s.curIds.outfit = data.frames.length;
            });

            resolve(undefined);
        }),
    );
}
