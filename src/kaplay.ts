import kaplay from "kaplay";

const isLandscape = window.innerWidth > window.innerHeight;
const scale = isLandscape ? window.innerWidth / 960 : window.innerHeight / 540;

export const k = kaplay({
    scale: scale,
    background: [141, 183, 255],
    debug: true,
    font: "happy",
    crisp: true,
    maxFPS: 120,
    texFilter: "nearest",
    touchToMouse: true,
});

k.add([
    stay(),
    {
        update() {
            const isLandscape = window.innerWidth > window.innerHeight;
            const scale = isLandscape
                ? window.innerWidth / 960
                : window.innerHeight / 540;

            k._k.globalOpt.scale = scale;
        },
    },
]);
