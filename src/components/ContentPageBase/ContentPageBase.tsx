import React, { HTMLAttributes } from "react";
import cn from "classnames";
import { Header, Layout } from "../index";

import styles from "./ContentWrap.module.scss";
import { BgColor } from "../../index";

type ContentWrapProps = {
    useHeader?: boolean;
    bgColor?: BgColor;
};

const ContentPageBase: React.FC<HTMLAttributes<HTMLDivElement> & ContentWrapProps> = ({
    useHeader = true,
    bgColor = "bg-white",
    children,
    className,
    ...rest
}) => {
    return (
        <div className={cn(styles.root, bgColor)}>
            {useHeader && <Header />}
            <main {...rest}>
                <Layout className={cn(styles.content, className)}>{children}</Layout>
            </main>
        </div>
    );
};

export default ContentPageBase;
