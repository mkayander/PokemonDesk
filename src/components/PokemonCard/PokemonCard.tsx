import React from "react";

import cn from "classnames";
import s from "./PokemonCard.module.scss";
import { Heading } from "../index";
import { Pokemon } from "../../data/models/Pokemon";

type PokemonCardProps = {
    pokemon: Pokemon;
};

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
    const { stats } = pokemon;
    return (
        <div className={s.root}>
            <div className={s.infoWrap}>
                <Heading className={s.titleName}>{pokemon.cleanName}</Heading>
                <div className={s.statWrap}>
                    <div className={s.statItem}>
                        <div className={s.statValue}>{stats.attack}</div>
                        Attack
                    </div>
                    <div className={s.statItem}>
                        <div className={s.statValue}>{stats.defense}</div>
                        Defense
                    </div>
                </div>
                <div className={s.labelWrap}>
                    {pokemon.types.map((value: string) => (
                        <span className={cn(s.label, s[value])}>{value}</span>
                    ))}
                </div>
            </div>
            <div className={cn(s.pictureWrap, s[pokemon.types[0]])}>
                <img src={pokemon.img} alt={pokemon.name} />
            </div>
        </div>
    );
};

export default PokemonCard;
