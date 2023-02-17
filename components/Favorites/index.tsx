
import React, { FC } from 'react'

import FavoriteMoviesList from './FavoriteMoviesList.tsx'
import SectionTitle from '../SectionTitle'

const Favorites: FC = () => {
  return (
    <section className="col-start-2 col-span-1 row-start-2 row-span-1 h-full max-h-[333px]">
      <SectionTitle title="Your Favorite Movies" size="large" />
      <FavoriteMoviesList />
    </section>
  )
}

export default Favorites
