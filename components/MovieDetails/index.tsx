import { createContext, useState } from 'react'

import { useQuery } from '@apollo/client'

import { IMovie } from 'components/Flixify'
import { GET_MOVIE_DETAILS } from 'graphql/queries'

import AddToFavoritesButton from './AddToFavoritesButton'
import MovieInfo from './MovieInfo'
import MovieMedia from './MovieMedia'
import MovieOverview from './MovieOverview'
import MovieRating from './MovieRating'
import { processMovie } from '../../util'
interface MovieDetailsProps {
  activeMovie?: number
}

interface MovieDetailsContextInterface {
  posterPath: string
  videoId: string
}

interface VideoQueryResultInterface {
  key: string
  name?: string
}
export const MovieDetailsContext = createContext<MovieDetailsContextInterface>({
  posterPath: '',
  videoId: '',
})
const MovieDetails = ({ activeMovie }: MovieDetailsProps) => {
  const [movieDetails, setMovieDetails] = useState<IMovie>({
    posterPath: '',
  })
  const [posterPath, setPosterPath] = useState('')
  const [videoId, setVideoId] = useState('')
  useQuery(GET_MOVIE_DETAILS, {
    variables: {
      id: activeMovie,
    },
    onCompleted: (data) => {
      const movieDetails: IMovie = processMovie(data.movieDetail)
      setMovieDetails(movieDetails)
      setPosterPath(data.movieDetail.poster_path)
      const videoResults: Array<VideoQueryResultInterface> =
        data.movieDetail.videos.results
      const videoResultsArray = videoResults.map((video) => video.key)
      console.log(videoResultsArray[0])
      videoResultsArray[0]
        ? setVideoId(videoResultsArray[0])
        : setVideoId("")
    },
    onError: (err) => {
      console.log(err)
    },
  })
  const movieDetailsContextObject = {
    posterPath,
    videoId,
  }
  return (
    <MovieDetailsContext.Provider value={movieDetailsContextObject}>
      <section className="row-span-1 p-3">
        {activeMovie ? (
          <>
            <div className="grid grid-cols-[1fr_1fr]">
              <MovieInfo
                title={movieDetails?.title}
                releaseDate={movieDetails?.releaseDate}
                runtime={movieDetails?.runtime}
              />
              <div className="flex items-center justify-center w-full">
                <MovieRating voteAverage={movieDetails?.voteAverage} />
                <AddToFavoritesButton
                  posterPath={movieDetails?.posterPath}
                  movieId={activeMovie}
                />
              </div>
            </div>
            <div className="mt-3">
              <MovieMedia />
              <MovieOverview overview={movieDetails?.overview} />
            </div>
          </>
        ) : undefined}
      </section>
    </MovieDetailsContext.Provider>
  )
}

export default MovieDetails
