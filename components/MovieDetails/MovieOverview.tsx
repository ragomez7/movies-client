import React, { useContext } from 'react'
import { MovieDetailsContext } from '.'


const MovieOverview = () => {
  const { overview } = useContext(MovieDetailsContext)
  return <p className="text-xs px-4 text-white row-start-2 row-span-1">{overview}</p>
}

export default MovieOverview
