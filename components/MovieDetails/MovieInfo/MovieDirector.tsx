import React, { useContext } from 'react'

import { MovieDetailsContext } from '..'

const MovieDirector = () => {
  const { directorName } = useContext(MovieDetailsContext)
  return <p className="text-gray-300 ml-3 sm:text-sm md:text-xs col-start-6 col-span-3 truncate">Director: {directorName}</p>
}

export default MovieDirector
