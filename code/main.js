import kaboom from "kaboom";
import loadAssets from "./loader";
import loadGameScene from "./scene_game";

// initialize context
export default kaboom({
    width: 364,
    height: 324,
    letterbox: true,
    stretch: true,
    background: [141, 183, 255],
    touchToMouse: true,
    debug: true,
    font: "juiceisntbelow",
    canvas: document.querySelector("#myGame"),
});

// things
export const hairC = 35;
export const facesC = 40;
export const outfitsC = 35;

// load things
loadAssets();
loadGameScene();