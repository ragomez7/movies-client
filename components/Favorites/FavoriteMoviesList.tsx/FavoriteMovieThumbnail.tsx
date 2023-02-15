import React, { FC, useContext, useState } from 'react'
import SvgIcon from '@mui/material/SvgIcon'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'
import Tooltip from '@mui/material/Tooltip'
import { MoviesContext } from 'components/Flixify'

interface FavoriteMovieThumbnailProps {
  posterPath: string
  movieId: number
}
const FavoriteMovieThumbnail: FC<FavoriteMovieThumbnailProps> = ({
  posterPath,
  movieId,
}) => {
  const { setActiveMovie, imagePath, favoriteMovies, setFavoriteMovies } =
    useContext(MoviesContext)
  const [hover, setHover] = useState<boolean>(false)
  const handleMouseEnter = () => {
    setHover(true)
  }

  const handleMouseLeave = () => {
    setHover(false)
  }
  const handleRemoveFromFavoritesOnClick = (e: React.SyntheticEvent) => {
    const filteredFavoriteMovies = favoriteMovies.filter(
      (movie) => movie.id !== movieId,
    )
    setFavoriteMovies(filteredFavoriteMovies)
    setActiveMovie(0)
    e.stopPropagation()
  }
  return (
    <button
      className="mr-4 relative"
      onClick={() => setActiveMovie(movieId)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        className={`w-[134px] h-[200px] ${hover ? 'opacity-20' : undefined}`}
        src={`${imagePath}${posterPath}`}
        alt="Movie thumbnail"
      />
      {hover ? (
        <Tooltip title="Remove from Favorites">
          <SvgIcon
            className="text-[#ff2828] absolute left-[55px] top-[140px]"
            onClick={handleRemoveFromFavoritesOnClick}
          >
            <RemoveCircleOutlineIcon />
          </SvgIcon>
        </Tooltip>
      ) : undefined}
    </button>
  )
}

export default FavoriteMovieThumbnail
