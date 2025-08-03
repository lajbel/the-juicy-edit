import { updateDynamic, updateVec2 } from "../dynamic.ts";
import { k } from "../kaplay.ts";
import { addViewForCharacter } from "../objects/addViewForCharacter.ts";
import { addViewForCollections } from "../objects/addViewForCollections.ts";
import { addViewManager } from "../objects/addViewManager.ts";

k.scene("views", () => {
    // TODO: Manage this
    k.play("chillaxation", { volume: 0.05, loop: true });

    addViewManager();

    addViewForCollections();
    addViewForCharacter();

    // TODO: Optimize this
    // It updates all positions for
    k.onUpdate(() => {
        for (const update of updateVec2) {
            update();
        }

        for (const obj of updateDynamic) {
            obj.updateDynamicPos?.();
            obj.updateDynamicScale?.();
        }
    });

    // #region
    k.onDraw(() => {
        k.drawText({
            text: k.debug.fps().toString(),
            size: 10,
            fixed: true,
        });
    });
    // #endregion
});
