import React from 'react'

import MovieThumbnail from './MovieThumbnail'
import MovieYoutubeTrailer from './MovieYoutubeTrailer'

const MovieMedia = () => {
  return (
    <div className="row-start-1 row-span-1 grid grid-cols-[2fr_5fr] items-center">
      <MovieThumbnail />
      <MovieYoutubeTrailer />
      {/* <div className="text-white bg-red-600 h-full">
        s
      </div> */}
    </div>
  )
}

export default MovieMedia
