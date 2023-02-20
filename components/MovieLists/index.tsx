import React, { useContext } from 'react'

import { MoviesContext } from 'components/Flixify'

import LatestReleases from './LatestReleases'
import SearchableList from './Searchable'

const MovieLists = () => {
  const { activeMovieId, isXs } = useContext(MoviesContext)
  const displayValue = activeMovieId && isXs ? 'hidden' : 'block'
  return (
    <section
      className={`xs:px-4 col-start-1 col-span-1 row-start-1 sm2:row-span-2 sm:row-span-1 xs:row-start-1 xs:row-span-1 xs:${displayValue} sm:block`}
    >
      <LatestReleases />
      <SearchableList />
    </section>
  )
}

export default MovieLists
