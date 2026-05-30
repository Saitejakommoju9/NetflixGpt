function Videotitle({title,overView}){
    return(
        <div className="text-black pt-36 w-2/5 px-20 absolute text-white">
            <h1 className="font-bold text-3xl py-4">{title}</h1>
            <p className="py-4">{overView}</p>
            <div className="">
                <button className="mx-2 bg-gray-500 p-3 rounded-md ">play</button>
                <button className="mx-2 bg-gray-500 p-3 rounded-md ">More Info</button>
            </div>
        </div>

    );
    
}
export default Videotitle;