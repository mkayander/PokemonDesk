import { Reducer } from "redux";

type AppReducerState = {
    msg: string,
    someNum: number
}

const initialState: AppReducerState = {
    msg: "Hello World",
    someNum: 26
}

type Action = {
    type: string,
    payload: any
}

const appReducer: Reducer<AppReducerState, Action> = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default appReducer