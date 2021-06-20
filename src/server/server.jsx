// eslint-disable-next-line no-use-before-define
import React from "react";
import fs from "fs";
import path from "path";
import handlebars from "handlebars";
import Hapi from "@hapi/hapi";
import ReactDOMServer from "react-dom/server";
import { setPath } from "@patched/hookrouter";
import App from "../App";

const IMG = /\.(jpg|jpeg|gif|png|svg)(\?v=\d+\.\d+\.\d+)?$/;

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: "localhost",
        debug: { request: ["error"] },
    });

    server.events.on("log", (event, tags) => {
        if (tags.error) {
            console.error(`Server error: ${event.error ? event.error.message : "unknown"}`);
        }
    });

    // eslint-disable-next-line global-require
    await server.register(require("@hapi/inert"));

    server.route({
        method: "GET",
        path: "/main.js",
        handler: (request, h) => h.file(path.join(process.cwd(), "dist", "main.js")),
    });

    server.route({
        method: "GET",
        path: "/main.css",
        handler: (request, h) => h.file(path.join(process.cwd(), "dist", "main.css")),
    });

    server.route({
        method: "GET",
        path: "/{any*}",
        handler: (request, h) => {
            if (IMG.test(request.path)) {
                const imgPath = path.join(process.cwd(), "dist", request.path);
                console.log("img path", imgPath);
                return h.file(imgPath);
            }
            setPath(request.path);
            const pathToInnerHtml = path.join(process.cwd(), "dist", "index.html");
            const template = handlebars.compile(fs.readFileSync(pathToInnerHtml, "utf-8"));
            const result = ReactDOMServer.renderToString(<App />);
            return template({
                content: result,
            });
        },
    });

    await server.start();
    console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", err => {
    console.log(err);
    process.exit(1);
});

init().then(r => r);
