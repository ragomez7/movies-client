import React from 'react'

import ProductionCompanyCountry from './ProductionCompanyCountry'
import ProductionCompanyLogo from './ProductionCompanyLogo'
import ProductionCompanyName from './ProductionCompanyName'

const MovieProductionCompany = () => {
  return (
    <div className="p-3">
      <ProductionCompanyName />

      <ProductionCompanyLogo />
      <ProductionCompanyCountry />
    </div>
  )
}

export default MovieProductionCompany
