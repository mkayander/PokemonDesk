import React from "react";
import "./custom.css";
import { useRoutes } from "@patched/hookrouter";
import routes from "./routes";
import { NotFoundPage } from "./pages";

import styles from "./App.module.scss"

const App = () => {
    return (
        <div className={styles.root}>
            {useRoutes(routes) || <NotFoundPage />}
        </div>
    )
};

export default App;
