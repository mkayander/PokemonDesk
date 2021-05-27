import React from "react";

import classNames from "classnames";
import { navigate } from "@patched/hookrouter";
import styles from "./HomePage.module.scss";
import { Button, ContentPageBase, Heading, HomeParallax } from "../../components";
import { BtnSize } from "../../components/Button/Button";
import { RouteLink } from "../../routes";

const HomePage = () => {
    return (
        <ContentPageBase className={styles.main} bgColor="bg-primary-gradient">
            <div className={styles.column}>
                <Heading variant="h1">Find all your favorite Pokemon</Heading>
                <Heading>You can know the type of Pokemon, its strengths, disadvantages and abilities</Heading>
                <Button text="Start now!" fullWidth bgColor="bg-warning" />
                <Button text="See pokemons" onClick={() => navigate(RouteLink.POKEDEX)} />
                <Button text="Read more..." bgColor="bg-secondary" btnSize={BtnSize.small} />
            </div>
            <div className={classNames(styles.column, styles.contentRight)}>
                <HomeParallax />
            </div>
        </ContentPageBase>
    );
};

export default HomePage;
