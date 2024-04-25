import { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { useSelector } from "react-redux";
import { addMovieTrialer } from '../utils/SearchMovieSlice';

const useSearchMovieTrialer = ( movieId ) => {
    const dispatch = useDispatch();
    const videoTrialer = useSelector( (store)=>store.SearchMovie.movieTrailer ); 
    const getMovieVideo = useCallback(async () => {
        try {
            const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
            const json = await data.json();
            const filterData = json.results.filter((video) => video.type === "Trailer");
            const trialer = filterData.length ? filterData[1] : json.results[0];
            dispatch(addMovieTrialer(trialer));
        } catch (error) {
            console.error("Error fetching movie video:", error);
        }
    }, [dispatch, movieId]);

    useEffect(() => {
        !videoTrialer && getMovieVideo();
    }, [getMovieVideo, dispatch,videoTrialer]);
};

export default useSearchMovieTrialer;
