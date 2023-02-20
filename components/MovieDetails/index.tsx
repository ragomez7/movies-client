import { createContext, useContext, useState } from 'react'

import { useQuery } from '@apollo/client'

import { Company, IMovie, MoviesContext } from 'components/Flixify'
import { GET_MOVIE_DETAILS } from 'graphql/queries'

import MovieDetailsSmAndUp from './MovieDetailsLayouts/MovieDetailsSmAndUp'
import MovieDetailsXs from './MovieDetailsLayouts/MovieDetailsXs'
import { Genre } from './MovieInfo/MovieGenres'
import { processMovie } from '../../utils'

interface MovieDetailsContext {
  posterPath: string
  videoId: string
  title?: string
  releaseDate?: string
  runtime?: number
  movieId?: number
  overview?: string
  voteAverage?: number
  productionCompany?: Company
  directorName?: string
  cast?: string[]
  genres?: Genre[] | string[]
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
  const { activeMovieId, isXs } = useContext(MoviesContext)
  const [movieDetails, setMovieDetails] = useState<IMovie>({
    posterPath: '',
  })
  const [videoId, setVideoId] = useState('')
  useQuery(GET_MOVIE_DETAILS, {
    variables: {
      id: activeMovieId,
    },
    onCompleted: (data) => {
      if (activeMovieId) {
        const movieDetails: IMovie = processMovie(data.movieDetail) as IMovie
        setMovieDetails(movieDetails)
        const videoResults: Array<VideoQueryResult> =
          data.movieDetail?.videos.results
        const videoResultsArray = videoResults.map((video) => video.key)
        videoResultsArray[0] ? setVideoId(videoResultsArray[0]) : setVideoId('')
      }
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
    productionCompany: movieDetails?.productionCompany,
    directorName: movieDetails?.directorName,
    cast: movieDetails?.cast,
    genres: movieDetails?.genres,
  }

  if (activeMovieId) {
    return (
      <MovieDetailsContext.Provider value={movieDetailsContextObject}>
        {isXs ? <MovieDetailsXs /> : <MovieDetailsSmAndUp />}
      </MovieDetailsContext.Provider>
    )
  } else {
    return <div></div>
  }
}

export default MovieDetails
