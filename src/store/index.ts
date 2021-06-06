import { combineReducers } from "redux";
import pokemonsReducer, { PokemonsState } from "./pokemonsReducer";
import appReducer from "./appReducer";

export type StoreState = {
    pokemons: PokemonsState
}

const createRootReducer = () =>
    combineReducers({
        app: appReducer,
        pokemons: pokemonsReducer,
    });

export default createRootReducer;
