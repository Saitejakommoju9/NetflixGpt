import { useSelector } from "react-redux";
import MovieList from "./MovieList";

function SecondaryContainer(){
    const movies =useSelector((store)=>store.movie?.nowPlayingMovies);
    const topRatedMovies=useSelector((store)=>store.movie?.topRatedMovies);
   // console.log(popularMovies);
    return(
        <div className="bg-black">
            <div className="z-20 relative -mt-90">
                <MovieList title={"Now playing"} movies={movies}/>
                <MovieList title={"Top Rated"} movies={topRatedMovies}/>
                <MovieList title={"Now playing"} movies={movies}/>
                <MovieList title={"Now playing"} movies={movies}/>
            </div>
        </div>

    );
}
export default SecondaryContainer;