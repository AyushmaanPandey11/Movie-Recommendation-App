import  { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import {  addPopularMovies } from '../utils/movieSlice';

const usePopularMovies = async () => {
    const dispatch = useDispatch();

    const getPopularMovies = useCallback(async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
      const json = await data.json();
      dispatch(addPopularMovies(json.results));  
    },[dispatch]);
  
    useEffect( () => {
        getPopularMovies();
    }
    ,[dispatch,getPopularMovies]);
}

export default usePopularMovies;