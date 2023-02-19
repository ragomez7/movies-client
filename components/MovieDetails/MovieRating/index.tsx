import React, { useContext } from 'react'

import TrendingUpIcon from './TrendingUpIcon'
import { SvgIcon } from '@mui/material'
import { MovieDetailsContext } from '..'

interface MovieRatingProps {
  renderInInfo?: boolean
}
const MovieRating = ({ renderInInfo }: MovieRatingProps) => {
  const { voteAverage } = useContext(MovieDetailsContext)
  const voteAverageNumber = voteAverage ?? 0
  if (renderInInfo) {
    return (
      <div className="sm:hidden sm2:flex lg:hidden items-center mr-4">
        <TrendingUpIcon />
        <p className="md:xl lg:text-2xl lg:w-[80px] md:w-[56px] text-white ml-2">
          {`${Math.round(voteAverageNumber * 10) / 10} / 10`}
        </p>
      </div>
    )
  }
  return (
    <div className="xs:inline-flex xs:flex-col xs:h-20 xs:w-20 xs:justify-center xs:ml-2 sm:hidden lg:flex items-center sm:mr-4">
      <TrendingUpIcon />
      <p className="md:xl lg:text-2xl lg:w-[80px] md:w-[56px] text-white ml-2">
        {`${Math.round(voteAverageNumber * 10) / 10} / 10`}
      </p>
    </div>
  )
}

export default MovieRating
