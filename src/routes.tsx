import React from "react";
import { HookRouter } from "@patched/hookrouter";
import { EmptyPage, HomePage } from "./pages";

type NavData = {
    title: string;
    link: string;
    component: () => JSX.Element;
};

export const MENU: NavData[] = [
    {
        title: "Home",
        link: "/",
        component: () => <HomePage />,
    },
    {
        title: "Pokédex",
        link: "/pokedex",
        component: () => <EmptyPage title="Pokédex" />,
    },
    {
        title: "Legendaries",
        link: "/legendaries",
        component: () => <EmptyPage title="Legendaries" />,
    },
    {
        title: "Documentation",
        link: "/documentation",
        component: () => <EmptyPage title="Documentation" />,
    },
];

const routes: HookRouter.RouteObject<JSX.Element> = MENU.reduce((acc, item) => {
    acc[item.link] = item.component;
    return acc;
}, {} as HookRouter.RouteObject<JSX.Element>);

export default routes;
