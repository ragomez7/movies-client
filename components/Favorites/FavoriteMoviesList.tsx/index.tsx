import React, { useContext } from 'react'

import { v4 as uuid } from 'uuid'

import { MoviesContext } from 'components/Flixify'

import FavoriteMovieThumbnail from './FavoriteMovieThumbnail'

const FavoriteMoviesList = () => {
  const { favoriteMovies } = useContext(MoviesContext)
  return (
    <div className="flex flex-wrap overflow-y-scroll w-full xs:max-h-[425px] sm:max-h-[289px] xs:justify-evenly xs:mt-2 sm:mt-0">
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
