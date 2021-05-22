import { Pokemon } from "../data/models/Pokemon";
import { PokemonsListInfo, PokemonsResponse } from "../data/models/response/PokemonsResponse";

export type PokemonsApiResult = PokemonsListInfo & {
    pokemons: Pokemon[];
};

export const fetchPokemons = async (): Promise<PokemonsApiResult> => {
    const response = await fetch("https://zar.hosthot.ru/api/v1/pokemons");
    const data: PokemonsResponse = await response.json();

    console.log("***: newData: ", data);

    return {
        ...data,
        pokemons: data.pokemons.map(value => {
            const { stats: rawStats } = value;

            const instance: Pokemon = {
                id: value.id,
                cleanName: value.name_clean,
                abilities: value.abilities,
                stats: {
                    hp: rawStats.hp,
                    attack: rawStats.attack,
                    defense: rawStats.defense,
                    specialAttack: rawStats["special-attack"],
                    specialDefense: rawStats["special-defense"],
                    speed: rawStats.speed,
                },
                types: value.types,
                img: value.img,
                name: value.name,
                baseExperience: value.base_experience,
                height: value.height,
                isDefault: value.is_default,
                order: value.order,
                weight: value.weight,
            };

            return instance;
        }),
    };
};

export const send = () => {};
