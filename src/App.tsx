import React from "react";
import classNames from "classnames";
import "./custom.css";
import styles from "./App.module.scss";

const App = () => {
    console.log(process.env.NODE_ENV);
    console.log("$@#### TEST");

    return (
        <div>
            <h3 className={classNames(styles.header, "color-red")}>This is App Component!</h3>
            <div className={styles.main}>
                <p>Welcome my friend</p>
                <p>This is some lorem ipsum text</p>
            </div>
        </div>
    );
};

export default App;
