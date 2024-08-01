import type { GameObj } from "kaplay";
import { k } from "../engine";

export const handleHover = (obj: GameObj) => {
    obj.use(k.color("#d46eb3"));
};

export const handleUnhover = (obj: GameObj) => {
    obj.use(k.color("#ee8fcb"));
};

export const makeButton = (
    direction: "right" | "left",
    gap: number,
) => {
    const gapMultiplier = direction === "left" ? -1 : 1;
    const buttonRotation = direction === "left" ? 180 : 0;

    const button = k.make([
        k.sprite("ui_pack", { frame: 0 }),
        k.rotate(buttonRotation),
        k.anchor("center"),
        k.pos((gap * gapMultiplier) / 2, 0),
        k.color("#ee8fcb"),
        k.area(),
    ]);

    button.onClick(() => {
        button.parent.trigger(`${direction}Press`);
    });

    button.onHover(() => {
        handleHover(button);
    });

    button.onHoverEnd(() => {
        handleUnhover(button);
    });

    return button;
};
