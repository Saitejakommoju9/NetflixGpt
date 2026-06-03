function GptSearchBar(){
    return(
        <div className="pt-[10%] flex justify-center">
            <form className="w-1/2 bg-black grid grid-cols-12">
                <input type="text" className="col-span-9 p-4  m-4 text-white" placeholder="What would you like to watch today"></input>

                <button className="col-span-3 bg-red-600 m-5  rounded-lg py-2 px-4 text-white">Search..</button>
            </form>
        </div>
    )

}
export default GptSearchBar;