import{combineReducers, legacy_createStore,applyMiddleware,compose } from "redux"
import { counter_reducer } from "./counter_reducer"
import { todo_reducer } from "./todo_reducer"
import {authreducer} from "../store/Auth/authReduser"
import thunk from "redux-thunk"
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootRducer=combineReducers({
    counter:counter_reducer,
    todo:todo_reducer,
    LOGIN:authreducer,
})
export const store=legacy_createStore(rootRducer,composeEnhancers(applyMiddleware(thunk)))