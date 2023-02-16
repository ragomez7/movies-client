import React from 'react'

interface MovieInfoProps {
  title?: string
  releaseDate?: string
  runtime?: string
}
const MovieInfo = ({ title, releaseDate, runtime }: MovieInfoProps) => {
  return (
    <div>
      <p className="text-2xl text-white">{title}</p>
      <div className="flex w-1/2 justify-around text-white">
        <p>{releaseDate}</p>
        <p>{runtime}</p>
      </div>
    </div>
  )
}

export default MovieInfo
