import { createContext, useState, useContext } from 'react'

import { useQuery } from '@apollo/client'

import { IMovie, MoviesContext } from 'components/Flixify'
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
  title?: string
  releaseDate?: string
  runtime?: string
  movieId?: number
  overview?: string
  voteAverage?: number
}

interface VideoQueryResult {
  key: string
  name?: string
}
export const MovieDetailsContext = createContext<MovieDetailsContext>({
  posterPath: '',
  videoId: '',
})
const MovieDetails = () => {
  const { activeMovieId } = useContext(MoviesContext)
  const [movieDetails, setMovieDetails] = useState<IMovie>({
    posterPath: '',
  })
  const [videoId, setVideoId] = useState('')
  useQuery(GET_MOVIE_DETAILS, {
    variables: {
      id: activeMovieId,
    },
    onCompleted: (data) => {
      const movieDetails: IMovie = processMovie(data.movieDetail)
      setMovieDetails(movieDetails)
      const videoResults: Array<VideoQueryResult> =
        data.movieDetail.videos.results
      const videoResultsArray = videoResults.map((video) => video.key)
      videoResultsArray[0]
        ? setVideoId(videoResultsArray[0])
        : setVideoId("")
    },
    onError: (err) => {
      console.log(err)
    },
  })
  const movieDetailsContextObject = {
    posterPath: movieDetails?.posterPath,
    movieId: activeMovieId,
    videoId,
    title: movieDetails?.title,
    releaseDate: movieDetails?.releaseDate,
    runtime: movieDetails?.runtime,
    overview: movieDetails?.overview,
    voteAverage: movieDetails?.voteAverage
  }
  return (
    <MovieDetailsContext.Provider value={movieDetailsContextObject}>
      <section className="col-start-2 col-span-1 row-start-1 row-span-1 ">
        {activeMovieId ? (
          <div className="grid grid-rows-[1fr_7fr]">
            <div className="row-start-1 row-span-1 grid grid-cols-[1fr_1fr]">
              <MovieInfo />
              <div className="flex items-center justify-center w-full">
                <MovieRating />
                <AddToFavoritesButton />
              </div>
            </div>
            <div className="mt-1 row-start-2 row-span-1 grid grid-row-[4fr_1fr]">
              <MovieMedia />
              <MovieOverview />
            </div>
          </div>
        ) : undefined}
      </section>
    </MovieDetailsContext.Provider>
  )
}

export default MovieDetails
