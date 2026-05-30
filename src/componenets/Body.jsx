import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";


function Body(){

    //const dispatch=useDispatch();

    const appRoute=createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/Browse",
            element:<Browse/>
        }
    ]);

    

    return(
        <div>
            <RouterProvider router={appRoute}/>
        </div>

    );

}
export default Body;