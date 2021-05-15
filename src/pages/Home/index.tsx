import React from "react";

import styles from "./Home.module.scss";
import { Header } from "../../components";

const HomePage = () => {
    return (
        <div className={styles.root}>
            <Header />
        </div>
    );
};

export default HomePage;
