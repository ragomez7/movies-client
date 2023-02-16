import React from 'react'

import LatestReleases from './LatestReleases'
import SearchableList from './Searchable'

const MovieLists = () => {
  return (
    <section className="px-4 col-start-1 col-span-1 row-start-1 row-span-2">
      <LatestReleases />
      <SearchableList />
    </section>
  )
}

export default MovieLists
