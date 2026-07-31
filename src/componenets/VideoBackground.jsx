import { useEffect, useState } from "react";
import { options } from "../../utils/constants";

function VideoBackground({movieId}){
    const [trailerVideo, setTrailerVideo] = useState([]);

    const getMovies=async()=>{
        const data=await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos",options);
        const json=await data.json();

        const filteredData=json.results.filter((video)=>video.type=="Trailer");
        const trailer=filteredData.length ? filteredData[0] : json.results[0];
        setTrailerVideo(trailer);
        console.log(trailerVideo);
    }

    useEffect(()=>{
        getMovies();
    },[]);

    return(
         <div className=" w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
    )
}
export default VideoBackground;