import React, { useContext } from 'react'

import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import { SvgIcon } from '@mui/material'
import { MovieDetailsContext } from '.'

const MovieRating = () => {
  const { voteAverage } = useContext(MovieDetailsContext)
  const voteAverageNumber = voteAverage ?? 0;
  return (
    <div className="flex items-center">
      <SvgIcon className="text-[#38D16F] w-[28px] h-[28px]">
        <TrendingUpIcon />
      </SvgIcon>
      <p className="text-2xl text-white ml-2">
        {`${Math.round(voteAverageNumber * 10) / 10} / 10`}
      </p>
    </div>
  )
}

export default MovieRating
