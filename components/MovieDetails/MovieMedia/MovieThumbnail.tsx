import React, { useContext } from 'react'

import { MoviesContext } from 'components/Flixify'

import { MovieDetailsContext } from '..'

const MovieThumbnail = () => {
  const { posterPath } = useContext(MovieDetailsContext)
  const { imagePath } = useContext(MoviesContext)
  return (
    <div className="xs:w-[151px] xs:h-[226px] sm:ml-0 sm:w-[151px] sm:h-[226px] md:w-[177px] md:h-[258px] sm:pt-2 md:pt-0 flex">
      <img
        className="max-w-[100%] max-h-[100%]"
        alt="Big Movie Poster"
        src={`${imagePath}${posterPath}`}
      />
    </div>
  )
}

export default MovieThumbnail
