import React from "react";
import { useSelector } from 'react-redux';
import useVideoTrialer from '../Hooks/useVideoTrialer';

const VideoBackground = ({movie_id}) => {
    const trialerVideo = useSelector((store) => store.movies?.videoTrialer); 
    useVideoTrialer(movie_id);
    if (!trialerVideo) {
      return <div>Loading...</div>;
    }
    return (
        <div>
            <iframe 
                title="Trailer Video"
                width="560" 
                height="315" 
                src={"https://www.youtube.com/embed/"+trialerVideo?.key }
            >
            </iframe>
        </div>
    );
}

export default VideoBackground;
