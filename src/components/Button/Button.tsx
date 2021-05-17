import React from "react";
import cn from "classnames";

import styles from "./Button.module.scss";
import { BgColor } from "../../index";

// eslint-disable-next-line no-shadow
export enum BtnSize {
    normal,
    small,
}

type ButtonProps = {
    text?: string;
    fullWidth?: boolean;
    bgColor?: BgColor;
    btnSize?: BtnSize;
};

const Button: React.FC<React.HTMLAttributes<HTMLButtonElement> & ButtonProps> = ({
    text,
    bgColor = "bg-confirm",
    btnSize = BtnSize.normal,
    fullWidth = false,
    children,
    ...rest
}) => {
    return (
        <button
            type="button"
            className={cn(
                styles.root,
                {
                    [styles.fullWidth]: fullWidth,
                    [styles.small]: btnSize === BtnSize.small,
                },
                styles[bgColor],
                bgColor
            )}
            {...rest}>
            {text && <span>{text}</span>}
            {children}
        </button>
    );
};

export default Button;
