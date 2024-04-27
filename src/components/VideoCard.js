import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const VideoCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className='w-48 pr-3'  >
        <img alt="Movie-Poster" className='rounded-2xl hover:animate-pulse'
            src={IMG_CDN_URL+posterPath}/>
    </div>
  )
}

export default VideoCard;