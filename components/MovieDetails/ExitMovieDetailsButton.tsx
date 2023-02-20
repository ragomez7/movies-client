import React, { useContext } from 'react'

import { MoviesContext } from 'components/Flixify'

const ExitMovieDetailsButton = () => {
  const { setActiveMovieId } = useContext(MoviesContext)
  return (
    <div className="flex pr-3">
      <button
        className="ml-auto text-white bg-black bg-opacity-90 rounded-2xl p-1"
        onClick={() => setActiveMovieId(0)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  )
}

export default ExitMovieDetailsButton
