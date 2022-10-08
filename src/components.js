import "kaboom/global";

export function checkbox(spr, spr2, icon, oncheck, onuncheck, extraT = "unuseful") {
    return {
        id: "checkbox",
        requires: ["area"],
        checked: false,
        add() {
            this.use(sprite(spr));

            this.check = add([
                sprite(spr2),
                anchor("center"),
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
                anchor("center"),
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

export function tlsprite(spr, langs) {
    return {
        id: "tlsprite",
        require: ["sprite"],
        lang: "n",

        add() {
            this.langs = langs;
        },

        changeLang(lang) {
            this.lang = lang;
            this.use(sprite(`${lang}_${spr}`))
        }
    }
}

export function tltext(texts) {
    return {
        id: "tltext",
        require: ["text"],
        lang: "n",
        dfont: "n",

        add() {
            this.langs = new Map;
            this.langs.set(this.lang, this.text)

            this.dfont = this.font;
            
            texts.map((t) => {
                this.langs.set(t.lang, t);
            });
        },

        changeLang(lang) {
            const l = this.langs.get(lang);
            this.lang = lang;

            this.use(text(l.text, { size: this.textSize, font: `${l.lang}_${this.dfont}` }));
        }
    }
}