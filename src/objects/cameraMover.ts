import { SCREEN_W } from "../config";
import { k } from "../engine";

export const makeCameraMover = () => {
    // Controls the behaviour of the camera
    const camera = k.make([
        k.pos(k.center()),
        k.timer(),
        {
            moveCamByBox(box: number) {
                moveCamByBox(box);
            },
        },
    ]);

    const moveCamByBox = (boxNumber: number) => {
        camera.tween(
            camera.pos,
            k.vec2(SCREEN_W * (boxNumber + 1), camera.pos.y),
            1,
            (v) => {
                camera.pos = v;
            },
            k.easings.linear,
        );
    };

    camera.onUpdate(() => {
        k.camPos(camera.pos);
    });

    return camera;
};
