import kaplay from "kaplay";

export const k = kaplay({
    width: 576,
    height: 324,
    letterbox: true,
    stretch: true,
    background: [141, 183, 255],
    touchToMouse: true,
    debug: true,
    font: "happy",
    canvas: document.querySelector("#myGame"),
});
