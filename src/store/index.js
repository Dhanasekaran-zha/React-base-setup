import storage from "redux-persist/lib/storage"
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {persistReducer, persistStore} from "redux-persist";
import {setupListeners} from "@reduxjs/toolkit/query";
import {APIQueries} from "./APIQueries.js";
import StorageQueriesReducer from "./StorageQueries.js";

const persistConfig = {
    key: 'root',
    storage
}

const rootReducer = combineReducers({
    [APIQueries.reducerPath]: APIQueries.reducer,
    StorageQueries: StorageQueriesReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: ["persist/PERSIST", "persist/REHYDRATE"],
            }
        }),
        APIQueries.middleware,
    ]
})

const persistor = persistStore(store)

setupListeners(store.dispatch)

export {store, persistor}
