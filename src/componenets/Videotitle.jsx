function Videotitle({title,overView}){
    return(
        <div className="pt-[15%] md:pt-[15%] px-12 md:px-4 md:px-20 aspect-video absolute text-white  bg-gradient-to-r from-black w-screen">
            <h1 className="font-bold text-md sm:text-2xl md:text-3xl -ml-8 md:-ml-0 pt-15 md:py-4">{title}</h1>
            <p className="md:py-4 w-1/2 hidden md:block">{overView}</p>
            <div className="flex mt-2 text-sm md:text-lg ">
                <button className="md:mx-2 -ml-8 md:-ml-0 hover:bg-white hover:text-black  bg-gray-500 px-2 p-3 rounded-lg md:rounded-md ">play ▶️</button>
                <button className="mx-2 bg-gray-500  hover:bg-white hover:text-black px-4 p-3 rounded-lg md:rounded-md ">More Info ℹ️</button>
            </div>
        </div>

    );
    
}
export default Videotitle;