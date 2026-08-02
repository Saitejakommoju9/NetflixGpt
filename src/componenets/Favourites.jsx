import Header from "./Header";
import MoviesCard from "./MoviesCard";
import { useSelector } from "react-redux";

function Favourites(){
    const favourites=useSelector((store)=>store.favourite);
    console.log(favourites);
    return(
        <div>
            <h1 className="text-red-500 left-1/2 my-5 text-center -ml-15 sm:-ml-10 text-3xl absolute font-bold">Favourites!</h1>
       
              <div className="fixed -z-10">
                <img className="h-screen fixed w-screen object-cover" src="https://assets.nflxext.com/ffe/siteui/vlv3/435e8bb8-7f1b-49cb-8da8-bff997124294/web/IN-en-20260511-TRIFECTA-perspective_ec39852e-0b48-4e8a-b415-dd8376cd83ce_medium.jpg" alt="Login Background" />
            </div>
            <div className="flex flex-wrap flex-col-3 mx-10">
            {
                favourites?.length!=0 ? favourites?.map((movie)=>(
                    <div className="mt-15 z-10 flex  mx-3">
                    <MoviesCard movie={movie} poster={movie?.poster_path}/>
                    </div>
                )) : <h1 className="font-medium text-3xl absolute my-30 text-gray-300 text-center left-1/2 -ml-40 ">No Movie Are In Favourites!!</h1>
            }
            </div>


        </div>
    )
}
export default Favourites;