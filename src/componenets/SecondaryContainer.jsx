import { useSelector } from "react-redux";
import MovieList from "./MovieList";


function SecondaryContainer(){
    const movies =useSelector((store)=>store.movie?.nowPlayingMovies);
    const topRatedMovies=useSelector((store)=>store.movie?.topRatedMovies);
    const upComingMovies=useSelector((store)=>store.movie?.upComingMovies);
    console.log(upComingMovies);
    return(
        <div className="bg-black w-screen  min-h-screen">
            <div className="z-20 relative mt-0 lg:-mt-45 2xl:-mt-70">
                <MovieList title={"Now playing"} movies={movies}/>
                <MovieList title={"Top Rated"} movies={topRatedMovies}/>
                <MovieList title={"Upcoming"} movies={upComingMovies}/>
                <MovieList title={"Popular"} movies={movies}/>
            </div>
        </div>

    );
}
export default SecondaryContainer;