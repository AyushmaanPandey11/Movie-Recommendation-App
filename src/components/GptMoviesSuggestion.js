import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptContent from './GptContent';
import { BG_URL } from '../utils/constants';

const GptMoviesSuggestion = () => {
  return (
    <>
      
      <div className='fixed -z-10' > 
        <img className='h-screen w-screen object-cover' src= { BG_URL } alt='logo'  />
      </div>
      <div className=''>
          <GptSearchBar />
          <GptContent />
      </div>
      
    </>
  );
};

export default GptMoviesSuggestion;