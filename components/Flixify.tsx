import { createContext, RefObject, useRef, useState } from 'react'

import { useQuery } from '@apollo/client'
import { useMediaQuery } from 'usehooks-ts'

import { GET_ALL_MOVIES } from 'graphql/queries'

import Favorites from './Favorites'
import Layout from './Layout'
import MovieDetails from './MovieDetails'
import { Genre } from './MovieDetails/MovieInfo/MovieGenres'
import MovieLists from './MovieLists'
import { processMovie } from '../utils'

export interface Company {
  name: string
  logo_path: string
  origin_country: string
}
interface Crew {
  name: string
  department: string
}
export interface Cast {
  name: string
}
interface Credits {
  cast: Array<Cast>
  crew: Array<Crew>
}
export interface Movie {
  id?: number
  title?: string
  overview?: string
  releaseDate?: string
  runtime?: number
  voteAverage?: number
  productionCompany?: Company
  posterPath: string
  cast?: string[]
  directorName?: string
  genres?: Genre[] | string[]
}
export interface MovieFromQuery {
  id: number
  title: string
  release_date: string
  vote_average: number
  production_companies?: Company[]
  runtime: number
  overview: string
  poster_path: string
  credits?: Credits
  genres?: string[]
}

interface MoviesContext {
  activeMovieId?: number
  setActiveMovieId: (num: number) => void
  imagePath: string
  nowPlayingMovies: Movie[]
  favoriteMovies: Movie[]
  setFavoriteMovies: (favoriteMovies: Movie[]) => void
  latestReleases: Movie[]
  isXs: boolean
  favoritesSectionRef?: RefObject<HTMLDivElement>
  scrollToFavorites?: () => void
  mainQueryLoading: boolean
}
export const MoviesContext = createContext<MoviesContext>({
  setActiveMovieId: (num: number) => num,
  imagePath: '',
  nowPlayingMovies: [],
  favoriteMovies: [],
  setFavoriteMovies: (favoriteMovies: Movie[]) => favoriteMovies,
  latestReleases: [],
  isXs: false,
  mainQueryLoading: false,
})

const Flixify = () => {
  const [latestReleases, setLatestReleases] = useState<Array<Movie>>([])
  const [nowPlayingMovies, setNowPlayingMovies] = useState<Array<Movie>>([])
  const [activeMovieId, setActiveMovieId] = useState(0)
  const [imagePath, setImagePath] = useState('')
  const [favoriteMovies, setFavoriteMovies] = useState<Array<Movie>>([])
  const isXs = useMediaQuery('(max-width: 600px)')
  const favoritesSectionRef = useRef<HTMLDivElement>(null)
  const { data, loading: mainQueryLoading } = useQuery(GET_ALL_MOVIES, {
    onCompleted: (data) => {
      const latestMovies: Movie[] = data.popularMovies.map(
        (movie: MovieFromQuery) => processMovie(movie),
      )
      setLatestReleases(latestMovies)
      const nowPlayingMovies: Movie[] = data.nowPlayingMovies.map(
        (movie: MovieFromQuery) => processMovie(movie),
      )
      setNowPlayingMovies(nowPlayingMovies)
      setImagePath(`${data.configurations.images.base_url}/w342`)
    },
  })
  const scrollToFavorites = () => {
    if (isXs) {
      setActiveMovieId(0)
    }
    favoritesSectionRef?.current?.scrollIntoView({ behavior: 'smooth' })
  }
  const movieContextObject = {
    activeMovieId,
    setActiveMovieId,
    imagePath,
    nowPlayingMovies,
    favoriteMovies,
    setFavoriteMovies,
    latestReleases,
    isXs,
    favoritesSectionRef,
    scrollToFavorites,
    mainQueryLoading,
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
