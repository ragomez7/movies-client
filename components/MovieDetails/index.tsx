import { createContext, FC, useState } from 'react'

import { useQuery } from '@apollo/client'

import { GET_MOVIE_DETAILS } from 'graphql/queries'

import AddToFavoritesButton from './AddToFavoritesButton'
import MovieInfo from './MovieInfo'
import MovieMedia from './MovieMedia'
import MovieOverview from './MovieOverview'
import MovieRating from './MovieRating'
interface MovieDetailsProps {
  activeMovie?: number
}

interface IMovieDetails {
  poster_path: string
  backdrop_path: string
  title: string
  overview: string
  release_date: string
  runtime: string
  vote_average: number
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
const MovieDetails: FC<MovieDetailsProps> = ({ activeMovie }) => {
  const [movieDetails, setMovieDetails] = useState<IMovieDetails>({
    poster_path: '',
    backdrop_path: '',
    title: '',
    overview: '',
    release_date: '',
    runtime: '',
    vote_average: 0,
  })
  const [posterPath, setPosterPath] = useState<string>('')
  const [videoId, setVideoId] = useState<string>('')
  useQuery(GET_MOVIE_DETAILS, {
    variables: {
      id: activeMovie,
    },
    onCompleted: (data) => {
      setMovieDetails(data.movieDetail)
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
      <div className="row-span-1 p-3">
        {activeMovie ? (
          <>
            <div className="grid grid-cols-[1fr_1fr]">
              <MovieInfo
                title={movieDetails?.title}
                releaseDate={movieDetails?.release_date}
                runtime={movieDetails?.runtime}
              />
              <div className="flex items-center justify-center w-full">
                <MovieRating voteAverage={movieDetails?.vote_average} />
                <AddToFavoritesButton
                  posterPath={movieDetails?.poster_path}
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
      </div>
    </MovieDetailsContext.Provider>
  )
}

export default MovieDetails
