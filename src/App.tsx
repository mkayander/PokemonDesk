import React from "react";
import "./custom.css";
import { useRoutes } from "@patched/hookrouter";
import routes from "./routes";
import { NotFoundPage } from "./pages";

const App = () => {
    return useRoutes(routes) || <NotFoundPage />;
};

export default App;
