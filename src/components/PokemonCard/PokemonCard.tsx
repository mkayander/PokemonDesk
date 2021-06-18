import React, { MouseEventHandler } from "react";

import cn from "classnames";
import { navigate } from "@patched/hookrouter";
import s from "./PokemonCard.module.scss";
import { Heading } from "../index";
import { Pokemon } from "../../data/models/Pokemon";
import { RouteLink } from "../../routes";
import TypeLabel from "./TypeLabel";

type PokemonCardProps = {
    pokemon: Pokemon;
};

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
    const { stats } = pokemon;

    const onClickHandler: MouseEventHandler = event => navigate(`${RouteLink.POKEDEX}/${pokemon.id}`);

    return (
        <button type="button" className={s.root} onClick={onClickHandler}>
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
                        <TypeLabel key={value} type={value} />
                    ))}
                </div>
            </div>
            <div className={cn(s.pictureWrap, s[pokemon.types[0]])}>
                <img src={pokemon.img} alt={pokemon.name} />
            </div>
        </button>
    );
};

export default PokemonCard;
