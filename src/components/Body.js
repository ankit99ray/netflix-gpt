import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, Outlet, RouterProvider, useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import {addUser, removeUser} from "../utils/userSlice"
import Header from './Header'

const Body = () => {

    const dispath = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const {uid, displayName, email} = user;
              dispath(addUser({
                uid: uid, 
                email: email, 
                displayName: displayName
              }));
              navigate("/browse");

            } else {
              // User is signed out
              dispath(removeUser());
              navigate("/");
            }
          });

      return () => unsubscribe();

    }, []);

  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default Body