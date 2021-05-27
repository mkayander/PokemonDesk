import React from "react";
import cn from "classnames";
import s from "./PokemonCard.module.scss";

type TypeLabelProps = {
    type: string
}

const TypeLabel: React.FC<TypeLabelProps> = ({ type }) => {
    return (
        <div key={type} className={cn(s.label, s[type])}>
                            {type}
        </div>
    );
};

export default TypeLabel;
