import { configureStore } from "@reduxjs/toolkit";
import shoppingReducer from "./Features/shoppingSlice";

export const store = configureStore({
  reducer: {
    shopping: shoppingReducer,
  },
});
