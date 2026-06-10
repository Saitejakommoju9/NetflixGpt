import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        movieName:null,
        movieResult:null,
    },
    reducers:{
        toggleGptSearch:(state,action)=>{
            state.showGptSearch=!state.showGptSearch
        },
        addGptMovieResult:(state,action)=>{
            const {movieName,movieResult}=action.payload;
            state.movieName=movieName;
            state.movieResult=movieResult;
        }
    }
});

export const{toggleGptSearch,addGptMovieResult}=gptSlice.actions;
export default gptSlice.reducer;