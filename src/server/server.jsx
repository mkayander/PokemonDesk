// eslint-disable-next-line no-use-before-define
import React from "react";
import Hapi from "@hapi/hapi";
import ReactDOMServer from "react-dom/server";
import { setPath } from "@patched/hookrouter";
import App from "../App";

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: "localhost",
    });

    server.route({
        method: "GET",
        path: "/{any*}",
        handler: request => {
            setPath(request.path);
            return ReactDOMServer.renderToString(<App />);
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
