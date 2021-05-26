import React from "react";
import { ContentPageBase, PokemonDetailsCard } from "../../components";
import { useApiData } from "../../hooks";
import { fetchPokemonById } from "../../api/api";

import styles from "./PokemonPage.module.scss";

export type PokemonPageProps = {
    id: number;
};

const PokemonPage: React.FC<PokemonPageProps> = ({ id }) => {
    const {
        data: pokemon,
        isLoading,
        errorMessage,
    } = useApiData(fetchPokemonById, { urlArgs: { id: id.toString() } }, [id]);

    console.log("Pokemon Details: ", pokemon, isLoading, errorMessage);

    return (
        <ContentPageBase className={styles.root}>
            {/* <h5>This is pokemon with id = {id}</h5> */}
            {errorMessage &&
            <h4 className="color-error">{errorMessage}</h4>}
            {pokemon && <PokemonDetailsCard pokemon={pokemon} />}
        </ContentPageBase>
    );
};

export default PokemonPage;
