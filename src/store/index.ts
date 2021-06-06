import { combineReducers } from "redux";
import pokemonsReducer from "./pokemonsReducer";
import appReducer from "./appReducer";

const createRootReducer = () =>
    combineReducers({
        app: appReducer,
        pokemons: pokemonsReducer,
    });

export default createRootReducer;
