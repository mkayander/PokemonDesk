export interface Pokemon {
    id: number;
    cleanName: string;
    abilities: string[];
    stats: Stats;
    types: string[];
    img: string;
    name: string;
    baseExperience: number;
    height: number;
    isDefault: boolean;
    order: number;
    weight: number;
}

export interface Stats {
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
}

export type Ability = "overgrow" | "chlorophyll";

export type PokeType = "grass" | "poison" | "water" | "flying" | "bug" | "fire";
