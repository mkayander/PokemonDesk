import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";

import "./index.scss";
import createConfiguredStore from "./createConfiguredStore";

export type RunType = "development" | "production"

export type BgColor =
    | "bg-primary"
    | "bg-secondary"
    | "bg-confirm"
    | "bg-danger"
    | "bg-warning"
    | "bg-primary-gradient"
    | "bg-grey-gradient"
    | "bg-white";


const store = createConfiguredStore({});

window.addEventListener("load", () => {
    ReactDOM.render(
        React.createElement(Provider, { store }, React.createElement(App)),
        document.getElementById("root")
    );
});
