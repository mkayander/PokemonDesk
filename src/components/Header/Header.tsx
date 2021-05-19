import React from "react";

import { A, usePath } from "@patched/hookrouter";

import cn from "classnames";
import styles from "./Header.module.scss";

import { ReactComponent as PokemonLogoSvg } from "./assets/Logo.component.svg";
import Layout from "../Layout/Layout";
import { MENU } from "../../routes";

const Header: React.FC = () => {
    const path = usePath();
    console.log("##: current path = ", path);

    return (
        <header className={styles.root}>
            <Layout className={styles.wrap}>
                <div className={styles.pokemonLogo}>
                    <PokemonLogoSvg />
                </div>
                <div className={styles.menuWrap}>
                    {MENU.map(nav => (
                        <A
                            key={nav.title}
                            href={nav.link}
                            className={cn(styles.menuLink, {
                                [styles.active]: nav.link === path,
                            })}>
                            {nav.title}
                        </A>
                    ))}
                </div>
            </Layout>
        </header>
    );
};

export default Header;
