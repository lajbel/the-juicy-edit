import kaplay from "kaplay";

export const k = kaplay({
    width: 498,
    height: 280,
    letterbox: true,
    stretch: true,
    background: [141, 183, 255],
    touchToMouse: true,
    debug: true,
    font: "happy",
});
