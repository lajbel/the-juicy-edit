import type { GameObj } from "kaplay";
import { k } from "../engine";
import { makeButton } from "./button";

export const makeButtons = (y: number, gap: number) => {
    const buttons = k.make([
        k.pos(k.center().x, y),
        {
            onLeftButtonClick(action: () => void) {
                return buttons.on("leftPress", () => {
                    action();
                });
            },
            onRightButtonClick(action: () => void) {
                return buttons.on("rightPress", () => {
                    action();
                });
            },
        },
    ]);

    buttons.add(makeButton("left", gap));
    buttons.add(makeButton("right", gap));

    return buttons;
};
