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
        <div className="w-screen ">
            <iframe 
                className="w-screen aspect-video "
                title="Trailer Video" 
                src={"https://www.youtube.com/embed/"+trialerVideo?.key+"?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1" }
                
            >
            </iframe>
        </div>
    );
}
export default VideoBackground;
