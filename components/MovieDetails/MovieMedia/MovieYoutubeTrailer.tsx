import React, { useContext } from 'react'

import Youtube, { YouTubeProps } from 'react-youtube'
import { v4 as uuid } from 'uuid'

import { MovieDetailsContext } from '..'

const MovieYoutubeTrailer = () => {
  const videoOpts = {
    width: '100%',
    height: '295px',
    playerVars: {
      origin: `http://localhost:3000/`,
    },
  }
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    event.target.pauseVideo()
  }
  const { videoId } = useContext(MovieDetailsContext)
  return videoId ? (
    <Youtube
      key={uuid()}
      videoId={videoId}
      opts={videoOpts}
      onReady={onPlayerReady}
    />
  ) : (
    <div className="text-white flex items-center justify-center text-xl font-bold flex-col">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-12 h-12 text-red-600"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M12 18.75H4.5a2.25 2.25 0 01-2.25-2.25V9m12.841 9.091L16.5 19.5m-1.409-1.409c.407-.407.659-.97.659-1.591v-9a2.25 2.25 0 00-2.25-2.25h-9c-.621 0-1.184.252-1.591.659m12.182 12.182L2.909 5.909M1.5 4.5l1.409 1.409"
        />
      </svg>
      This video is not available.
    </div>
  )
}

export default MovieYoutubeTrailer
