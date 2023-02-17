import React, { useContext } from 'react'

import { MoviesContext } from 'components/Flixify'

import { MovieDetailsContext } from '..'

const MovieThumbnail = () => {
  const { posterPath } = useContext(MovieDetailsContext)
  const { imagePath } = useContext(MoviesContext)
  return (
    <div className="w-[197px] h-[295px] flex">
      <img
        className="max-w-[100%] max-h-[100%]"
        alt="Big Movie Poster"
        src={`${imagePath}${posterPath}`}
      />
    </div>
  )
}

export default MovieThumbnail
