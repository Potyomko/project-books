import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { trainingReducer } from "./training/slice";
import { AuthReducer } from "./auth/slice";

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

  // const persistedAuthReducer = persistReducer(persistConfig, AuthReducer);
  
  export const store = configureStore({
    reducer: {
      book: bookReducer,
      // filter: changeFilterReducer,
      auth: AuthReducer, 
      // traning: traningReducer
      // auth: persistedAuthReducer, 
      traning: traningReducer
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
  });
  
  export const persistor = persistStore(store);
  
  key: 'root',
  storage,
  whitelist: ['auth']
};

const rootReducer = combineReducers({
  training: trainingReducer,
  auth: AuthReducer
});
