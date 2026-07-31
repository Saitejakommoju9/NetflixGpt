import Header from "./Header";
import MoviesCard from "./MoviesCard";
import { useSelector } from "react-redux";

function Favourites(){
    const favourites=useSelector((store)=>store.favourite);
    console.log(favourites);
    return(
        <div>
            <h1 className="text-white text-center text-xl font-bold">Favourites!</h1>
       
              <div className="fixed -z-10">
                <img className="h-screen fixed w-screen object-cover" src="https://assets.nflxext.com/ffe/siteui/vlv3/435e8bb8-7f1b-49cb-8da8-bff997124294/web/IN-en-20260511-TRIFECTA-perspective_ec39852e-0b48-4e8a-b415-dd8376cd83ce_medium.jpg" alt="Login Background" />
            </div>
            <div className="">
            {
                favourites?.length!=0 ? favourites?.map((movie)=>(
                    <div className="my-8 absolute mx-3">
                    <MoviesCard movie={movie} poster={movie?.poster_path}/>
                    </div>
                )) : <h1>No Movie Are In Favourites!!</h1>
            }
            </div>


        </div>
    )
}
export default Favourites;