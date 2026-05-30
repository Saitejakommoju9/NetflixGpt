import { useEffect } from "react";
import { options } from "../../utils/constants";

function VideoBackground({movieId}){

    const getMovies=async()=>{
        const data=await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos",options);
        const json=await data.json();

        const filteredData=json.results.filter((video)=>video.type=="Trailer");
        const trailerVideo=filteredData.length ? filteredData[0] : json.results[0];
        console.log(trailerVideo);
    }

    useEffect(()=>{
        getMovies();
    },[]);

    return(
        <div className="w-screen">
            <iframe
                className="w-screen aspect-video"
                src="https://www.youtube.com/embed/-4ZVFspRn3M?si=zQPuDbNgvgp4PLC4"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen></iframe>

        </div>
    )
}
export default VideoBackground;