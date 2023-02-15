import React, { FC } from 'react'
import { SvgIcon } from '@mui/material'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'

interface MovieRatingProps {
  voteAverage: number
}
const MovieRating: FC<MovieRatingProps> = ({ voteAverage }) => {
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
