import React from 'react'

interface MovieOverviewProps {
  overview?: string
}

const MovieOverview = ({ overview }: MovieOverviewProps) => {
  return <p className="text-xs px-4 text-white row-start-2 row-span-1">{overview}</p>
}

export default MovieOverview
