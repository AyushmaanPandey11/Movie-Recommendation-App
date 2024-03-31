import React, { useEffect } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Login';
import Browse from './Browse';
import { onAuthStateChanged } from "firebase/auth";
import auth from "../utils/firebase";
import { useDispatch } from 'react-redux';
import {addUser, removeUser} from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path:"/browse",
      element:<Browse />
    }
  ]);

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const {uid, displayName, email, photoURL} = user;
        dispatch(addUser(
          {
            uid:uid,
            displayName: displayName,
            email:email,
            photoURL: photoURL,
          }));
      } else {
        // Sign out
        dispatch(removeUser());
      }
    });
  });

  return (
    <div>
      <RouterProvider router={appRouter}>

      </RouterProvider>
    </div>
  )
}

export default Body;