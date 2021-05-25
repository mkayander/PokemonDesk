import React from "react";
import { ContentPageBase, PokemonDetailsCard } from "../../components";
import { useApiData } from "../../hooks";
import { fetchPokemons } from "../../api/api";

import styles from "./PokemonPage.module.scss"

export type PokemonPageProps = {
    id: number;
};

const PokemonPage: React.FC<PokemonPageProps> = ({ id }) => {
    const { data, isLoading, errorMessage } = useApiData(fetchPokemons);

    console.log("Pokemon Details: ", data, isLoading, errorMessage);

    const poke = data?.pokemons[0];

    return (
        <ContentPageBase className={styles.root}>
            <h5>This is pokemon with id = {id}</h5>
            {poke && <PokemonDetailsCard pokemon={poke} />}
        </ContentPageBase>
    );
};

export default PokemonPage;
