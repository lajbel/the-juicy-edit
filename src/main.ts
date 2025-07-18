import "kaplay/global";
import "./loader";
import "./scenes/edit.ts";
import { k } from "./kaplay.ts";

k.onLoad(() => {
    k.go("edit");
});
