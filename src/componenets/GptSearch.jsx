import GptMovieSuggestions from "./gptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

function GptSearch(){
    return(
        <>
            <div className="fixed -z-10">
                <img className="" src="https://assets.nflxext.com/ffe/siteui/vlv3/435e8bb8-7f1b-49cb-8da8-bff997124294/web/IN-en-20260511-TRIFECTA-perspective_ec39852e-0b48-4e8a-b415-dd8376cd83ce_medium.jpg" alt="Login Background" />
            </div>
            <div>
                <GptSearchBar/>
                <GptMovieSuggestions/>
            </div>
        </>
    )
    
}
export default GptSearch;