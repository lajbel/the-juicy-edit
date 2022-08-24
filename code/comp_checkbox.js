import _k from "./main";

export default function checkbox(spr, spr2, icon, oncheck, onuncheck, extraT = "unuseful") {
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
                pos(this.pos.clone()),
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
                pos(this.pos.add(30, 0)),
                origin("center"),
                "gui"
            ]);

            this.onClick(() => {
                this.checked = !this.checked;
                this.check.checked = this.checked;

                console.log(this.check.checked);

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