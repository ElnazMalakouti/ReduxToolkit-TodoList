import todoReducer from "./todoReducer/todoReducer";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

const combinedReducers = combineReducers({
    todo : todoReducer
})

const persistedReducers = persistReducer({key:'rootReducer',storage,whitelist:['todo']},combinedReducers)
export default persistedReducers