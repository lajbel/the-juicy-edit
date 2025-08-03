import "./loader";
import "./scenes/views.ts";
import { k } from "./kaplay.ts";

k.onLoad(() => {
    k.go("views");
});
