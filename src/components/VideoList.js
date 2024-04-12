import React from 'react';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoList = ({ title, movies }) => {
  return (
    <div className='p-6 bg-gradient-to-b from-transparent overflow-x-scroll'>
      <div className=''>
        <h1 className='text-bold text-white text-3xl py-4'>{title}</h1>
        <div className='flex flex-nowrap space-x-4 '>
          {movies?.map((movie) => (
            <Link key={movie?.id} to={"/movie/"+movie?.id }><VideoCard posterPath={movie?.poster_path} /></Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoList;
