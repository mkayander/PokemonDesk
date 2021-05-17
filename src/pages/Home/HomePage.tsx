import React from "react";

import classNames from "classnames";
import styles from "./HomePage.module.scss";
import { Button, Header, Heading, HomeParallax } from "../../components";
import Layout from "../../components/Layout/Layout";
import { BtnSize } from "../../components/Button/Button";

const HomePage = () => {
    return (
        <div className={styles.root}>
            <Header />
            <Layout className={styles.main}>
                <div className={styles.column}>
                    <Heading variant="h1">
                        Find all your favorite Pokemon
                    </Heading>
                    <Heading>
                        You can know the type of Pokemon, its strengths, disadvantages and abilities
                    </Heading>
                    <Button text="Start now!" fullWidth bgColor="bg-warning" />
                    <Button text="See pokemons" onClick={event => console.log(event)} />
                    <Button
                        text="Read more..."
                        onClick={event => console.log(event)}
                        bgColor="bg-secondary"
                        btnSize={BtnSize.small}
                    />
                </div>
                <div className={classNames(styles.column, styles.contentRight)}>
                    <HomeParallax />
                </div>
            </Layout>
        </div>
    );
};

export default HomePage;
