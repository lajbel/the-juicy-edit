import { dynamicPos, dynamicVec2, setVec2 } from "../dynamic.ts";
import { gesture, k } from "../kaplay.ts";
import { s } from "../shared.ts";
import { onClickAndReleaseArea } from "../utils.ts";
import { updateEnabledParts } from "./addPartsManager.ts";

export const COLLECTIONS_VIEW_MENU = dynamicVec2((v) =>
    setVec2(v, k.width(), 0)
);

export function addCollectionView() {
    const collectionsView = add([
        dynamicPos(() => COLLECTIONS_VIEW_MENU),
    ]);

    for (const col in s.enabledCollections) {
        let curScale = 1;
        let curOpacity = 1;

        const colButton = collectionsView.add([
            sprite(`${col}_potrait`),
            dynamicPos(() => k.vec2(40, height() / 2)),
            anchor("center"),
            area(),
            opacity(curScale),
            scale(curOpacity),
            {
                updateState() {
                    let toScale = 1;
                    let toOpacity = 1;

                    if (!s.enabledCollections[col]) {
                        toScale = 0.9;
                        toOpacity = 0.8;
                    }

                    k.tween(curScale, toScale, 0.1, (v) => {
                        curScale = v;
                        colButton.scale.x = v;
                        colButton.scale.y = v;
                    });

                    k.tween(curOpacity, toOpacity, 0.1, (v) => {
                        curOpacity = v;
                        colButton.opacity = v;
                    });
                },
            },
        ]);

        colButton.add([
            pos(0, 120),
            text(col, { size: 10, align: "center" }),
            anchor("center"),
        ]);

        onClickAndReleaseArea("left", colButton, () => {
            s.enabledCollections[col] = !s.enabledCollections[col];
            colButton.updateState();
            updateEnabledParts();
        });
    }
}
