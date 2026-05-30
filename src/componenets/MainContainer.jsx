import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import Videotitle from "./Videotitle";

function MainContainer(){
    const movies=useSelector((store)=>store.movie?.nowPlayingMovies);

   if(!movies)
        return;

    const mainMovie=movies[1];

    console.log(mainMovie);

    const{title,overview,id}=mainMovie;
    
    

    return(
        <>
        <Videotitle title={title} overView={overview}/>
        <VideoBackground movieId={id}/>
        </>
        
    );

}
export default MainContainer;