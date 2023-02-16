import React, { useContext } from 'react'

import { v4 as uuid } from 'uuid'

import { MoviesContext } from 'components/Flixify'

import FavoriteMovieThumbnail from './FavoriteMovieThumbnail'

const FavoriteMoviesList = () => {
  const { favoriteMovies } = useContext(MoviesContext)
  return (
    <div className="pl-3 flex flex-wrap overflow-y-scroll h-[300px] w-full">
      {favoriteMovies.length
        ? favoriteMovies.map((movie) => (
            <FavoriteMovieThumbnail
              key={uuid()}
              posterPath={movie.posterPath}
              movieId={movie.id}
            />
          ))
        : undefined}
    </div>
  )
}

export default FavoriteMoviesList
