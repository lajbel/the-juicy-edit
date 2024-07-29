import { k } from "../engine";
import { makeCameraMover } from "../objects/cameraMover";

// Click to start scene, to disable browser limitations for audio
k.scene("game", () => {
    const cameraMover = k.add(makeCameraMover());

    const gameBox = k.add([
        k.pos(k.center().add(k.width(), 0)),
    ]);

    cameraMover.moveCamByBox(1);

    const human = gameBox.add([
        k.sprite("human"),
        k.pos(k.width() / 2, k.height() / 2),
        k.anchor("bot"),
    ]);
});
