import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { registerAPI } from "./redux/registerSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
  reducer: combineReducers({
    [registerAPI.reducerPath]: registerAPI.reducer,
  }),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(registerAPI.middleware),
});

setupListeners(store.dispatch);

export default store;
