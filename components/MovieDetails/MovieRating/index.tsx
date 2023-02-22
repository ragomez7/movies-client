import React, { useContext } from 'react'

import TrendingUpIcon from './TrendingUpIcon'
import { MovieDetailsContext } from '..'

interface MovieRatingProps {
  renderInInfo?: boolean
}
const MovieRating = ({ renderInInfo }: MovieRatingProps) => {
  const { voteAverage } = useContext(MovieDetailsContext)
  const voteAverageNumber = voteAverage ?? 0
  if (renderInInfo) {
    return (
      <div className="text-shadow-normal sm:hidden sm2:hidden md:flex lg:hidden items-center mr-4">
        <TrendingUpIcon />
        <p className="md:xl lg:text-2xl lg:w-[80px] md:w-[56px] text-white ml-2">
          {`${Math.round(voteAverageNumber * 10) / 10} / 10`}
        </p>
      </div>
    )
  }
  return (
    <div className="text-shadow-normal xs:inline-flex xs:flex-col xs:h-24 xs:w-24 xs:justify-center xs:ml-2 sm:hidden lg:flex lg:h-full items-center sm:mr-4">
      <TrendingUpIcon />
      <p className="md:xl lg:text-2xl lg:w-[80px] md:w-[56px] text-white ml-2">
        {`${Math.round(voteAverageNumber * 10) / 10} / 10`}
      </p>
    </div>
  )
}

export default MovieRating
