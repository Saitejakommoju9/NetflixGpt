import { useSelector } from "react-redux";
import MovieList from "./MovieList";

function GptMovieSuggestions(){
    const {movieName,movieResult}=useSelector((store)=>store.gpt);
    if(!movieName)
        return null;



    console.log(movieName);
    console.log(movieResult);
    return(
        <div className="bg-black p-4 m-4 mt-20 opacity-78 ">
            <div className="">
                {movieName?.map((movie,index)=>(
                    <MovieList key={movie} title={movie} movies={movieResult[index]} />
                ))}
            </div>
        </div>

    );

}
export default GptMovieSuggestions;