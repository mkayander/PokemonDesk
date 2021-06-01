// eslint-disable-next-line no-use-before-define
import React from "react";
import fs from "fs";
import path from "path";
import handlebars from "handlebars";
import Hapi from "@hapi/hapi";
import ReactDOMServer from "react-dom/server";
import { setPath } from "@patched/hookrouter";
import App from "../App";

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: "localhost",
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
        path: "/{any*}",
        handler: request => {
            setPath(request.path);
            const pathToInnerHtml = path.join(process.cwd(), "dist", "index.html");
            const template = handlebars.compile(fs.readFileSync(pathToInnerHtml, "utf-8"));
            const result = ReactDOMServer.renderToString(<App />);
            const page = template({
                content: result,
            });
            return page;
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
