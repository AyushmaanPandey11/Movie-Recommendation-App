import React from 'react'
import {useSelector} from "react-redux";
import VideoList from './VideoList';
const GptContent = () => {
  const { movieNames, movieResults } = useSelector( (store) => store.gpt );
  if(!movieNames) return null;
  return (
    <div className='m-2 p-4 bg-black text-white bg-opacity-90' >
      <div> 
        { 
          movieNames.map( ( movieName, index ) =>
            <VideoList  key={movieName}  title={movieName} movies={movieResults[index]} />
           )
        }
      </div>
    </div>
  )
}

export default GptContent;