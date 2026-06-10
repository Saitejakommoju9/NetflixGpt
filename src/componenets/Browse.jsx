import { useEffect } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

import useTopRatedMovies from "../hooks/useTopRatedMovies";

function Browse(){

    useNowPlayingMovies();
    useTopRatedMovies();
    

    const showGpt=useSelector((store)=>store.gpt.showGptSearch);
    console.log(showGpt);

    return(
        <div>
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