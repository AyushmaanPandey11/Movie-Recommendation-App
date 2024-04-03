import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addVideoTrialer } from '../utils/movieSlice';
import { API_OPTIONS } from '../utils/constants';

const useVideoTrialer =  ({movie_id}) => {
    const dispatch = useDispatch();
    const getMovieVideo = async () => 
    {
        const data =await fetch("https://api.themoviedb.org/3/movie/"+movie_id+"/videos?language=en-US", API_OPTIONS);
        const json = await data.json();
        const filterData = json.results.filter((video) => video.type === "Trailer" );
        const trialer = filterData.length ? filterData[0] : json.results[0];
        dispatch(addVideoTrialer(trialer));
    };
  useEffect(()=> {
    getMovieVideo();
  },[movie_id, dispatch]);
}

export default useVideoTrialer;