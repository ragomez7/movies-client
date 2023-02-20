import React, { useContext } from 'react'

import { MoviesContext } from 'components/Flixify'

import FavoriteMoviesList from './FavoriteMoviesList.tsx'
import SectionTitle from '../SectionTitle'

const Favorites = () => {
  const { activeMovieId, isXs } = useContext(MoviesContext)
  const displayValue = activeMovieId && isXs ? 'hidden' : 'block'
  return (
    <section
      className={`xs:pl-4 xs:${displayValue} sm2:col-start-2 sm2:col-span-1 row-start-2 sm2:row-span-1 sm:col-start-1 sm:col-span-2 xs:col-span-1 sm:row-span-2 h-full max-h-[333px]`}
    >
      <SectionTitle title="Your Favorite Movies" size="large" />
      <FavoriteMoviesList />
    </section>
  )
}

export default Favorites
