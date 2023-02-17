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
  runtime?: number
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
      console.log(data)
      const movieDetails: IMovie = processMovie(data.movieDetail)
      setMovieDetails(movieDetails)
      const videoResults: Array<VideoQueryResult> =
        data.movieDetail.videos.results
      const videoResultsArray = videoResults.map((video) => video.key)
      videoResultsArray[0] ? setVideoId(videoResultsArray[0]) : setVideoId('')
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
    voteAverage: movieDetails?.voteAverage,
  }
  return (
    <MovieDetailsContext.Provider value={movieDetailsContextObject}>
      <section className="col-start-2 col-span-1 row-start-1 row-span-1 grid grid-rows-[56px_auto_1px] grid-cols-[1fr_1fr]">
        {activeMovieId ? (
          <>
            <div className="col-start-1 col-span-2 row-start-1 row-span-1 flex justify-end pr-8">
              <MovieInfo />
              <MovieRating />
              <AddToFavoritesButton />
            </div>
            <div className="col-start-1 col-span-2 row-start-2 row-span-1 lg:block md2:flex md2:items-center md:block sm2:flex sm2:items-start sm:block">
              <MovieMedia />
              <MovieOverview />
            </div>
            <div className="col-start-1 col-span-2 row-start-3 row-span-1">
           
            </div>
          </>
        ) : 
        undefined}
      </section>
    </MovieDetailsContext.Provider>
  )
}

export default MovieDetails
