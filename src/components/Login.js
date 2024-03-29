import React, { useState } from 'react';
import Header from './Header';
import {BG_URL} from '../utils/constants';
const Login = () => {
  const [isSignIn,setIsSignIn] = useState(true);
  const ToggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div className='bg-black'>
      <Header />
      <div className='absolute '   >
        <img src={BG_URL} 
            alt="Bg_img" className='max-w-full'/>
      </div>
      <form className='w-3/12 absolute p-12 my-40 text-white bg-black mx-auto left-0 right-0 bg-opacity-75 rounded-md'  >
          <h2 className='font-bold text-3xl py-4'>{isSignIn ? "Sign In" : "Sign Up"}</h2>
          { !isSignIn && <input className='my-6 p-4 w-full bg-gray-600 ' type='text' placeholder='Full Name'></input>}
          <input className='my-4 p-4 w-full bg-gray-600 ' type='text' placeholder='Email Address'></input>
          <input className='my-4 p-4 w-full bg-gray-600 ' type='password' placeholder='Password'></input>
          <button className='my-4 p-4 w-full bg-red-800'>{isSignIn ? "Sign In" : "Sign Up"}</button>
          <p className='my-2 p-2 cursor-pointer' onClick={ToggleSignInForm} >{isSignIn ? "New to Netlfix? Sign Up now!" : "Already a Member? Sign in now"}</p>
        </form>
    </div>
  )
}

export default Login;