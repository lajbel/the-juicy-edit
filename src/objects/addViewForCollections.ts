import { dynamicPos, dynamicVec2, setVec2 } from "../dynamic.ts";
import { k } from "../kaplay.ts";
import { s } from "../shared.ts";
import { onClickAndReleaseArea } from "../utils/onClickAndReleaseArea.ts";
import { updateEnabledParts } from "./addPartsManager.ts";
import { view } from "./addViewManager.ts";

export const COLLECTIONS_VIEW_POS = dynamicVec2((v) =>
    setVec2(v, k.width(), 0)
);

export function addViewForCollections() {
    const v = k.add([
        dynamicPos(() => COLLECTIONS_VIEW_POS),
        view(COLLECTIONS_VIEW_POS),
    ]);

    const updateCollectionButtons = () => {
        Object.keys(s.enabledCollections).forEach((col, i) => {
            let curScale = 1;
            let curOpacity = 1;

            const colButton = v.add([
                k.sprite(`${col}_potrait`),
                dynamicPos(() => k.vec2(40 + (80 * i), k.height() / 2 - 40)),
                k.anchor("center"),
                k.area(),
                k.opacity(curScale),
                k.scale(curOpacity),
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
                k.pos(0, 120),
                k.text(col, { size: 10, align: "center" }),
                k.anchor("center"),
            ]);

            onClickAndReleaseArea("left", colButton, () => {
                s.enabledCollections[col] = !s.enabledCollections[col];
                colButton.updateState();
                updateEnabledParts();
            });
        });
    };

    updateCollectionButtons();
}
