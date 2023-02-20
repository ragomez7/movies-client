import { MovieDetailsContext } from 'components/MovieDetails'
import React, { useContext } from 'react'

const ProductionCompanyName = () => {
    const { productionCompany } = useContext(MovieDetailsContext)
    return (
        <div className="text-gray-400 font-bold xs:text-2xl sm:text-sm md:text-sm sm:ml-3 col-start-1 col-span-3">{productionCompany?.name}</div>
    )
}

export default ProductionCompanyName