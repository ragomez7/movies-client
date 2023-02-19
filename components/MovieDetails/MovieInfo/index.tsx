import React, { useContext } from 'react'
import { MovieDetailsContext } from '..'
import MovieRating from '../MovieRating'
import MovieTitle from './MovieTitle'
import MovieReleaseDate from './MovieReleaseDate'
import MovieRuntime from './MovieRuntime'

const MovieInfo = () => {
  const title = 'Inglorious Bastards'
  return (
    <div className="mr-auto flex flex-col w-5/6">
      <MovieTitle />
      <div className="flex justify-between text-white">
        <div className="flex">
          <MovieReleaseDate />
          <MovieRuntime />
        </div>
        <MovieRating renderInInfo />
      </div>
    </div>
  )
}

export default MovieInfo
