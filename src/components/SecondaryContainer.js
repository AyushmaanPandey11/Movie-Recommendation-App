import React from 'react'
import VideoList from './VideoList';
import {useSelector} from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);
  return (
    <div className='bg-black w-screen'>
      <div className='-mt-80 relative z-20 pl-12' >
        <VideoList title={"Now Playing Movies"} movies={movies.nowPlayingMovies} />
        <VideoList title={"Popular Movies"} movies={movies.PopularMovies} />
        <VideoList title={"Top Rated Playing Movies"} movies={movies.TopRatedMovies} />
        <VideoList title={"Upcoming Movies"} movies={movies.UpcomingMovies} />
      </div>
    </div>
  )
}

export default SecondaryContainer;