import { Vec2 } from "kaplay";
import { dynamicPos, dynamicScale } from "../dynamic";
import { k } from "../kaplay";
import { s } from "../shared";
import { onClickAndReleaseArea } from "../utils.ts";

const PADDING = 10;

/**
 * A color editing menu.
 */
export function addColorPalette() {
    const container = k.add([
        k.rect(k.width() - PADDING * 2, 200 - PADDING),
        k.pos(PADDING, PADDING),
    ]);

    onUpdate(() => {
        container.width = width() - PADDING * 2;
    });
}
