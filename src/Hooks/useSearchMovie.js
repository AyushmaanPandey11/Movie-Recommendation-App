import  { useCallback, useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addSearchMovieDetails } from '../utils/SearchMovieSlice';

const useSearchMovie = async (movieId) => {
    const dispatch = useDispatch();
    const SearchMovie = useSelector((store)=> store.movies.addSearchMovieDetails);
    const getSearchMovie = useCallback(async () => {
        try
        {
            const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, API_OPTIONS);
            const json = await data.json();
            dispatch(addSearchMovieDetails(json));
        }
        catch(error)
        {
            console.error( " Error in fetching data : ",error );
        }
    }, [dispatch,movieId] );

    useEffect( ()=> {
        !SearchMovie && getSearchMovie();
    },[getSearchMovie,SearchMovie]);
};
export default useSearchMovie;
