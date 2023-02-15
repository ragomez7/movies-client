import React, { FC } from 'react';
import MovieYoutubeTrailer from './MovieYoutubeTrailer';
import MovieThumbnail from './MovieThumbnail';


const MovieMedia: FC = () => {
    return (
        <div className="grid grid-cols-[230px_auto]">
            <MovieThumbnail />
            <MovieYoutubeTrailer />
        </div>
    )
}

export default MovieMedia;