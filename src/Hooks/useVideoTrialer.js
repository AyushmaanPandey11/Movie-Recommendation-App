import { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addVideoTrialer } from '../utils/movieSlice';
import { API_OPTIONS } from '../utils/constants';
import { useSelector } from "react-redux";
const useVideoTrialer = ( movie_id ) => {
    const dispatch = useDispatch();
    const videoTrialer = useSelector((store) => store.movies.videoTrialer); 
    const getMovieVideo = useCallback(async () => {
        try {
            const data = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`, API_OPTIONS);
            const json = await data.json();
            const filterData = json.results.filter((video) => video.type === "Trailer");
            const trialer = filterData.length ? filterData[1] : json.results[0];
            dispatch(addVideoTrialer(trialer));
        } catch (error) {
            console.error("Error fetching movie video:", error);
        }
    }, [dispatch, movie_id]);

    useEffect(() => {
        videoTrialer && getMovieVideo();
    }, [getMovieVideo, dispatch]);
};

export default useVideoTrialer;
