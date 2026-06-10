import { useDispatch } from "react-redux";
import { addNowPlayingMovie } from "../../utils/movieSlice";
import { options } from "../../utils/constants";
import { useEffect } from "react";

function useNowPlayingMovies(){
    const dispatch=useDispatch();



    const fetchData=async()=>{
        const result=await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1",options);
        const data=await result.json();
        
        dispatch(addNowPlayingMovie(data.results));
        

    }

    useEffect(()=>{
        fetchData();
    },[]);
}
export default useNowPlayingMovies;