import { applyMiddleware, compose, createStore, StoreEnhancer } from "redux";
import thunk from "redux-thunk";
import { devToolsEnhancer } from "redux-devtools-extension";
import { RunType } from "./index";
import createRootReducer from "./store";

const enhancers: StoreEnhancer[] = [];

if ((process.env.NODE_ENV as RunType) === "development") {
    enhancers.push(devToolsEnhancer({ name: "DevTool" }));
}

export default function createConfiguredStore(preloadedState = {}) {
    return createStore(createRootReducer(), preloadedState, compose(applyMiddleware(thunk), ...enhancers));
}
