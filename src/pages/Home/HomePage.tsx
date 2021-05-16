import React from "react";

import styles from "./HomePage.module.scss";
import { Button, Header } from "../../components";
import Layout from "../../components/Layout/Layout";

const HomePage = () => {
    return (
        <div className={styles.root}>
            <Header />
            <Layout className={styles.main}>
                <div className={styles.column}>
                    <h1 className={styles.heading}>Find all your favorite Pokemon</h1>
                    <h3 className={styles.subtitle}>
                        You can know the type of Pokemon, its strengths, disadvantages and abilities
                    </h3>
                    <Button text="See pokemons" onClick={event => console.log(event)} />
                </div>
                <div className={styles.column}>
                    <h3>Hello world</h3>
                </div>
            </Layout>
        </div>
    );
};

export default HomePage;
