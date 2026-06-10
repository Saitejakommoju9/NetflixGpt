import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movie",
    initialState:{
        nowPlayingMovies:null,
        topRatedMovies:null
    },
    reducers:{
        addNowPlayingMovie:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovies=action.payload;
        }
    }

});
export default movieSlice.reducer;
export const{addNowPlayingMovie,addTopRatedMovies}=movieSlice.actions;