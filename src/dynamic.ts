import { Comp, GameObj, Vec2 } from "kaplay";
import { k } from "./kaplay";

export const updateVec2: (() => Vec2)[] = [];

/**
 * Set a dynamic vec2 that will be updated onResize
 * @param vec
 */
export function dynamicVec2(vec: (v: Vec2) => void) {
    const v = vec2();
    const update = vec.bind(null, v);

    updateVec2.push(update);
    update();

    return v;
}

export const updateDynamic: GameObj[] = [];

interface DynamicPosComp extends Comp {
    updateDynamicPos: () => void
}

/**
 * Create a dynamic pos component
 *
 * @param pos
 */
export function dynamicPos(pos: () => Vec2) : DynamicPosComp {
    return {
        id: "dynamicPos",
        add(this: GameObj) {
            this.use(k.pos(pos()));
            updateDynamic.push(this);
        },
        updateDynamicPos() {
            this.pos = pos();
        },
    };
}

interface DynamicScaleComp extends Comp {
    updateDynamicScale: () => void
}

/**
 * Create a dynamic scale component
 *
 * @param scale
 */
export function dynamicScale(scale: () => number) : DynamicScaleComp {
    return {
        id: "dynamicScale",
        add(this: GameObj) {
            this.use(k.scale(scale()));
            updateDynamic.push(this);
        },
        updateDynamicScale() {
            this.scale.x = scale();
            this.scale.y = scale();
        },
    };
}

/**
 * Set a vec2 to a specific x and y mutating the original vec2
 *
 * @param v
 * @param x
 * @param y
 */
export function setVec2(v: Vec2, x: number, y: number) {
    v.x = x;
    v.y = y;
}
