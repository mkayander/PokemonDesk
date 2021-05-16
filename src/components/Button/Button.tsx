import React from 'react';

import styles from "./Button.module.scss"

type ButtonProps = {
    text: string
}

const Button: React.FC<React.HTMLAttributes<HTMLButtonElement> & ButtonProps> = ({text, ...rest}) => {
    return (
        <button type="button" className={styles.root} {...rest}>
            <span>
                {text}
            </span>
        </button>
    );
};

export default Button;
