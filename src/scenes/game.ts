import { SCREEN_H, SCREEN_W } from "../config";
import { k } from "../engine";
import { makeCameraMover } from "../objects/cameraMover";

// Click to start scene, to disable browser limitations for audio
k.scene("game", () => {
    const cameraMover = k.add(makeCameraMover());

    const gameBox = k.add([
        k.pos(k.center().add(SCREEN_W, 0)),
    ]);

    cameraMover.moveCamByBox(1);

    gameBox.add([
        k.sprite("body"),
        k.pos(SCREEN_W / 2, SCREEN_H / 2),
        k.anchor("bot"),
    ]);
});
