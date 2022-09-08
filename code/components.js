import _k from "./main";

export function download(filename, url) {
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
}

export function downloader() {
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

export function checkbox(spr, spr2, icon, oncheck, onuncheck, extraT = "unuseful") {
    return {
        id: "checkbox",
        requires: ["area"],
        checked: false,
        add() {
            this.use(sprite(spr));

            this.check = add([
                sprite(spr2),
                origin("center"),
                z(100),
                pos(spr2 === "correct" ? this.pos.add(6, -5) : this.pos.clone()),
                "gui",
                "check",
                extraT,
                {
                    checked: false,
                }
            ]);

            this.check.hidden = true;

            if (icon) add([
                sprite(icon),
                pos(this.pos.add(40, 0)),
                origin("center"),
                "gui"
            ]);

            this.onClick(() => {
                this.checked = !this.checked;
                this.check.checked = this.checked;

                if (this.checked) {
                    this.check.hidden = false;
                    this.onCheck();
                }
                else {
                    this.check.hidden = true;
                    this.onUnCheck();
                }
            });
        },

        onCheck() {
            if (oncheck) oncheck();
        },

        onUnCheck() {
            if (onuncheck) onuncheck();
        },

        isChecked() {
            return this.checked;
        }
    }
}

export function hoverOnce() {
    let hoverStarted = false;
    let hoverEnded = false;

    return {
        id: "hoverOnce",
        require: ["area"],
        update() {
            if (this.isHovering()) {
                if (hoverStarted) return;
                hoverStarted = true;
                hoverEnded = false;
                this.trigger("hoverEnter");
            }
            else {
                if (hoverEnded || !hoverStarted) return;
                hoverEnded = true;
                hoverStarted = false;
                this.trigger("hoverExit");
            }
        },

        onHoverOnce(onHover, onHoverExit) {
            this.on("hoverEnter", onHover);

            if (onHoverExit) this.on("hoverExit", onHoverExit)
        },

        onHoverEnter(action) {
            return this.on("hoverEnter", action)
        },

        onHoverExit(action) {
            return this.on("hoverExit", action)
        }
    }
}

export function tlsprite(spr, langs) {
    return {
        id: "tlsprite",
        require: ["sprite"],

        add() {
            this.langs = langs;
        },

        changeLang(lang) {
            this.use(sprite(`${"jp"}_${spr}`))
        }
    }
}

export function tltext() {

}