import React from 'react'

import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import { SvgIcon } from '@mui/material'

interface MovieRatingProps {
  voteAverage?: number
}
const MovieRating = ({ voteAverage }: MovieRatingProps) => {
  voteAverage = voteAverage ?? 0;
  return (
    <div className="flex items-center">
      <SvgIcon className="text-[#38D16F] w-[28px] h-[28px]">
        <TrendingUpIcon />
      </SvgIcon>
      <p className="text-2xl text-white ml-2">
        {`${Math.round(voteAverage * 10) / 10} / 10`}
      </p>
    </div>
  )
}

export default MovieRating
