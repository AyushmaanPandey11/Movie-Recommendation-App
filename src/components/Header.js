import React, { useEffect } from 'react'
import { LOGO_URL } from '../utils/constants'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector( store => store.user );

  const handleSignout = () => {
    signOut(auth)
    .then(() => {
    })
    .catch((error) => {
      navigate("/error");
    });
  };

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
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
        navigate("/browse");
      } else {
        // Sign out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // Unsubscribe when component unmounts
    return () => unsubscribe();
  }, [navigate,dispatch]);

  return (
    <div className='absolute w-screen px-8 py-2  bg-gradient-to-b from-black  z-10 flex justify-between '>
      <img className='w-44' 
      src={LOGO_URL} alt='LOGO_IMG' />
      { user && <div className='flex p-2 ' > 
        <img alt='userIcon' src = {user?.photoURL} className='w-12 h-12' />
        <button  onClick={handleSignout} className='ml-2 font-bold text-white' >Sign Out</button>
      </div>}
    </div>
  )
}

export default Header;