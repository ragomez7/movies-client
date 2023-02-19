import React, { useContext } from 'react'
import { MovieDetailsContext } from '.'


const MovieOverview = () => {
  // const { overview } = useContext(MovieDetailsContext)
  const overview = `The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.`
  return <p className="xs:text-lg text-sm px-4 text-white pt-3 sm:h-full flex overflow-y-scroll">{overview}</p>
}

export default MovieOverview
