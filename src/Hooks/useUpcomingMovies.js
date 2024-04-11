import  { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import {  addUpcomingMovies } from '../utils/movieSlice';
import { useSelector } from "react-redux";
const useUpcomingMovies = async () => {
    const dispatch = useDispatch();
    const UpcomingMovies = useSelector((store) => store.movies.UpcomingMovies); 
    const getUpcomingMovies = useCallback(async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS);
      const json = await data.json();
      dispatch(addUpcomingMovies(json.results));  
    },[dispatch]);
  
    useEffect( () => {
      !UpcomingMovies &&  getUpcomingMovies();
    }
    ,[dispatch,getUpcomingMovies]);
}

export default useUpcomingMovies;