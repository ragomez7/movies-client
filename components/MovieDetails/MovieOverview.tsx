import React, { useContext } from 'react'
import { MovieDetailsContext } from '.'


const MovieOverview = () => {
  // const { overview } = useContext(MovieDetailsContext)
  const overview = `Once upon a time, in a far away swamp, there lived an ogre named Shrek (Mike Myers) whose precious solitude is suddenly shattered by an invasion of annoying fairy tale characters. They were all banished from their kingdom by the evil Lord Farquaad (John Lithgow). Determined to save their home -- not to mention his -- Shrek cuts a deal with Farquaad and sets out to rescue Princess Fiona (Cameron Diaz) to be Farquaad's bride. Rescuing the Princess may be small compared to her deep, dark secret.`
  return <p className="text-xs px-4 text-white pt-3">{overview}</p>
}

export default MovieOverview
