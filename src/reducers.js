import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { i18nReducer } from "react-redux-i18n";

export default function createReducer(asyncReducers) {
    return combineReducers({
        ...asyncReducers,
        router: routerReducer,
        i18n: i18nReducer,
    });
}