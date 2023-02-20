import React, { useContext } from 'react'

import { MoviesContext } from 'components/Flixify'

import AddToFavoritesButton from '../AddToFavoritesButton'
import MovieInfo from '../MovieInfo'
import MovieMedia from '../MovieMedia'
import MovieOverview from '../MovieOverview'
import MovieRating from '../MovieRating'
import MovieCast from '../MovieInfo/MovieCast'
import MovieDirector from '../MovieInfo/MovieDirector'
import ProductionCompanyName from '../MovieMedia/MovieProductionCompany/ProductionCompanyName'
import ProductionCompanyCountry from '../MovieMedia/MovieProductionCompany/ProductionCompanyCountry'

const MovieDetailsSmAndUp = () => {
  const { activeMovieId } = useContext(MoviesContext)
  return (
    <section className="col-start-2 col-span-1 row-start-1 row-span-1 sm:grid xs:hidden sm:grid-rows-[66px_auto_130px] sm1:grid-rows-[66px_auto_60px] grid-cols-[1fr_1fr]">
      {activeMovieId ? (
        <>
          <div className="col-start-1 col-span-2 row-start-1 row-span-1 flex justify-end pr-8">
            <MovieInfo />
            <MovieRating />
            <AddToFavoritesButton />
          </div>
          <div className="col-start-1 col-span-2 row-start-2 row-span-1 lg:block md2:flex md2:items-center md:block sm2:flex sm2:items-start sm:block">
            <MovieMedia />
            <MovieOverview />
          </div>
          <div className="col-start-1 col-span-2 grid grid-cols-8 grid-rows-2 ">
            <MovieCast />
            <MovieDirector />
            <ProductionCompanyName />
            <ProductionCompanyCountry />
          </div>
        </>
      ) : undefined}
    </section>
  )
}

export default MovieDetailsSmAndUp
