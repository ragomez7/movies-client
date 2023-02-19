import { createContext, useState } from 'react'

import { useQuery } from '@apollo/client'

import { GET_ALL_MOVIES } from 'graphql/queries'

import { useMediaQuery } from 'usehooks-ts'

import Favorites from './Favorites'
import Layout from './Layout'
import MovieDetails from './MovieDetails'
import MovieLists from './MovieLists'
import { processMovie } from '../utils'

interface Cast {
  name: string
}
interface Credits {
  cast: Array<Cast>
}
export interface IMovie {
  id?: number
  title?: string
  overview?: string
  releaseDate?: string
  runtime?: number
  voteAverage?: number
  posterPath: string
  cast?: Array<string>
}
export interface MovieFromQuery {
  id: number
  title: string
  release_date: string
  vote_average: number
  runtime: number
  overview: string
  poster_path: string
  credits?: Credits
}

interface MoviesContext {
  activeMovieId?: number
  setActiveMovieId: (num: number) => void
  imagePath: string
  nowPlayingMovies: IMovie[]
  favoriteMovies: IMovie[]
  setFavoriteMovies: (favoriteMovies: IMovie[]) => void
  latestReleases: IMovie[]
  isXs: boolean

}
export const MoviesContext = createContext<MoviesContext>({
  setActiveMovieId: (num: number) => num,
  imagePath: '',
  nowPlayingMovies: [],
  favoriteMovies: [],
  setFavoriteMovies: (favoriteMovies: IMovie[]) => favoriteMovies,
  latestReleases: [],
  isXs: false,

})

const Flixify = () => {
  const [latestReleases, setLatestReleases] = useState<Array<IMovie>>([])
  const [nowPlayingMovies, setNowPlayingMovies] = useState<Array<IMovie>>([])
  const [activeMovieId, setActiveMovieId] = useState(0)
  const [imagePath, setImagePath] = useState('')
  const [favoriteMovies, setFavoriteMovies] = useState<Array<IMovie>>([])
  const isXs = useMediaQuery('(max-width: 600px)')
  const { data } = useQuery(GET_ALL_MOVIES, {
    onCompleted: (data) => {
      const latestMovies: IMovie[] = data.popularMovies.map(
        (movie: MovieFromQuery) => processMovie(movie),
      )
      setLatestReleases(latestMovies)
      const nowPlayingMovies: IMovie[] = data.nowPlayingMovies.map(
        (movie: MovieFromQuery) => processMovie(movie),
      )
      setNowPlayingMovies(nowPlayingMovies)
      setImagePath(`${data.configurations.images.base_url}/w342`)
    },
  })

  const movieContextObject = {
    activeMovieId,
    setActiveMovieId,
    imagePath,
    nowPlayingMovies,
    favoriteMovies,
    setFavoriteMovies,
    latestReleases,
    isXs,
  }
  return (
    <MoviesContext.Provider value={movieContextObject}>
      <Layout>
        {data ? <MovieLists /> : undefined}
        <MovieDetails />
        <Favorites />
      </Layout>
    </MoviesContext.Provider>
  )
}

export default Flixify
