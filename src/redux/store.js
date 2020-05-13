import {formReducer} from "./reducers";
import {combineReducers, createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";

const reducers = combineReducers({
    formReducer: formReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk));
