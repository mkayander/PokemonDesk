import React from "react";
import { EmptyPage, HomePage } from "./pages";

const routes = {
    "/": () => <HomePage />,
    "/pokedex": () => <EmptyPage />,
};

export default routes;
