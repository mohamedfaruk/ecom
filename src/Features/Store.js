import useReducer from "./UseReducer";
import { configureStore } from "@reduxjs/toolkit";

const Store = configureStore({
    reducer: {
        carts:useReducer
    }
})


export default Store