import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import Videotitle from "./Videotitle";

function MainContainer(){
    const movies=useSelector((store)=>store.movie?.nowPlayingMovies);
    console.log(movies);

   if(!movies)
        return;

    const mainMovie=movies[6];

    console.log(mainMovie);

    const{title,overview,id}=mainMovie;
    
    

    return(
        <div className="">
        <Videotitle title={title} overView={overview}/>
        <VideoBackground movieId={id}/>
        </div>
        
    );

}
export default MainContainer;