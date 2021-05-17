import React from "react";

import { A } from "@patched/hookrouter";

import styles from "./Header.module.scss";

import { ReactComponent as PokemonLogoSvg } from "./assets/Logo.component.svg";
import Layout from "../Layout/Layout";

type NavData = {
    id: number;
    title: string;
    link: string;
};

const MENU: NavData[] = [
    {
        id: 1,
        title: "Home",
        link: "/",
    },
    {
        id: 2,
        title: "Pokédex",
        link: "/pokedex",
    },
    {
        id: 3,
        title: "Legendaries",
        link: "#",
    },
    {
        id: 4,
        title: "Documentation",
        link: "#",
    },
];

const Header: React.FC = () => {
    return (
        <div className={styles.root}>
            <Layout className={styles.wrap}>
                <div className={styles.pokemonLogo}>
                    <PokemonLogoSvg />
                </div>
                <div className={styles.menuWrap}>
                    {MENU.map(nav => (
                        <A key={nav.id} href={nav.link} className={styles.menuLink}>
                            {nav.title}
                        </A>
                    ))}
                </div>
            </Layout>
        </div>
    );
};

export default Header;
