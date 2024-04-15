import { combineReducers, createStore } from "redux"
import { stateReducer } from "./StateReducer"



let RootReducer = combineReducers({
    stateReducer: stateReducer
})


export let store = createStore(RootReducer)