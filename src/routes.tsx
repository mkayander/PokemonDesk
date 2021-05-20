import React from "react";
import { HookRouter } from "@patched/hookrouter";
import { EmptyPage, HomePage, PokedexPage } from "./pages";

export enum RouteLink {
    HOME = "/",
    POKEDEX = "/pokedex",
    LEGENDARIES = "/legendaries",
    DOCUMENTATION = "/documentation",
}

type NavData = {
    title: string;
    link: RouteLink;
    component: () => JSX.Element;
};

export const MENU: NavData[] = [
    {
        title: "Home",
        link: RouteLink.HOME,
        component: () => <HomePage />,
    },
    {
        title: "Pokédex",
        link: RouteLink.POKEDEX,
        component: () => <PokedexPage />,
    },
    {
        title: "Legendaries",
        link: RouteLink.LEGENDARIES,
        component: () => <EmptyPage title="Legendaries" />,
    },
    {
        title: "Documentation",
        link: RouteLink.DOCUMENTATION,
        component: () => <EmptyPage title="Documentation" />,
    },
];

const routes: HookRouter.RouteObject<JSX.Element> = MENU.reduce((acc, item) => {
    acc[item.link] = item.component;
    return acc;
}, {} as HookRouter.RouteObject<JSX.Element>);

export default routes;
