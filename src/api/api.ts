import { Pokemon } from "../data/models/Pokemon";
import { PokemonsListInfo, PokemonsResponse } from "../data/models/response/PokemonsResponse";
import config from "./config";
import request from "../utils/request";

export type PokemonsApiResult = PokemonsListInfo & {
    pokemons: Pokemon[];
};

export const fetchPokemons = async (): Promise<PokemonsApiResult> => {
    const data: PokemonsResponse = await request(config.endpoints.getPokemons);

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
