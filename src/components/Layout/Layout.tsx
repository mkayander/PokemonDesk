import React from "react";
import cn from "classnames";

import styles from "./Layout.module.scss";

// eslint-disable-next-line react/prop-types
const Layout: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className = null, ...rest }) => (
    <div className={cn(styles.root, className)} {...rest}>
        {children}
    </div>
);

export default Layout;
