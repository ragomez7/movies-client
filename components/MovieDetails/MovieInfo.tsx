import React, { useContext } from 'react'
import { MovieDetailsContext } from '.'
import MovieRating from './MovieRating'

const MovieInfo = () => {
  const {
    // title,
    releaseDate,
    runtime,
  } = useContext(MovieDetailsContext)
  const title = 'Inglorious Bastards'
  return (
    <div className="mr-auto flex flex-col w-5/6">
      <p className="md:text-lg lg:text-2xl text-white truncate">{title}</p>
      <div className="flex justify-between text-white">
        <div className="flex">
        <p>{releaseDate}</p>
        <p className="ml-3">{runtime}</p>
        </div>
        <MovieRating renderInInfo />

      </div>
      
    </div>
  )
}

export default MovieInfo
