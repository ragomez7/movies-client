import React, { useContext } from 'react'

import StarIcon from '@mui/icons-material/Star'
import { SvgIcon } from '@mui/material'

import { Movie, MoviesContext } from 'components/Flixify'

import { MovieDetailsContext } from '.'

const AddToFavoritesButton = () => {
  const { favoriteMovies, setFavoriteMovies, scrollToFavorites } =
    useContext(MoviesContext)
  const { movieId, posterPath } = useContext(MovieDetailsContext)
  const handleButtonOnClick = () => {
    const thisMovie: Movie = {
      id: movieId,
      posterPath,
    }
    const isMovieAlreadyInFavorites = favoriteMovies.find(
      (movie) => movie.id === movieId,
    )
    if (!isMovieAlreadyInFavorites) {
      setFavoriteMovies([...favoriteMovies, thisMovie])
      if (scrollToFavorites) {
        scrollToFavorites()
      }
    }
  }
  return (
    <button
      className="sm:h-full sm:flex sm:flex-col sm:items-center sm:justify-center xs:inline-block xs:h-24 xs:w-24 xs:ml-4"
      onClick={handleButtonOnClick}
    >
      <p className="xs:text-sm sm:text-xs lg:text-sm font-semibold text-white text-shadow-normal">
        Add To Favorites
      </p>
      <SvgIcon className="text-[#f5cc29] w-[28px] h-[28px] ">
        <StarIcon />
      </SvgIcon>
    </button>
  )
}

export default AddToFavoritesButton
