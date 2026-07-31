import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice=createSlice({
    name:"favourite",
    initialState:[],
    reducers:{
        addTofavourite:(state,action)=>{
            state.push(action.payload);
        }
    },

});
export default favouriteSlice.reducer;
export const{addTofavourite}=favouriteSlice.actions;