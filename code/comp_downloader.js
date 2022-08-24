import _k from "./main";

export function download(filename, url) {
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
}

export default function downloader() {
    return {
        id: "downloader",
        requires: ["area"],
        add() {
            this.onClick(() => {
                var temp = onDraw(() => {
                    download("juicy_person.png", screenshot());
                    temp();
                })
            });
        }
    }
}