import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { trainingReducer } from "./training/slice";
import { AuthReducer } from "./auth/slice";
import { bookReducer } from "./library/slice";
import { changeFilterReducer } from "./library/slice";

const persistConfig = {
key: 'root',
storage,
whitelist: ['auth']
};

const rootReducer = combineReducers({
training: trainingReducer,
auth: AuthReducer,
library: bookReducer,
filter: changeFilterReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
reducer: persistedReducer
});

export const persistor = persistStore(store);