import { configureStore} from "@reduxjs/toolkit";

import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { AuthReducer } from "./auth/slice";
import { bookReducer, changeFilterReducer } from "./slice";

const persistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'] 
  };
  
  const middleware = (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  });
  
  const persistedAuthReducer = persistReducer(persistConfig, AuthReducer);
  
  export const store = configureStore({
    reducer: {
      book: bookReducer,
      filter: changeFilterReducer,
      auth: persistedAuthReducer, 
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
  });
  
  export const persistor = persistStore(store);