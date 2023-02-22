import React, { useContext } from 'react'

import { joinActorNames } from 'utils'

import { MovieDetailsContext } from '..'

const MovieCast = () => {
  const { cast } = useContext(MovieDetailsContext)
  return (
    <p className="text-gray-300 text-shadow-normal xs:mt-2 sm:mt-0 sm:text-sm md:text-xs m2:text-sm sm:truncate col-start-1 col-span-5">
      {joinActorNames(cast)}
    </p>
  )
}

export default MovieCast
