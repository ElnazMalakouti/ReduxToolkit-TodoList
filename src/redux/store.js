import { createStore } from "@reduxjs/toolkit";
import persistedReducers from "./reducers";
import persistStore from "redux-persist/lib/persistStore";

export const store = createStore(persistedReducers)
export const persistore = persistStore(store)