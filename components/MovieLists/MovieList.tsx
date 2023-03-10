import React from 'react'

import { v4 as uuid } from 'uuid'

import { Movie } from 'components/Flixify'
import InListMovieThumbnail from 'components/MovieLists/InListMovieThumbnail'

interface MovieListProps {
  movies: Array<Movie>
}

const MovieList = ({ movies }: MovieListProps) => {
  return (
    <div className="flex overflow-x-scroll w-full">
      {movies.map((movie) => (
        <InListMovieThumbnail
          key={uuid()}
          movieId={movie.id}
          posterPath={movie.posterPath}
        />
      ))}
    </div>
  )
}

export default MovieList
