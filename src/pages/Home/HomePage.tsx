import React from "react";

import styles from "./Home.module.scss";
import {Header} from "../../components";
import Layout from "../../components/Layout/Layout";

import {ReactComponent as BannerSvg} from "./assets/BannerComplete.svg";

const HomePage = () => {
    return (
        <div className={styles.root}>
            <Header/>
            <Layout className={styles.main}>
                <div className={styles.column}>
                    <h3>Find all your favorite Pokemon</h3>
                </div>
                <div className={styles.column}>
                    <h3>Hello world</h3>
                </div>
            </Layout>
        </div>
    );
};

export default HomePage;
