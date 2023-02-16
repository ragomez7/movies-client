import React from 'react'

import MovieThumbnail from './MovieThumbnail'
import MovieYoutubeTrailer from './MovieYoutubeTrailer'

const MovieMedia = () => {
  return (
    <div className="grid grid-cols-[230px_auto]">
      <MovieThumbnail />
      <MovieYoutubeTrailer />
    </div>
  )
}

export default MovieMedia
