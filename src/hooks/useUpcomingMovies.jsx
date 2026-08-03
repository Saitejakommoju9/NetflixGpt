import { useDispatch } from "react-redux";
import { options } from "../../utils/constants"
import { addUpcomingMovies } from "../../utils/movieSlice";
import { useEffect } from "react";

const useUpcomingMovies=()=>{
    const dispatch=useDispatch();
    const fetchData=async()=>{
        const data=await fetch("https://api.themoviedb.org/3/movie/upcoming?page=1",options);
        const result=await data.json();
     
        dispatch(addUpcomingMovies(result.results));

    }

    useEffect(()=>{
        fetchData();
    },[]);
    
}
export default useUpcomingMovies;