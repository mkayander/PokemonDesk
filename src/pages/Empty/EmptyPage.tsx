import React from "react";
import { ContentPageBase } from "../../components";

type EmptyPageProps = {
    title?: string;
};

const EmptyPage: React.FC<EmptyPageProps> = ({ title }) => {
    return (
        <ContentPageBase>
            <h1>This is an Empty Page!</h1>
            <h3>{title}</h3>
        </ContentPageBase>
    );
};

export default EmptyPage;
