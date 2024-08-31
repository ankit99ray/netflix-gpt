import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    
    const [isSignIn, setIsSignIn] = useState(true);

    const toggleSignInForm =() => {
        setIsSignIn(!isSignIn);
    }

  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img 
                src='https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/6d1fb8a4-5844-42a4-9b01-1c6c128acf19/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_large.jpg'
                alt='nteflix-background'
            />
        </div>
        <form className='absolute w-3/12 p-12 mx-auto left-0 right-0 my-36 text-white bg-black rounded-lg bg-opacity-80' onSubmit={(e) => e.preventDefault()}>
        <h1 className='font-bold text-3xl py-4'>{isSignIn ? "Sign In": "Sign Up"}</h1>
            {(!isSignIn) && <input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-900'/>}
            <input type='text' placeholder='Email address' className='p-4 my-4 w-full bg-gray-900'/>
            <input type='password' placeholder={isSignIn?'Password':'New password'} className='p-4 my-4 w-full bg-gray-900'/>
            {(!isSignIn) && <input type='password' placeholder='Re-enter password' className='p-4 my-4 w-full bg-gray-900'/>}
            <button className='p-4 my-6 w-full bg-red-600 rounded-lg'>{isSignIn ? "Sign In": "Sign Up"}</button>
            <h4 className='inline-block px-2'>{isSignIn ? "New to Netflix?": "Already an user?"}</h4>
            <button className='font-bold hover:underline' onClick={toggleSignInForm}>{isSignIn ? "Sign up now": "Sign In"}</button>
        </form>
    </div>
  )
}

export default Login