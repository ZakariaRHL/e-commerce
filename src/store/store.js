import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./Cart-slice";

export const store = configureStore({ reducer: cartReducer });
