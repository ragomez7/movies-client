import React, { useContext } from 'react'

import { MoviesContext } from 'components/Flixify'

import { MovieDetailsContext } from '../..'
import ProductionCompanyLogo from './ProductionCompanyLogo'
import ProductionCompanyName from './ProductionCompanyName'
import ProductionCompanyCountry from './ProductionCompanyCountry'

const MovieProductionCompany = () => {
  const { productionCompany } = useContext(MovieDetailsContext)
  const { imagePath } = useContext(MoviesContext)
  return (
    <div className="p-3">
      <ProductionCompanyName />

      <ProductionCompanyLogo />
      <ProductionCompanyCountry />
    </div>
  )
}

export default MovieProductionCompany
