import { useContext } from 'react'

import { MoviesContext } from 'components/Flixify'
import SectionTitle from 'components/SectionTitle'

import MovieList from '../MovieList'

const LatestReleases = () => {
  const { latestReleases } = useContext(MoviesContext)
  return (
    <div className="w-full">
      <SectionTitle title="Latest Releases" size="medium" />
      <MovieList movies={latestReleases} />
    </div>
  )
}

export default LatestReleases
