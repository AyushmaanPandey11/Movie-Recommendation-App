import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useSearchMovie from '../Hooks/useSearchMovie';
import { BG_URL } from '../utils/constants';
import useSearchMovieTrialer from "../Hooks/useSearchMovieTrialer";
import { useSelector } from 'react-redux';
import Error from "./Error";
const MovieDetails = () => {
  const { movieId } = useParams(); 
  useSearchMovie(movieId);
  useSearchMovieTrialer(movieId);
  const trialerVideo = useSelector( (store)=>store.SearchMovie?.movieTrailer );
  const SearchMovieDetails= useSelector((store)=>store.SearchMovie?.SearchMovieDetails);
  const navigate = useNavigate();
  const HandleHomeButton = () => {
    navigate("/browse");
  };
  return ( !trialerVideo && !SearchMovieDetails ) ? <Error /> : (
    <div>
      <div className='fixed -z-10 '>
        <img className='h-screen w-screen object-cover' src={BG_URL} alt='logo' />
      </div>
      { trialerVideo && <div className='absolute bg-black bg-opacity-70 h-screen w-screen ' >
        <div >
            <iframe 
                className="my-20 mx-[12%] w-9/12 h-1/6 aspect-video rounded-lg  "
                title="Trailer Video" 
                src={"https://www.youtube.com/embed/"+trialerVideo?.key+"?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1"}
            >
            </iframe>
        </div>
        <div className='-my-[93.1px]  p-6 text-white font-bold absolute bg-black bg-opacity-70 h-screen w-screen'>
          <h1 className=' mx-20 text-4xl'>{SearchMovieDetails?.title}({SearchMovieDetails?.original_title}) - {SearchMovieDetails?.tagline}</h1>
          <p className='mx-20 mt-10 text-2xl flex-wrap w-3/4' >Overview - {SearchMovieDetails?.overview} </p>
          <p className='mx-20 my-5 text-2xl' >ScreenTime - {SearchMovieDetails?.runtime} Minutes</p>
          <p className='mx-20 my-5 text-2xl' > ⭐ {SearchMovieDetails?.vote_average} Rating</p>       
          <p className='mx-20 my-5 text-2xl flex' >Genre: {SearchMovieDetails?.genres?.map((genre, index) => <h3 className='mx-2' key={genre.id}>{genre.name},</h3>)}</p>
          <button className='py-2 ml-[45%] my-[100px] bg-purple-500 text-white rounded-lg w-28 relative z-20  ' onClick={HandleHomeButton}>HomePage</button>
        </div>
      </div>}
      
      
    </div>
  );
};

export default MovieDetails;
