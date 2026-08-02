import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice=createSlice({
    name:"favourite",
    initialState:[],
    reducers:{
        addTofavourite:(state,action)=>{
            state.push(action.payload);
        },
        removeFromfavourites:(state,action)=>{
            return state.filter(item => item.id!==action.payload);
        }
    },

});
export default favouriteSlice.reducer;
export const{addTofavourite,removeFromfavourites}=favouriteSlice.actions;