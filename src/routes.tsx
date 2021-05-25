import React, { PropsWithChildren } from "react";
import { HookRouter } from "@patched/hookrouter";
import { EmptyPage, HomePage, PokedexPage, PokemonPage } from "./pages";
import { PokemonPageProps } from "./pages/PokemonPage/PokemonPage";

export enum RouteLink {
    HOME = "/",
    POKEDEX = "/pokedex",
    LEGENDARIES = "/legendaries",
    DOCUMENTATION = "/documentation",
    POKEMON = "/pokedex/:id",
}

type NavData = {
    title: string;
    link: RouteLink;
    component: (props: PropsWithChildren<any>) => JSX.Element;
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

const SECONDARY_ROUTES: NavData[] = [
    {
        title: "Pokemon",
        link: RouteLink.POKEMON,
        component: ({ id }: PokemonPageProps) => <PokemonPage id={id} />,
    },
];

const routes: HookRouter.RouteObject<JSX.Element> = [...SECONDARY_ROUTES, ...MENU].reduce((acc, item) => {
    acc[item.link] = item.component;
    return acc;
}, {} as HookRouter.RouteObject<JSX.Element>);

export default routes;
