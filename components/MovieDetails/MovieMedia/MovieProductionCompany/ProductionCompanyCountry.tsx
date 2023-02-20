import React, { useContext } from 'react'

import { MovieDetailsContext } from 'components/MovieDetails'

const ProductionCompanyCountry = () => {
  const { productionCompany } = useContext(MovieDetailsContext)
  return (
    <>
      {productionCompany?.origin_country ? (
        <p className="text-gray-400 font-bold xs:text-xl sm:text-sm md:text-sm xs:mt-2 sm:mt-0 sm:col-start-4 sm:col-span-4">
          Produced in {productionCompany?.origin_country}
        </p>
      ) : (
        <div></div>
      )}
    </>
  )
}

export default ProductionCompanyCountry
