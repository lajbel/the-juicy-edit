import { k } from "../kaplay";

const PADDING = 10;

/**
 * A color editing menu.
 */
export function addColorPalette() {
    const container = k.add([
        k.rect(k.width() - PADDING * 2, 200 - PADDING),
        k.pos(PADDING, PADDING),
    ]);

    k.onUpdate(() => {
        container.width = k.width() - PADDING * 2;
    });
}
