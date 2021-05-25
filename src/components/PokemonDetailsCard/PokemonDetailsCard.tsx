import React from "react";

import styles from "./PokemonDetailsCard.module.scss";
import { Pokemon } from "../../data/models/Pokemon";

type PokemonDetailsCardProps = {
    pokemon: Pokemon;
};

const PokemonDetailsCard: React.FC<PokemonDetailsCardProps> = ({ pokemon }) => {
    return (
        <div className={styles.root}>
            <img src={pokemon.img} alt="Pokemon" />
            <div>
                <h3>{pokemon.cleanName}</h3>
            </div>
        </div>
    );
};

export default PokemonDetailsCard;
