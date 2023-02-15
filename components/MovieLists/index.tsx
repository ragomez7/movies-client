import { FC } from 'react'

import LatestReleases from './LatestReleases'
import SearchableList from './Searchable'

const MovieLists: FC = () => {
  return (
    <div className="pt-20 px-4 row-span-full">
      <LatestReleases />
      <SearchableList />
    </div>
  )
}

export default MovieLists
