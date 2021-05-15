import React from "react";
import cn from "classnames";

import styles from "./Layout.module.scss";

// eslint-disable-next-line react/prop-types
const Layout: React.FC<HTMLDivElement> = ({ children, className = null }) => (
    <div className={cn(styles.root, className)}>{children}</div>
);

export default Layout;