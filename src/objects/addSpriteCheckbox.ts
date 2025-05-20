import { Vec2 } from "kaplay";
import { dynamicPos, dynamicScale } from "../dynamic";
import { k } from "../kaplay";
import { s } from "../shared";

/**
 * A sprite that is a checkbox.
 *
 * @param pos - The position of the checkbox.
 * @param sprite - The sprite to use for the checkbox.
 * @param areaSize - The size of the area to use for the checkbox.
 * @param enabled - Whether the checkbox is enabled or not.
 * @param onCheck - The function to call when the checkbox is checked.
 */
export function addSpriteCheckbox(
    pos: Vec2,
    sprite: string,
    areaSize: Vec2,
    enabled: boolean,
    onCheck: (check: boolean) => void,
) {
    const DISABLED_OPACITY = 0.5;
    const ENABLED_OPACITY = 1;
    const DISABLED_SCALE = 0.8;
    const ENABLED_SCALE = 1;
    let activeScale = 0.8;

    const sprCheckbox = add([
        dynamicPos(() => pos),
        dynamicScale(() => s.zoom * activeScale),
        k.sprite(sprite),
        k.area({
            shape: new k.Rect(k.vec2(0.5, 0.5), areaSize.x, areaSize.y),
        }),
        k.anchor("center"),
        k.opacity(enabled ? ENABLED_OPACITY : DISABLED_OPACITY),
        k.scale(enabled ? ENABLED_SCALE : DISABLED_SCALE),
        {
            checked: false,
        },
    ]);

    sprCheckbox.onClick(() => {
        sprCheckbox.checked = !sprCheckbox.checked;
        if (onCheck) onCheck(sprCheckbox.checked);
        let toOpacity = sprCheckbox.checked
            ? ENABLED_OPACITY
            : DISABLED_OPACITY;
        let toScale = sprCheckbox.checked ? ENABLED_SCALE : DISABLED_SCALE;

        k.tween(sprCheckbox.opacity, toOpacity, 0.1, (v) => {
            sprCheckbox.opacity = v;
        });

        k.tween(sprCheckbox.scale.x, toScale, 0.1, (v) => {
            activeScale = v;
        });
    });

    return sprCheckbox;
}
