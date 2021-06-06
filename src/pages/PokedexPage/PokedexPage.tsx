import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ContentPageBase, PokemonCard } from "../../components";

import styles from "./PokedexPage.module.scss";
import useApiData from "../../hooks/useApiData";
import { fetchPokemons } from "../../api/api";
import useDebounce from "../../hooks/useDebounce";
import { getFetchTypesAction, getPokemonTypes, isPokemonTypesLoading } from "../../store/pokemonsReducer";

const PokedexPage: React.FC = () => {
    const dispatch = useDispatch();
    const types = useSelector(getPokemonTypes);
    const isTypesLoading = useSelector(isPokemonTypesLoading);
    console.log("Pokedex redux types data: ", types);
    const [searchValue, setSearchValue] = useState<string>("");

    const debouncedValue = useDebounce(searchValue, 500);

    const query = { name: debouncedValue };
    const { data, isLoading, errorMessage } = useApiData(fetchPokemons, { query }, [debouncedValue]);

    const handleSearchChange: React.ChangeEventHandler<HTMLInputElement> = event => {
        setSearchValue(event.target.value);
    };

    useEffect(() => {
        dispatch(getFetchTypesAction());
    }, [dispatch]);

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

            <input
                className={styles.searchInput}
                placeholder="Enter pokemon name..."
                value={searchValue}
                onChange={handleSearchChange}
            />

            <div>{isTypesLoading ? "Loading types..." : types?.map(value => <div>{value}</div>)}</div>

            <div className={styles.cardsContainer}>
                {data?.pokemons?.map(pokemon => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                ))}
            </div>
        </ContentPageBase>
    );
};

export default PokedexPage;
