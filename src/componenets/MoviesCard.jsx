import { useState } from "react";
import { base_url } from "../../utils/constants";
import Shimmer from "./Shimmer";
import { useDispatch, useSelector } from "react-redux";
import { addTofavourite, removeFromfavourites } from "../../utils/favouritesSlice";

function MoviesCard({poster,movie}){
    const favourites=useSelector((store)=>store.favourite);

    const isFavourite=favourites.some((item)=>item.id===movie.id);
    const dispatch=useDispatch();
    
    const handleClick=()=>{
      
        if(isFavourite){
            dispatch(removeFromfavourites(movie.id));
        }else{
            dispatch(addTofavourite(movie));
        }
    }
    return movie?(
        <div className="px-2 relative w-27 md:w-48">
            
            {poster &&
            <>
            <button className="absolute  rounded-lg px-2 sm:px-3 bg-gray-300" onClick={handleClick}>{!isFavourite ? "♡" : "♥️"}</button>
            <img src={base_url+poster}/>
            </>}

        </div>
    ):(
        <Shimmer/>
    )

}
export default MoviesCard; 