import { useRef, useState } from "react";
import Header from "./Header";
import { CheckvalidData } from "../../utils/validate";
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utils/Firebase";
import {signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { addUser,removeUser } from "../../utils/userSlice";

function Login(){
    const[isSignInForm,setIsSignInForm]=useState(true);
    const[errorMessage,setErrorMessage]=useState("");
    const navigate=useNavigate();

    const Email=useRef(null);
    const Password=useRef(null);
    const name=useRef(null);


    const handleButtonClick=()=>{
        const message=CheckvalidData(Email.current.value,Password.current.value);
        setErrorMessage(message);

       
        

        if(!isSignInForm){
            createUserWithEmailAndPassword(auth, Email.current.value, Password.current.value)
            .then((userCredential) => {
            
                const user = userCredential.user;

                updateProfile(user, {
                    displayName:name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
                }).then(() => {
                // Profile updated!
                    const {uid,email,displayName,photoURL}=auth.currentUser;
                            
                    dispatch(
                        addUser({
                            uid:uid,
                            email:email,
                            displayName:displayName,
                            photoURL:photoURL,
                        })
                    );

                   

                // ...
                }).catch((error) => {
                // An error occurred
                // ...
                });
                 navigate("/Browse");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorMessage);
                
            });
        }else{
            signInWithEmailAndPassword(auth, Email.current.value, Password.current.value)
            .then((userCredential) => {
                
                const user = userCredential.user;
                console.log(user);
                navigate("/Browse");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+"-"+errorMessage);
            });
        }
    }

    const handleClick=()=>{
        setIsSignInForm(!isSignInForm);
    }
    return(
        <div>
            <Header/>
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/435e8bb8-7f1b-49cb-8da8-bff997124294/web/IN-en-20260511-TRIFECTA-perspective_ec39852e-0b48-4e8a-b415-dd8376cd83ce_medium.jpg" alt="Login Background" />
            </div>
            <div>
                <form onSubmit={(e)=>e.preventDefault()} className="w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0 opacity-85 text-white rounded-lg">
                    <h1 className="text-2xl font-bold">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                    {!isSignInForm && <input ref={name} type="text" placeholder="Enter Name" className="p-2 my-4 w-full bg-gray-700"/>}
                    <input ref={Email} type="text" placeholder="Email Address" className="p-2 my-4 w-full bg-gray-700"/>
                    <input ref={Password} type="Password" placeholder="Password" className="p-2 my-4 w-full bg-gray-700"/>
                    <p2 className="p-2 text-md text-red-500 font-bold">{errorMessage}</p2>
                    <button className="p-2 my-4 bg-red-600 w-full rounded-sm" onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                    
                    <p onClick={handleClick} className="cursor-pointer hover:text-neutral-500">{isSignInForm?" New to Netflix?Sign Up Now" : "Already Registered?Sign In Now"}</p>
                </form>
                
            </div>
            
        </div>
    )
}
export default Login;