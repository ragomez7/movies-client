import React, { useContext } from 'react'

import { v4 as uuid } from 'uuid'

import { MoviesContext } from 'components/Flixify'

import FavoriteMovieThumbnail from './FavoriteMovieThumbnail'

const FavoriteMoviesList = () => {
  const { favoriteMovies } = useContext(MoviesContext)
  return (
    <div className="pl-3 flex flex-wrap overflow-y-scroll w-full max-h-[289px]">
      {favoriteMovies.map((movie) => (
            <FavoriteMovieThumbnail
              key={uuid()}
              posterPath={movie.posterPath}
              movieId={movie.id}
            />
          ))}
    </div>
  )
}

export default FavoriteMoviesList
