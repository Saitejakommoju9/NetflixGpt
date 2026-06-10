import { base_url } from "../../utils/constants";

function MoviesCard({poster}){
    return(
        <div className="px-2 w-48">
            {poster &&
            <img src={base_url+poster}/>}

        </div>
    )

}
export default MoviesCard;