/**
 * @typedef {import("kaplay").Vec2} Vec2
 */

import { k } from "../main";
import { dynamicPos } from "../dynamic";

/**
 * A sprite that is a checkbox.
 * 
 * @param {Vec2} pos - The position of the checkbox.
 * @param {string} sprite - The sprite to use for the checkbox.
 * @param {boolean} enabled - Whether the checkbox is enabled or not.
 * @param {(check: boolean) => void} onCheck - The function to call when the checkbox is checked.
 */
export function addSpriteCheckbox(pos, sprite, enabled, onCheck) {
    const DISABLED_OPACITY = 0.5;
    const ENABLED_OPACITY = 1;
    const DISABLED_SCALE = 0.8;
    const ENABLED_SCALE = 1;

    const sprCheckbox = add([
        dynamicPos(() => pos), 
        k.sprite(sprite),
        k.area(),
        k.anchor("center"),
        k.opacity(enabled ? ENABLED_OPACITY : DISABLED_OPACITY),
        k.scale(enabled ? ENABLED_SCALE : DISABLED_SCALE),
        {
            checked: false,
        }
    ]);

    sprCheckbox.onClick(() => {
        sprCheckbox.checked = !sprCheckbox.checked;
        if (onCheck) onCheck(sprCheckbox.checked);
        let toOpacity = sprCheckbox.checked ? ENABLED_OPACITY : DISABLED_OPACITY;
        let toScale = sprCheckbox.checked ? ENABLED_SCALE : DISABLED_SCALE;

        k.tween(sprCheckbox.opacity, toOpacity, 0.1, (v) => {
            sprCheckbox.opacity = v;
        });

        k.tween(sprCheckbox.scale.x, toScale, 0.1, (v) => {
            sprCheckbox.scale = vec2(v);
        });
    });

    return sprCheckbox;
}