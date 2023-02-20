import { createContext, useRef, useState } from 'react'

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
export interface IMovie {
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
  nowPlayingMovies: IMovie[]
  favoriteMovies: IMovie[]
  setFavoriteMovies: (favoriteMovies: IMovie[]) => void
  latestReleases: IMovie[]
  isXs: boolean
  favoritesSectionRef?: { current: any }
  scrollToFavorites?: () => void
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
  const favoritesSectionRef = useRef<HTMLDivElement>(null)
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
