import React from 'react'

import MovieThumbnail from './MovieThumbnail'
import MovieYoutubeTrailer from './MovieYoutubeTrailer'

const MovieMedia = () => {
  return (
    <div className="lg:grid lg:grid-cols-[2fr_6fr] sm:flex sm:justify-center sm:items-center">
      <MovieThumbnail />
      <MovieYoutubeTrailer />
    </div>
  )
}

export default MovieMedia
