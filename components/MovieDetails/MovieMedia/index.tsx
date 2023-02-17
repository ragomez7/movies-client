import React from 'react'

import MovieThumbnail from './MovieThumbnail'
import MovieYoutubeTrailer from './MovieYoutubeTrailer'

const MovieMedia = () => {
  return (
    <div className="grid grid-cols-[2fr_6fr] items-center">
      <MovieThumbnail />
      <MovieYoutubeTrailer />
      {/* <div className="text-white bg-red-600 h-full">
        s
      </div> */}
    </div>
  )
}

export default MovieMedia
