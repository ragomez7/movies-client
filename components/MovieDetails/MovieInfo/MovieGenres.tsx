import React, { useContext } from 'react'

import { v4 as uuid } from 'uuid'

import { MovieDetailsContext } from '..'

export interface Genre {
  name: string
}
const MovieGenres = () => {
  const { genres } = useContext(MovieDetailsContext)
  const typedGenres = genres as Genre[]
  return (
    <div className="text-gray-400 text-shadow-normal flex items-end">
      {typedGenres?.map((genre) => (
        <p
          key={uuid()}
          className="text-[10px] ml-1 uppercase tracking-tighter font-bold"
        >
          {genre.name}
        </p>
      ))}
    </div>
  )
}

export default MovieGenres
