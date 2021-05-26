import React, { useState } from "react";
import { ContentPageBase, PokemonCard } from "../../components";

import styles from "./PokedexPage.module.scss";
import useApiData from "../../hooks/useApiData";
import { fetchPokemons } from "../../api/api";
import useDebounce from "../../hooks/useDebounce";

const PokedexPage: React.FC = () => {
    const [searchValue, setSearchValue] = useState<string>("");

    const debouncedValue = useDebounce(searchValue, 500);

    const query = { name: debouncedValue };
    const { data, isLoading, errorMessage } = useApiData(fetchPokemons, { query }, [debouncedValue]);

    const handleSearchChange: React.ChangeEventHandler<HTMLInputElement> = event => {
        setSearchValue(event.target.value);
    };

    return (
        <ContentPageBase className={styles.root}>
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

            <input className={styles.searchInput} placeholder="Enter pokemon name..." value={searchValue}
                   onChange={handleSearchChange} />

            <div className={styles.cardsContainer}>
                {data?.pokemons?.map(pokemon => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                ))}
            </div>
        </ContentPageBase>
    );
};

export default PokedexPage;
