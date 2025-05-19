import kaplay from "kaplay";

export const k = kaplay({
    scale: 2,
    background: [141, 183, 255],
    debug: true,
    font: "happy",
    crisp: true,
    maxFPS: 120,
    texFilter: "nearest",
});