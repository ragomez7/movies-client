import React from 'react'

import MovieReleaseDate from './MovieReleaseDate'
import MovieRuntime from './MovieRuntime'
import MovieTitle from './MovieTitle'
import MovieRating from '../MovieRating'

const MovieInfo = () => {
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
