import React from "react";
import { ContentPageBase, PokemonCard } from "../../components";

import styles from "./PokedexPage.module.scss";
import { getPokemons } from "../../data/api/api";

const PokedexPage: React.FC = () => {
    return (
        <ContentPageBase className={styles.root} bgColor="bg-grey-gradient">
            <h1 className={styles.headText}>
                800 <b>Pokemons</b> for you to choose your favorite
            </h1>
            <div className={styles.searchInput}>
                <input placeholder="Enter pokemon name..." />
            </div>

            <div className={styles.cardsContainer}>
                {getPokemons().map(pokemon => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                ))}
            </div>
        </ContentPageBase>
    );
};

export default PokedexPage;
