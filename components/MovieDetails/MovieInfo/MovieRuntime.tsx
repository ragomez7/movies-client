import React, { useContext } from 'react'

import { MovieDetailsContext } from '..'
import { parseRuntime } from '../../../utils'

const MovieRuntime = () => {
  const { runtime } = useContext(MovieDetailsContext)
  return (
    <>
      {runtime ? (
        <p className="xs:ml-3 text-sm sm:p-[1px] text-white text-shadow-normal xs:inline-block sm:block">
          {parseRuntime(runtime)}
        </p>
      ) : undefined}
    </>
  )
}

export default MovieRuntime
