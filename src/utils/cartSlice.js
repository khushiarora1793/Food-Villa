import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name: "cart",
    initialState:{
        items:[]
    },
    reducers:{
          addItem:(state, action)=>{
               state.items.push(action.payload);
          },
          removeItemlast:(state)=>{
               state.items.pop();
          },
          removeItemfirst:(state)=>{
            state.items.shift();
          },
          clearCart:(state)=>{ 
             state.items.length=0;
          },
          
    }
})

  export const { addItem, removeItemlast,removeItemfirst, clearCart}=cartSlice.actions;
export default cartSlice.reducer;