import _k from "./main";

export default function link(l) {
    return {
        id: "link",
        requires: ["area"],
        add() {
            this.onClick(() => {
                window.open(l);
            });
        }
    }
}