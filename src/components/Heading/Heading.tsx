import React, { HTMLAttributes } from "react";

type HeadingProps = {
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

const Heading: React.FC<HTMLAttributes<HTMLHeadingElement> & HeadingProps> = ({
    variant = "h3",
    children,
    className,
}) => {
    const Tag = variant as keyof JSX.IntrinsicElements;

    return <Tag className={className}>{children}</Tag>;
};

export default Heading;
