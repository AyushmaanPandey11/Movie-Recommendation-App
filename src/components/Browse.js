import React  from 'react'
import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useUpcomingMovies from "../Hooks/useUpcomingMovies";
import useTopRatedMovies from "../Hooks/useTopRatedMovies";
import usePopularMovies from "../Hooks/usePopularMovies";
import {useSelector} from "react-redux";
import GptMoviesSuggestion from './GptMoviesSuggestion';
const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  // Customized Hook
  useNowPlayingMovies();
  useUpcomingMovies();
  usePopularMovies();
  useTopRatedMovies();
  return (
    <div>
      <Header />
      {
        (showGptSearch === true) ? 
        (<GptMoviesSuggestion /> 
        ): ( 
          <>
            <MainContainer />
            <SecondaryContainer />  
          </>
        )
      }  
    </div>
  )
}

export default Browse;