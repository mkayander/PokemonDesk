import React, { useState } from "react";
import { ContentPageBase, PokemonCard } from "../../components";

import styles from "./PokedexPage.module.scss";
import useDebounce from "../../hooks/useDebounce";
import useReduxApiData from "../../hooks/useReduxApiData";

const PokedexPage: React.FC = () => {
    const [searchValue, setSearchValue] = useState<string>("");

    const debouncedValue = useDebounce(searchValue, 500);

    const query = { name: debouncedValue };
    const { data: pokemonsData, isLoading, errorMessage } = useReduxApiData("pokemons", { query }, [debouncedValue]);

    const { data: typesData, isLoading: isTypesLoading } = useReduxApiData("types");

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
                            {pokemonsData?.total} <b>Pokemons</b> for you to choose your favorite
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

            <input
                className={styles.searchInput}
                placeholder="Enter pokemon name..."
                value={searchValue}
                onChange={handleSearchChange}
            />

            <div>{isTypesLoading ? "Loading types..." : typesData?.map(value => <div>{value}</div>)}</div>

            <div className={styles.cardsContainer}>
                {pokemonsData?.pokemons?.map(pokemon => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                ))}
            </div>
        </ContentPageBase>
    );
};

export default PokedexPage;
