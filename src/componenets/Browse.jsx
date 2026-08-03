import { useEffect } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

function Browse(){

    useNowPlayingMovies();
    useTopRatedMovies();
    useUpcomingMovies();
    

    const showGpt=useSelector((store)=>store.gpt.showGptSearch);
    
    return(
        <div className="px-0 mx-0 w-screen">
            <Header/>
            {showGpt ? <GptSearch/> : 
                <>
                <MainContainer/>
                <SecondaryContainer/>
                </>
                
            }
        </div>

    );
}
export default Browse;