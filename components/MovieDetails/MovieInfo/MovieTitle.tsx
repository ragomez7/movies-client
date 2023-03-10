import React, { useContext } from 'react'

import { MovieDetailsContext } from '..'

const MovieTitle = () => {
  const { title } = useContext(MovieDetailsContext)
  return (
    <p className="xs:text-2xl xs:font-bold sm:text-lg lg:text-2xl text-white truncate">
      {title}
    </p>
  )
}

export default MovieTitle
