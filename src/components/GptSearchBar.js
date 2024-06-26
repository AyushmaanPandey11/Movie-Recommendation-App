import React, { useRef } from 'react'
import {useSelector} from "react-redux";
import lang from '../utils/languageConstants';
import openai from "../utils/openai";
import { API_OPTIONS } from '../utils/constants';
import {useDispatch} from "react-redux";
import { addGptMovieResult } from "../utils/gptSlice";
const GptSearchBar = () => {
    const langKey = useSelector((store)=> store.config.lang);
    const searchText = useRef(null);
    const dispatch = useDispatch();
    const searchMovieTMDB = async (movie) => {
      const data = await fetch(
        "https://api.themoviedb.org/3/search/movie?query=" +
          movie +
          "&include_adult=false&language=en-US&page=1",
        API_OPTIONS
      );
      const json = await data.json();
  
      return json.results;
    };

    const handleGPTSearch = async () => {
      const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query: " 
                          + searchText.current.value +
                          ". Only give 5 movie names, comma separated like the ahead example, example Result: Dhol, Dhamaal, Khatha Metha, Golmaal, all the best";
      const gptResults = await openai.chat.completions.create({
        messages: [{ role: "user", content: gptQuery }],
        model: "gpt-3.5-turbo",
      });
      if(!gptResults){
        // error handling
      }
      const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
      const promiseArray = gptMovies.map( (movie) => searchMovieTMDB(movie) );
      const tmdbResults= await Promise.all(promiseArray);
      dispatch(addGptMovieResult( { movieNames:gptMovies, movieResults:tmdbResults} ));
    }

  return (
    <div className='pt-[10%] flex justify-center flex-col' >
      <form className=' w-1/2 bg-black grid grid-cols-12  ml-[25%]'  onSubmit={(e)=>e.preventDefault()}>
          <input  
            ref={searchText}
            type='text' 
            className='p-4 m-4  col-span-9 '        
            placeholder={lang[langKey].gptSearchPlaceholderValue}       
          />
          <button  className=' col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg' onClick={handleGPTSearch} >
          {lang[langKey].search}
          </button>
      </form>
      <div>
        <p className= 'm-2 p-4 mx-[25%] bg-black text-center text-white font-bold'> NOTE: Add your openai_key from openai platforms, it may not work because of use limit </p>
      </div>
    </div>
  )
}

export default GptSearchBar;
