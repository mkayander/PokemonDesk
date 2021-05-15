import React from "react";

import styles from "./Header.module.scss";

import { ReactComponent as PokemonLogoSvg } from "./assets/Logo.svg";

type NavData = {
    id: number;
    title: string;
    link: string;
};

const MENU: NavData[] = [
    {
        id: 1,
        title: "Home",
        link: "#",
    },
    {
        id: 2,
        title: "Pokédex",
        link: "#",
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
            <div className={styles.wrap}>
                <div className={styles.pokemonLogo}>
                    <PokemonLogoSvg />
                </div>
                <div className={styles.menuWrap}>
                    {MENU.map(nav => (
                        <a key={nav.id} href={nav.link} className={styles.menuLink}>
                            {nav.title}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Header;
