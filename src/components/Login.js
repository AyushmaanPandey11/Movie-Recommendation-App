import React from 'react';
import Header from './Header';
import {BG_URL} from '../utils/constants';
const Login = () => {
  return (
    <div className='bg-black'>
      <Header />
      <div className='absolute '   >
        <img src={BG_URL} 
            alt="Bg_img" className='max-w-full'/>
      </div>
      <form className='w-3/12 absolute p-12 my-40 text-white bg-black mx-auto left-0 right-0 bg-opacity-75 rounded-md'  >
          <h2 className='font-bold text-3xl py-4'>Sign in</h2>
          <input className='my-6 p-4 w-full bg-gray-600 ' type='text' placeholder='Email Address'></input>
          <input className='my-6 p-4 w-full bg-gray-600 ' type='password' placeholder='Password'></input>
          <button className='my-6 p-4 w-full bg-red-800'>Sign in</button>
          <p className='my-2 p-2'  >New to Netlfix? Sign Up now!</p>
        </form>
    </div>
  )
}

export default Login;