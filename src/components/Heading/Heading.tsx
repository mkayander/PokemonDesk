import React, { HTMLAttributes, useMemo } from "react";

type HeadingProps = {
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

const Heading: React.FC<HTMLAttributes<HTMLHeadingElement> & HeadingProps> = ({ variant, children }) => {
    return useMemo(() => {
        switch (variant) {
            case "h1":
                return <h1>{children}</h1>;
            case "h2":
                return <h2>{children}</h2>;
            default:
            case "h3":
                return <h3>{children}</h3>;
            case "h4":
                return <h4>{children}</h4>;
            case "h5":
                return <h5>{children}</h5>;
            case "h6":
                return <h6>{children}</h6>;
        }
    }, [variant, children]);
};

export default Heading;
