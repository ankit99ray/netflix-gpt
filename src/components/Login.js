import React, { useRef, useState } from 'react'
import {checkPasswordMatch, checkValidData} from "../utils/validate"
import { auth } from '../utils/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'
import { NETFLIX_BACKGROUND_IMAGE } from '../utils/constants'

const Login = () => {
    
    const [isSignIn, setIsSignIn] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const dispath = useDispatch();

    const toggleSignInForm =() => {
        setIsSignIn(!isSignIn);
        setErrorMessage(null);
    }

    const fullName = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const rePassword = useRef(null);


    const handleButtonClick = () => {
        // console.log(email.current.value);
        // console.log(password.current.value);

        let message = checkValidData(email.current.value, password.current.value);
        // console.log(errorMessage);
        if(message === null && (!isSignIn)){
            message = checkPasswordMatch(password.current.value, rePassword.current.value);
        }
        setErrorMessage(message);
        //check if there is an error
        if(message)return; //means that message is not null, so it contains some error
        //Sign in /Sign up logic
        if(!isSignIn){
            //Sign Up Logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: fullName.current.value
                      }).then(() => {
                        // Profile updated!
                        const {uid, displayName, email} = auth.currentUser;
                            dispath(addUser({
                                uid: uid, 
                                email: email, 
                                displayName: displayName
                            }));
                      }).catch((error) => {
                            setErrorMessage(error.message);
                      });
                    // console.log(user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                });
        }
        else{
            //Sign In Logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode +"-"+ errorMessage);
                });
        }

    }

  return (
    <div>
        <div className='absolute'>
            <img 
                src={NETFLIX_BACKGROUND_IMAGE}
                alt='nteflix-background'
            />
        </div>
        <form className='absolute w-3/12 p-12 mx-auto left-0 right-0 my-36 text-white bg-black rounded-lg bg-opacity-80' onSubmit={(e) => e.preventDefault()}>
            <h1 
                className='font-bold text-3xl py-4'
            >
                {isSignIn ? "Sign In": "Sign Up"}
            </h1>
            {
                (!isSignIn) && 
                    <input 
                    ref={fullName}
                        type='text' 
                        placeholder='Full Name' 
                        className='p-4 my-4 w-full bg-gray-900'
                    />
            }
            <input 
                ref={email}
                type='text' 
                placeholder='Email address' 
                className='p-4 my-4 w-full bg-gray-900'
            />
            <input 
                ref={password}
                type='password' 
                placeholder={isSignIn?'Password':'New password'} 
                className='p-4 my-4 w-full bg-gray-900'
            />
            {
                (!isSignIn) && 
                    <input 
                        ref={rePassword}
                        type='password' 
                        placeholder='Re-enter password' 
                        className='p-4 my-3 w-full bg-gray-900'
                    />
            }
            <p className='py-2 px-2 text-red-600 font-bold text-lg'>{errorMessage}</p>
            <button 
                onClick={handleButtonClick}
                className='p-4 my-6 w-full bg-red-600 rounded-lg'
            >
                {isSignIn ? "Sign In": "Sign Up"}
            </button>
            <h4 className='inline-block px-2'>{isSignIn ? "New to Netflix?": "Already an user?"}</h4>
            <button 
                className='font-bold hover:underline' 
                onClick={toggleSignInForm}
            >
                {isSignIn ? "Sign up now": "Sign In"}
            </button>
        </form>
    </div>
  )
}

export default Login