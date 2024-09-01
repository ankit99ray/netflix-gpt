import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { NETFLIX_LOGO, USER_ICON } from '../utils/constants';


const Header = () => {

  const navigate = useNavigate();
  const user = useSelector(store => store.user)

  const handleSignOut = () => {

    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
        navigate("/error");
      });
  }

  return (
    <div className={user ? "w-screen flex justify-between absolute px-9 py-3 bg-gradient-to-b from-black z-10":'absolute px-9 py-3 bg-gradient-to-b from-black z-10'}>
        <img
            className='w-44'
            src={NETFLIX_LOGO}
            alt='netflix-logo'
        />
        {user && <div className='flex p-2'>
          <img
          className='w-12 h-12 mx-2'
            alt='user-icon'
            src={USER_ICON}
          />
          <button 
              onClick={handleSignOut}
              className='text-black font-bold border border-black bg-white px-1 rounded-lg h-12'
            >
              Sign out
          </button>
        </div>}
    </div>
  )
}

export default Header