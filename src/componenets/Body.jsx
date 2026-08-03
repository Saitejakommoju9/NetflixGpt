import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import Favourites from "./Favourites";


function Body(){

   

    const appRoute=createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/Browse",
            element:<Browse/>
        },
        {
            path:"/Favourites",
            element:<Favourites/>

        },
    ]);

    

    return(
        <div>
            <RouterProvider router={appRoute}/>
        </div>

    );

}
export default Body;