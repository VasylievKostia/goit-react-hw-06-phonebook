import { combineReducers } from "redux";
import { configureStore, } from "@reduxjs/toolkit";
import PhonebookReducer from "./Phonebook/Phonebook-reducer";
// import { createStore } from "redux";
// import { composeWithDevTools } from 'redux-devtools-extension';
// import logger from "redux-logger";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
  key: 'contacts',
  version: 1,
  storage,
  blacklist: ['filter']
}

const persistedPhonebookReduser = persistReducer( persistConfig, PhonebookReducer)

const rootReducer = combineReducers({
  phonebook: persistedPhonebookReduser, 
})

// const store = createStore(rootReducer, composeWithDevTools())
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
})

export default store

export const persistor = persistStore(store)