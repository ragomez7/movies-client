import { createContext, FC, useState } from 'react'

import { useQuery } from '@apollo/client'

import { GET_ALL_MOVIES } from 'graphql/queries'

import Favorites from './Favorites'
import Layout from './Layout'
import MovieDetails from './MovieDetails'
import MovieLists from './MovieLists'
import { processMovie } from '../util'


export interface IMovie {
  id: number
  title?: string
  releaseDate?: string
  voteAverage?: number
  posterPath: string
}
export interface MovieFromQuery {
  id: number
  title: string
  release_date: string
  vote_average: number
  poster_path: string
}

interface MoviesContextInterface {
  activeMovie?: number
  setActiveMovie: (num: number) => void
  imagePath: string
  nowPlayingMovies: IMovie[]
  favoriteMovies: IMovie[]
  setFavoriteMovies: (favoriteMovies: IMovie[]) => void
  latestReleases: IMovie[]
}
export const MoviesContext = createContext<MoviesContextInterface>({
  setActiveMovie: (num: number) => num,
  imagePath: '',
  nowPlayingMovies: [],
  favoriteMovies: [],
  setFavoriteMovies: (favoriteMovies: IMovie[]) => favoriteMovies,
  latestReleases: [],
})

const Flixify: FC = () => {
  const [latestReleases, setLatestReleases] = useState<Array<IMovie>>([])
  const [nowPlayingMovies, setNowPlayingMovies] = useState<Array<IMovie>>([])
  const [activeMovie, setActiveMovie] = useState<number>(0)
  const [imagePath, setImagePath] = useState<string>('')
  const [favoriteMovies, setFavoriteMovies] = useState<Array<IMovie>>([])
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
    activeMovie,
    setActiveMovie,
    imagePath,
    nowPlayingMovies,
    favoriteMovies,
    setFavoriteMovies,
    latestReleases,
  }
  return (
    <MoviesContext.Provider value={movieContextObject}>
      <Layout>
        {data ? <MovieLists /> : undefined}
        <MovieDetails activeMovie={activeMovie} />
        <Favorites />
      </Layout>
    </MoviesContext.Provider>
  )
}

export default Flixify
