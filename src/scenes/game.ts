import { faceItems } from "../config";
import { k } from "../engine";
import { makeButtons } from "../objects/buttons";
import { makeCameraMover } from "../objects/cameraMover";

// Click to start scene, to disable browser limitations for audio
k.scene("game", () => {
    const cameraMover = k.add(makeCameraMover());

    const gameBox = k.add([
        k.pos(k.center().add(k.width(), 0)),
    ]);

    cameraMover.moveCamByBox(1);

    // the human
    const human = gameBox.add([
        k.pos(k.width() / 2, k.height() / 2),
        k.anchor("bot"),
    ]);

    const body = human.add([
        k.sprite("human"),
        k.anchor("bot"),
    ]);

    const face = human.add([
        k.sprite("faces", { frame: 0 }),
        k.anchor("bot"),
        k.pos(0, -82),
    ]);

    // the buttons
    const hairstyleButtons = gameBox.add(makeButtons(30, 130));

    hairstyleButtons.onLeftButtonClick(() => {
        const unlockedFaceItems = faceItems.filter((item) => item.unlocked);
        const unlockedFaceItemsCount = unlockedFaceItems.length;

        const oldFaceFrame = face.frame;
        const newFaceFrame = (oldFaceFrame - 1 + unlockedFaceItemsCount)
            % unlockedFaceItemsCount;

        face.frame = newFaceFrame;
    });

    hairstyleButtons.onRightButtonClick(() => {
        const unlockedFaceItems = faceItems.filter((item) => item.unlocked);
        const unlockedFaceItemsCount = unlockedFaceItems.length;

        const oldFaceFrame = face.frame;
        const newFaceFrame = (oldFaceFrame + 1) % unlockedFaceItemsCount;

        face.frame = newFaceFrame;
    });
});
