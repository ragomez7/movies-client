import { IMovie } from '@/pages'
import React, { FC } from 'react'
import { v4 as uuid } from 'uuid'
import InListMovieThumbnail from 'components/MovieLists/InListMovieThumbnail'

interface MovieListProps {
  movieArray: Array<IMovie>
}

const MovieList: FC<MovieListProps> = ({ movieArray }) => {
  return (
    <div className="flex overflow-x-scroll w-full">
      {movieArray.length
        ? movieArray.map((movie) => (
            <InListMovieThumbnail
              key={uuid()}
              movieId={movie.id}
              posterPath={movie.posterPath}
            />
          ))
        : undefined}
    </div>
  )
}

export default MovieList
