import React from "react";
import { ContentPageBase, PokemonCard } from "../../components";

import styles from "./PokedexPage.module.scss";
import { usePokemons } from "../../hooks";

const PokedexPage: React.FC = () => {
    const { data, isLoading, errorMessage } = usePokemons();

    return (
        <ContentPageBase className={styles.root} bgColor="bg-grey-gradient">
            {!errorMessage && (
                <h1 className={styles.headText}>
                    {isLoading ? (
                        <span>Loading...</span>
                    ) : (
                        <span>
                            {data?.total} <b>Pokemons</b> for you to choose your favorite
                        </span>
                    )}
                </h1>
            )}
            {errorMessage && (
                <>
                    <h4 className={styles.error}>Something went wrong!</h4>
                    <p className={styles.error}>{errorMessage}</p>
                </>
            )}
            <div className={styles.searchInput}>
                <input placeholder="Enter pokemon name..." />
            </div>

            <div className={styles.cardsContainer}>
                {data?.pokemons?.map(pokemon => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                ))}
            </div>
        </ContentPageBase>
    );
};

export default PokedexPage;
