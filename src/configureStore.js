import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import createLogger from "redux-logger";
import { routerMiddleware } from "react-router-redux";
import { loadTranslations, setLocale, syncTranslationWithStore } from "react-redux-i18n";

import createReducer from "./reducers";
import history from "./history";
import i18n from "./assets/i18n/i18n";
import * as languages from "./root/constants/languages";

var storeInstance;

export function injectAsyncReducer(name, asyncReducer) {
    if (storeInstance.asyncReducers[name]) {
        // console.error(`inject ${name} reducer twice!`);
        return;
    }
    storeInstance.asyncReducers[name] = asyncReducer;
    storeInstance.replaceReducer(createReducer(storeInstance.asyncReducers));
}

const isProd = process.env.NODE_ENV === "production";

const configureStore = preloadedState => {
    const middleware = isProd ? applyMiddleware(thunk, routerMiddleware(history)) : compose(
        applyMiddleware(
            thunk,
            createLogger(),
            routerMiddleware(history)
        ),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    const store = createStore(
        createReducer(),
        preloadedState,
        middleware,
    );
    store.asyncReducers = {};
    storeInstance = store;
    syncTranslationWithStore(store);
    store.dispatch(loadTranslations(i18n));
    store.dispatch(setLocale(languages.RU));
    return store;
};

export default configureStore;