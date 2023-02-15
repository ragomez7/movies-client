import React, { FC, useContext } from 'react';
import Youtube, { YouTubeProps } from 'react-youtube'
import { MovieDetailsContext } from '..';


const MovieYoutubeTrailer: FC = () => {
    const videoOpts = {
        height: "347px",
        width: "100%",
        playerVars: {
            origin: `http://localhost:3000/`
        }
    }
    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        event.target.pauseVideo();
    }
    const { videoId } = useContext(MovieDetailsContext); 
    return <Youtube videoId={videoId} opts={videoOpts} onReady={onPlayerReady} />
}

export default MovieYoutubeTrailer;