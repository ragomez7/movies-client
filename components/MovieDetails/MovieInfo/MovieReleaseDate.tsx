import React, { useContext } from 'react'

import { MovieDetailsContext } from '..'

const MovieReleaseDate = () => {
  const { releaseDate } = useContext(MovieDetailsContext)
  return (
    <p className="text-white sm:ml-2 xs:inline-block sm:block">{releaseDate}</p>
  )
}

export default MovieReleaseDate
