import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../utils/Firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../../utils/userSlice";
import { signOut } from "firebase/auth";
import { logo, user_icon } from "../../utils/constants";
import { toggleGptSearch } from "../../utils/gptSlice";


function Header(){

    const[dropDown,setDropDown]=useState(false);

    const navigate=useNavigate();
    const dispatch=useDispatch();

    const user=useSelector((store)=>store.user);

    const handleButton=()=>{
        setDropDown(!dropDown);
    }
    const gpt=useSelector((store)=>store?.gpt?.showGptSearch);
   

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, (user) => {
                if (user) {
                  
                    //const uid = user.uid;
        
                    const {uid,email,displayName,photoURL}=user;
        
                    dispatch(
                        addUser({
                            uid:uid,
                            email:email,
                            displayName:displayName,
                            photoURL:photoURL,
                        })
                    );

                    navigate("/Browse");

                   


        
                    // ...
                } else {
                    // User is signed out
                    // ...
                    dispatch(removeUser());

                    navigate("/");
                }
            });

            return ()=>unsubscribe();
        },[]);

    const handleClick=()=>{
        signOut(auth).then(() => {
        // Sign-out successful.
           // navigate("/");
        }).catch((error) => {
        // An error happened.
        });

    }
    console.log(user);

    const handleGptSearchClick=()=>{
        dispatch(toggleGptSearch());
    }
    console.log("header rendered");
   
    const handleNavigate=()=>{
        navigate("/Favourites");
    }


    return(
        <>
        <div className="absolute w-screen py-2 bg-gradient-to-b from-black z-10 flex  justify-between">
            <img src={logo} className="w-17 sm:w-44"></img>
            {user &&<>
            <button onClick={handleGptSearchClick} className="bg-purple-700 text-white md:px-4 cursor-pointer px-1 text-sm py-2 my-5 md:ml-94 rounded-lg">{gpt?"Home Page" : "GPT Search"}</button>
            <button className="bg-red-400 px-1 sm:p-3 rounded-xl mt-4 cursor-pointer h-12 pt-1 sm:pt-2 text-white text-lg" onClick={handleNavigate}>Favourites</button>
            </>
            }
          
                
           
            {user && <div className="flex cursor-pointer  p-4">
                <img className="w-10 md:w-12 h-12" src={user_icon}></img>
                
                <button className=" text-white cursor-pointer" onClick={handleButton}>{dropDown ? "▲" :"▼"}</button>
                
                
            </div>
            } 
        </div>
            
          {user && dropDown && 
        <div className="bg-black absolute hover:opacity-70 right-2 sm:right-16 my-20  sm:my-26 opacity-85 border border-solid border-gray-500 cursor-pointer">
         <div className="flex  py-2 ">
            <img className="w-6 h-6 ml-4" src={user_icon}></img> <p className="px-2 font-bold text-white">{user?.displayName}</p>
         </div>
            <h1 className="text-white font-bold py-4 px-4 ">Mange Profiles</h1>
            <hr className="w-full border-gray-300" />
            <div>
                <p className="text-white py-2 px-4 font-bold">Your Account</p>
                <p className="text-white py-1 px-4 font-bold">Help Center</p>
                <p className="text-white py-1 pb-2 px-4 font-bold" onClick={handleClick}>Sign Out</p>
            </div>

        </div>
        }
            

        </>
    )
}
export default Header;