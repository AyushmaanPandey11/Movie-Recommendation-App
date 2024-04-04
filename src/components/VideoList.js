import React from 'react';
import VideoCard from './VideoCard';

const VideoList = ({ title, movies }) => {
  return (
    <div className='p-6 bg-gradient-to-b from-transparent '>
      <div className=''>
        <h1 className='text-bold text-white text-3xl py-4'>{title}</h1>
        <div className='flex   overflow-x-hidden  '>
          <div className='flex space-x-4'>
            {movies?.map((movie) => (
              <VideoCard key={movie.id} posterPath={movie?.poster_path} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoList;
