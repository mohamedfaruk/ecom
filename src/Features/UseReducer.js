import { createSlice } from "@reduxjs/toolkit";

const storageData = localStorage.getItem('cartItems') != null ? JSON.parse(localStorage.getItem('cartItems')) : []
const initialState =  {
  list:storageData
}

const slice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
          AddItem:(state, action) => {
                const counterid = state.list.filter((c) => c.id === action.payload.id);
                if (counterid == !counterid) {
                state.list.push(action.payload)
              }
                localStorage.setItem('cartItems', JSON.stringify(state.list.map(item => item)))
            },
         RemoveItem: (state,action) => {

            const nextCart = state.list.filter( items => items.id !== action.payload.id);
            state.list = nextCart;
        },
        decrement: (state, action) =>  {
            const counter = state.list.find((c) => c.id === action.payload.id);
      if (counter) {
        counter.value -= 1;
      }           
        },
        increment: (state, action) =>  {
            const counter = state.list.find((c) => c.id === action.payload.id);
      if (counter) {
        counter.value += 1;
      }           
        }, 
     },    
  });


  export default slice.reducer;
  export const { AddItem, RemoveItem, decrement, increment } = slice.actions