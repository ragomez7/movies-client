import React from 'react'

interface MovieOverviewProps {
  overview?: string
}

const MovieOverview = ({ overview }: MovieOverviewProps) => {
  return <p className="text-sm p-4 text-white">{overview}</p>
}

export default MovieOverview
