import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video text-white bg-gradient-to-br from-transparent pt-[20%] px-24 absolute' >
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className=' my-6 text-lg w-1/4 font-bold' >{overview}</p>
      <div >
        <button className='font-bold text-black bg-white text-lg w-28 rounded-md p-3 hover:bg-opacity-40' >Play</button>
        <button className=' mx-2 font-bold text-white bg-gray-700 text-lg w-28 rounded-md p-3 hover:bg-opacity-40'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle