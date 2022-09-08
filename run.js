// kaboom dev server
const fs = require("fs-extra");
const path = require("path");
const esbuild = require("esbuild");
const express = require("express");
const ws = require("ws");
const http = require("http");
const AdmZip = require("adm-zip");
const Database = require("@replit/database");
const db = new Database();
const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 8000;
let err = null;

// build user game
function buildGame() {
    const template = fs.readFileSync("template.html", "utf-8");
    let code = "";

    code += `<script src="./dist/helper.js"></script>\n`;
    code += `<script src="./dist/game.js"></script>\n`;

    try {

        // build user code
        esbuild.buildSync({
            bundle: true,
            sourcemap: true,
            target: "es6",
            keepNames: true,
            logLevel: "silent",
            entryPoints: ["code/main.js"],
            outfile: "dist/game.js",
        });

        esbuild.buildSync({
            bundle: true,
            sourcemap: true,
            target: "es6",
            keepNames: true,
            entryPoints: ["helper.ts"],
            outfile: "dist/helper.js",
        });

    } catch (e) {
        const loc = e.errors[0].location;
        err = {
            msg: e.errors[0].text,
            stack: [
                {
                    line: loc.line,
                    col: loc.column,
                    file: loc.file,
                },
            ],
        };
        let msg = "";
        msg += "<pre>";
        msg += `ERROR: ${err.msg}\n`;
        if (err.stack) {
            err.stack.forEach((trace) => {
                msg += `    -> ${trace.file}:${trace.line}:${trace.col}\n`;
            });
        }
        msg += "</pre>";
        fs.writeFileSync("dist/index.html", msg);
        return;
    }

    fs.writeFileSync("dist/index.html", template.replace("{{kaboom}}", code));

    // copy and zippy
    fs.copy("./sprites", "./build/sprites");
    fs.copy("./dist", "./build/dist");
    fs.copy("./sounds", "./build/sounds");
    fs.move("./dist/index.html", "./build/index.html", { overwrite: true });

    var zip = new AdmZip();

    zip.addLocalFile("./build/dist/game.js", "./dist");
    zip.addLocalFile("./build/dist/helper.js", "./dist");
    zip.addLocalFolder("./build/sprites/", "/sprites");
    zip.addLocalFolder("./build/sounds/", "/sounds");
    zip.addLocalFile("./build/index.html");

    zip.writeZip("./game.zip");
}

// server stuff
app.use(express.json({ strict: false }));

app.get("/", (req, res) => {
    err = null;
    buildGame();
    res.sendFile(__dirname + "/dist/index.html");
    render();
});

app.use(express.static(__dirname));

server.listen(port);

// term output
const red = (msg) => `\x1b[31m${msg}\x1b[0m`;
const dim = (msg) => `\x1b[2m${msg}\x1b[0m`;

function render() {

    // kaboooooom!
    process.stdout.write("\x1b[2J");
    process.stdout.write("\x1b[H");
    process.stdout.write("kaboom!\n");

    console.log(dim("\n(tip: Cmd + S in editor refresh webview)"));

    // error stack trace
    if (err) {
        console.log("");
        console.error(red(`ERROR: ${err.msg}`));
        if (err.stack) {
            err.stack.forEach((trace) => {
                console.error(`    -> ${trace.file}:${trace.line}:${trace.col}`);
            });
        }
    }

}
