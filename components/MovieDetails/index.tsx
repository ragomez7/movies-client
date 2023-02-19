import { createContext, useState, useContext } from 'react'

import { useQuery } from '@apollo/client'

import { IMovie, MoviesContext } from 'components/Flixify'
import { GET_MOVIE_DETAILS } from 'graphql/queries'

import AddToFavoritesButton from './AddToFavoritesButton'
import MovieInfo from './MovieInfo'
import MovieMedia from './MovieMedia'
import MovieOverview from './MovieOverview'
import MovieRating from './MovieRating'
import { joinActorNames, processMovie } from '../../utils'
import MovieThumbnail from './MovieMedia/MovieThumbnail'
import MovieYoutubeTrailer from './MovieMedia/MovieYoutubeTrailer'
import ExitMovieDetailsButton from './ExitMovieDetailsButton'
import MovieTitle from './MovieInfo/MovieTitle'
import MovieReleaseDate from './MovieInfo/MovieReleaseDate'
import MovieRuntime from './MovieInfo/MovieRuntime'

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
  const { activeMovieId, setActiveMovieId, isXs } = useContext(MoviesContext)
  const [movieDetails, setMovieDetails] = useState<IMovie>({
    posterPath: '',
  })
  const [actorNames, setActorNames] = useState('')
  const [videoId, setVideoId] = useState('')
  useQuery(GET_MOVIE_DETAILS, {
    variables: {
      id: activeMovieId,
    },
    onCompleted: (data) => {
      const movieDetails: IMovie = processMovie(data.movieDetail)
      setMovieDetails(movieDetails)
      const actorNames = joinActorNames(movieDetails.cast)
      setActorNames(actorNames)
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

  const displayValueInXsBreakPoint = activeMovieId && isXs ? 'grid' : 'hidden'
  if (activeMovieId && isXs) {
    return (
      <MovieDetailsContext.Provider value={movieDetailsContextObject}>
        <section className="">
          {activeMovieId ? (
            <>
              <ExitMovieDetailsButton />
              <MovieYoutubeTrailer />
              <MovieTitle />
              <MovieReleaseDate />
              <MovieRuntime />
              <MovieOverview />
              <p className="text-gray-300 ml-3 mt-2">{actorNames}</p>
              <div className="flex mt-3">
                <MovieRating />
                <AddToFavoritesButton />
              </div>
              {/* <div className="">
              <MovieInfo />
              <MovieRating />
              <AddToFavoritesButton />
            </div>
            <div className="">
              <MovieMedia />
              <MovieOverview />
            </div>
            <div className=""></div> */}
            </>
          ) : undefined}
        </section>
      </MovieDetailsContext.Provider>
    )
  }
  return (
    <MovieDetailsContext.Provider value={movieDetailsContextObject}>
      <section className="col-start-2 col-span-1 row-start-1 row-span-1 sm:grid xs:hidden grid-rows-[56px_auto_1px] grid-cols-[1fr_1fr]">
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
            <div className="col-start-1 col-span-2 row-start-3 row-span-1"></div>
          </>
        ) : undefined}
      </section>
    </MovieDetailsContext.Provider>
  )
}

export default MovieDetails
