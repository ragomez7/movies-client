import React, { useContext } from 'react'

import { MoviesContext } from 'components/Flixify'
import { MovieDetailsContext } from 'components/MovieDetails'

const ProductionCompanyLogo = () => {
  const { imagePath } = useContext(MoviesContext)
  const { productionCompany } = useContext(MovieDetailsContext)
  return (
    <div className="bg-red-600 mt-4">
      <img
        className="xs:max-w-auto xs:max-h-[130px]"
        alt="Production Company Logo"
        src={`${imagePath}${productionCompany?.logo_path}`}
      />
    </div>
  )
}

export default ProductionCompanyLogo
