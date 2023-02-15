import React, { FC, useContext } from 'react'

import Image from 'next/image'

import { MoviesContext } from 'components/Flixify'

import { MovieDetailsContext } from '..'

const MovieThumbnail: FC = () => {
  const { posterPath } = useContext(MovieDetailsContext)
  const { imagePath } = useContext(MoviesContext)
  return (
    <img
      className="w-[231px] h-[347px]"
      alt="Big Movie Poster"
      src={`${imagePath}${posterPath}`}
    />
  )
}

export default MovieThumbnail
