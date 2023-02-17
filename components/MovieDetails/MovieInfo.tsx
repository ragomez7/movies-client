import React, { useContext } from 'react'
import { MovieDetailsContext } from '.'

const MovieInfo = () => {
  const {
    title,
    releaseDate,
    runtime,
  } = useContext(MovieDetailsContext)
  return (
    <div className="mr-auto">
      <p className="text-2xl text-white">{title}</p>
      <div className="flex w-1/2 justify-around text-white">
        <p>{releaseDate}</p>
        <p>{runtime}</p>
      </div>
    </div>
  )
}

export default MovieInfo
