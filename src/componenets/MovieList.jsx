import MoviesCard from "./MoviesCard";
import Shimmer from "./Shimmer";

function MovieList({title,movies}){
    return(
        <div className="px-6">
            <h1 className="text-white text-2xl font-light py-4 mx-2">{title}</h1>
            {movies?(
            <div className="flex  overflow-x-scroll hide-scrollbar">
                <div className="flex  ">
                    {movies?.map((movie)=>(
                        <>
                        
                        <MoviesCard key={movie?.id} movie={movie} poster={movie?.poster_path} />
                        </>
                    ))}
                </div>
            </div>):
                <div className="flex overflow-x-scroll hide-scrollbar">
                {[...Array(5)].map((_,index)=>(<Shimmer key={index}/>))
              
            }
            </div>
}
        
        </div>
    )

}
export default MovieList;