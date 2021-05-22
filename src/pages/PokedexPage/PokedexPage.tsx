import React from "react";
import { ContentPageBase, PokemonCard } from "../../components";

import styles from "./PokedexPage.module.scss";
import { usePokemons } from "../../hooks";

const PokedexPage: React.FC = () => {
    const { pokemons, totalCount } = usePokemons();

    console.log(totalCount);

    return (
        <ContentPageBase className={styles.root} bgColor="bg-grey-gradient">
            <h1 className={styles.headText}>
                {totalCount} <b>Pokemons</b> for you to choose your favorite
            </h1>
            <div className={styles.searchInput}>
                <input placeholder="Enter pokemon name..." />
            </div>

            <div className={styles.cardsContainer}>
                {pokemons?.map(pokemon => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                ))}
            </div>
        </ContentPageBase>
    );
};

export default PokedexPage;
