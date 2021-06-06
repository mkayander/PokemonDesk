import { combineReducers, Reducer } from "redux";
import pokemonsReducer, { PokemonsState } from "./pokemonsReducer";
import appReducer from "./appReducer";

export type StoreState = {
    pokemons: PokemonsState
}

const createRootReducer = () =>
    combineReducers({
        app: appReducer,
        pokemons: pokemonsReducer as Reducer,
    });

export default createRootReducer;
