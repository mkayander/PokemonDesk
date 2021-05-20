import React from "react";

import { navigate } from "@patched/hookrouter";
import styles from "./NotFoundPage.module.scss";

import teamPng from "./assets/Team_Rocket_trio_OS.png";
import { Button } from "../../components";
import { RouteLink } from "../../routes";

const NotFoundPage = () => {
    return (
        <div className={styles.root}>
            <h1 className={styles.bg404Text}>404</h1>
            <img className={styles.teamImage} src={teamPng} alt="Pokemon Team" />
            <h3>
                <span>The rocket team</span> has won this time
            </h3>
            <Button text="Return" bgColor="bg-warning" onClick={() => navigate(RouteLink.HOME)} />
        </div>
    );
};

export default NotFoundPage;
