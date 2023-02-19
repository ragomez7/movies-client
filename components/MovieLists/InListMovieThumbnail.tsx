import React, { useContext, useState } from 'react'

import { MoviesContext } from 'components/Flixify'

interface InListMovieThumbnailProps {
  movieId?: number
  posterPath: string
}
const InListMovieThumbnail = ({
  movieId,
  posterPath,
}: InListMovieThumbnailProps) => {
  const { imagePath, setActiveMovieId } = useContext(MoviesContext)
  const [hover, setHover] = useState(false)
  const handleMouseEnter = () => {
    setHover(true)
  }

  const handleMouseLeave = () => {
    setHover(false)
  }
  return (
    <div className="sm:w-[154px] xs:w-[120px] flex-shrink-0 bg-black p-2">
      <button
        onClick={() => setActiveMovieId(movieId || 0)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          className={`${hover ? 'opacity-80' : undefined}`}
          alt="Movie Poster"
          src={`${imagePath}${posterPath}`}
          width={154}
          height={231}
        />
      </button>
    </div>
  )
}

export default InListMovieThumbnail
