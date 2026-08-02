import { useRef } from "react";

import openai from "../../utils/openai";
import { options } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addGptMovieResult } from "../../utils/gptSlice";

function GptSearchBar(){

    const searchText=useRef(null);
    const dispatch=useDispatch();

    const searchTmdbMovie=async(movie)=>{
        const data = await fetch(
            "https://api.themoviedb.org/3/search/movie?query=" +
                movie +
                "&include_adult=false&language=en-US&page=1",
            options
        );

        const json=await data.json();
        return json.results;

    }
    
    const handleGptSearchButton= async()=>{


         const gptQuery ="Act as a Movie Recommendation system and suggest some movies for the query : " +
                searchText.current.value +
            ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
        
        
         const gptResults = await openai.chat.completions.create({
            model: "google/gemma-4-31b-it:free",
            messages: [
            {
                "role": "user",
                "content": gptQuery
            }
            ],
    
          });



        console.log(gptResults.choices[0].message.content);
        const gptMovie=gptResults.choices[0].message.content.split(",");
        const promiseArray=gptMovie.map((movie)=>searchTmdbMovie(movie));
        const tmdbMovie=await Promise.all(promiseArray);

        
        dispatch(addGptMovieResult({movieName:gptMovie,movieResult:tmdbMovie}));


    }

    return(
        <div className="pt-[30%] sm:pt-[10%] flex justify-center ">
            <form className="w-full sm:w-1/2 bg-black grid grid-cols-12 " onSubmit={(e)=>e.preventDefault()}>
                <input ref={searchText} type="text" className="col-span-9  rounded-sm p-4 bg-white text-xs md:text-sm  m-4 text-black" placeholder="What would you like to watch today"></input>

                <button className="col-span-3 sm:col-span-3  bg-red-600 m-5   rounded-lg py-2 px-1 sm:px-4 text-white" onClick={handleGptSearchButton}>Search..</button>
            </form>
        </div>
    )

}
export default GptSearchBar;