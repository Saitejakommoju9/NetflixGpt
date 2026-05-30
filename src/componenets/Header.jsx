import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../utils/Firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../../utils/userSlice";
import { signOut } from "firebase/auth";
import { logo, user_icon } from "../../utils/constants";


function Header(){

    const[dropDown,setDropDown]=useState(false);

    const navigate=useNavigate();
    const dispatch=useDispatch();

    const userStore=useSelector((store)=>store.user);

    const handleButton=()=>{
        setDropDown(!dropDown);
    }

   

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
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

            
        },[]);

    const handleClick=()=>{
        signOut(auth).then(() => {
        // Sign-out successful.
           // navigate("/");
        }).catch((error) => {
        // An error happened.
        });

    }
    console.log(userStore);


    return(
        <>
        <div className="flex justify-between w-screen absolute py-2 px-8 bg-gradient-to-b from-black z-10 cursor-pointer">
            <img src={logo} className="w-44"></img>
                
           
            {userStore && <div className="flex  p-4">
                <img className="w-12 h-12" src={user_icon}></img>
                
                <button className="p-2 cursor-pointer" onClick={handleButton}>{dropDown ? "▲" :"▼"}</button>
                
                
            </div>
            } 
        </div>
            
          {userStore && dropDown && 
        <div className="bg-black absolute right-16  my-26 opacity-85 border border-solid border-gray-500 cursor-pointer">
         <div className="flex px-4 py-2 ">
            <img className="w-6 h-6 " src={user_icon}></img> <p className="px-2 font-bold text-white">{userStore?.displayName}</p>
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