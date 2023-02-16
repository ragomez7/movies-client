import React from 'react'

import LatestReleases from './LatestReleases'
import SearchableList from './Searchable'

const MovieLists = () => {
  return (
    <section className="pt-20 px-4 row-span-full">
      <LatestReleases />
      <SearchableList />
    </section>
  )
}

export default MovieLists
