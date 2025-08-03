import { dynamicVec2, setVec2 } from "../dynamic.ts";
import { k } from "../kaplay.ts";

const LOGO_POS = dynamicVec2((v) => setVec2(v, k.width() / 2, 20));

export const drawLogo = () => {
    k.drawSprite({
        sprite: "logo",
        pos: LOGO_POS,
        anchor: "top",
    });
};
