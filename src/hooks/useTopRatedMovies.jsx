import { useDispatch } from "react-redux";
import { addNowPlayingMovie,addTopRatedMovies } from "../../utils/movieSlice";
import { options } from "../../utils/constants";
import { useEffect } from "react";

function useTopRatedMovies(){
    const dispatch=useDispatch();



    const fetchData=async()=>{
        const result=await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1",options);
        const data=await result.json();
      
        dispatch(addTopRatedMovies(data.results));
        

    }

    useEffect(()=>{
        fetchData();
    },[]);
}
export default useTopRatedMovies;