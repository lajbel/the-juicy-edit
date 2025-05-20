import { k } from "./kaplay";

/**
 * @typedef {import("kaplay").Vec2} Vec2
 * @typedef {import("kaplay").GameObj} GameObj
 */

/** @type { (() => Vec2)[] } */
export const updateVec2 = [];

/**
 * Set a dynamic vec2 that will be updated onResize
 *
 * @param {(v: Vec2) => void} vec
 */
export function dynamicVec2(vec) {
    const v = vec2();
    const update = vec.bind(null, v);

    updateVec2.push(update);
    update();

    return v;
}

/** @type {(GameObj)[]} */
export const updateDynamic = [];

/**
 * Create a dynamic pos component
 *
 * @param {() => Vec2} pos
 */
export function dynamicPos(pos) {
    return {
        id: "dynamicPos",
        /** @type { (this: GameObj) => void } */
        add() {
            this.use(k.pos(pos()));
            updateDynamic.push(this);
        },
        updateDynamicPos() {
            this.pos = pos();
        },
    };
}

/**
 * Create a dynamic scale component
 *
 * @param {() => number} scale
 */
export function dynamicScale(scale) {
    return {
        id: "dynamicScale",
        /** @type { (this: GameObj) => void } */
        add() {
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
 * @param {Vec2} v
 * @param {number} x
 * @param {number} y
 */
export function setVec2(v, x, y) {
    v.x = x;
    v.y = y;
}
