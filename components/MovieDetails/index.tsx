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
  activeMovieId?: number
}

interface MovieDetailsContext {
  posterPath: string
  videoId: string
}

interface VideoQueryResult {
  key: string
  name?: string
}
export const MovieDetailsContext = createContext<MovieDetailsContext>({
  posterPath: '',
  videoId: '',
})
const MovieDetails = ({ activeMovieId }: MovieDetailsProps) => {
  const [movieDetails, setMovieDetails] = useState<IMovie>({
    posterPath: '',
  })
  const [posterPath, setPosterPath] = useState('')
  const [videoId, setVideoId] = useState('')
  useQuery(GET_MOVIE_DETAILS, {
    variables: {
      id: activeMovieId,
    },
    onCompleted: (data) => {
      const movieDetails: IMovie = processMovie(data.movieDetail)
      setMovieDetails(movieDetails)
      setPosterPath(data.movieDetail.poster_path)
      const videoResults: Array<VideoQueryResult> =
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
      <section className="col-start-2 col-span-1 row-start-1 row-span-1 ">
        {activeMovieId ? (
          <div className="grid grid-rows-[1fr_7fr]">
            <div className="row-start-1 row-span-1 grid grid-cols-[1fr_1fr]">
              <MovieInfo
                title={movieDetails?.title}
                releaseDate={movieDetails?.releaseDate}
                runtime={movieDetails?.runtime}
              />
              <div className="flex items-center justify-center w-full">
                <MovieRating voteAverage={movieDetails?.voteAverage} />
                <AddToFavoritesButton
                  posterPath={movieDetails?.posterPath}
                  movieId={activeMovieId}
                />
              </div>
            </div>
            <div className="mt-1 row-start-2 row-span-1 grid grid-row-[4fr_1fr]">
              <MovieMedia />
              <MovieOverview overview={movieDetails?.overview} />
            </div>
          </div>
        ) : undefined}
      </section>
    </MovieDetailsContext.Provider>
  )
}

export default MovieDetails
