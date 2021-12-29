import { combineReducers } from "redux";
// import { createStore } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { composeWithDevTools } from 'redux-devtools-extension';
import PhonebookReducer from "./Phonebook/Phonebook-reducer";
import logger from "redux-logger";
// const initialState = {
//     contacts:[
//     { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//     { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//     { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//     { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
//     ],
//     filter: ''

// }
  
// const rootReducer = combineReducers({
//     phonebook: PhonebookReducer,
// })

// const store = createStore(rootReducer, composeWithDevTools())
const middleware = [...getDefaultMiddleware(), logger]

const store = configureStore({
    reducer: {
        phonebook: PhonebookReducer,
        middleware
},
})
export default store