import MoviesCard from "./MoviesCard";

function MovieList({title,movies}){
    return(
        <div className="px-6">
            <h1 className="text-white text-2xl py-4 mx-2">{title}</h1>
            <div className="flex  overflow-x-scroll hide-scrollbar">
                <div className="flex  ">
                    {movies?.map((movie)=>(
                        <MoviesCard key={movie?.id} poster={movie?.poster_path}/>
                    ))}
                </div>
            </div>
        </div>
    )

}
export default MovieList;