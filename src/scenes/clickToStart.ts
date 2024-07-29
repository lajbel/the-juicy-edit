import { k } from "../engine";

// Click to start scene, to disable browser limitations for audio
k.scene("clickToStart", () => {
    k.add([
        k.text("Click\n to Start", {
            align: "center",
        }),
        k.anchor("center"),
        k.pos(k.center()),
        k.stay(),
    ]);

    k.onMouseDown(() => {
        k.go("game");
    });
});
