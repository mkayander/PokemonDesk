import React from "react";
import { Header, Layout } from "../../components";

import styles from "./EmptyPage.module.scss";

type EmptyPageProps = {
    title?: string;
};

const EmptyPage: React.FC<EmptyPageProps> = ({ title }) => {
    return (
        <div style={{ height: "100vh" }} className={styles.root}>
            <Header />
            <Layout style={{ paddingTop: "2rem" }}>
                <h1>This is an Empty Page!</h1>
                <h3>{title}</h3>
            </Layout>
        </div>
    );
};

export default EmptyPage;
