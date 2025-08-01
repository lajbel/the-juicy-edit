import kaplay from "kaplay";
import TinyGesture from "tinygesture";

const getScale = () => {
    const scaleX = window.innerWidth / 240;
    let scale = scaleX;
    let visibleHeight = window.innerHeight / scaleX;

    if (visibleHeight < 400) {
        scale = window.innerHeight / 400;
    }

    return scale;
};

export const k = kaplay({
    scale: getScale(),
    background: [141, 183, 255],
    debug: true,
    font: "happy",
    crisp: true,
    maxFPS: 120,
    texFilter: "nearest",
    touchToMouse: true,
});

// Create gesture handler for the canvas
export const gesture = new TinyGesture(k.canvas);

k.add([
    stay(),
    {
        update() {
            const scale = getScale();
            k._k.globalOpt.scale = scale;
        },
    },
]);
