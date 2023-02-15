import Head from 'next/head'
import { Inter } from '@next/font/google'
import { useState, createContext } from 'react';
import { useQuery } from '@apollo/client'
import Layout from 'components/Layout'
import MovieLists from 'components/MovieLists'
import MovieDetails from 'components/MovieDetails'
import Favorites from 'components/Favorites'
import { GET_ALL_MOVIES } from 'graphql/queries';

const inter = Inter({ subsets: ['latin'] })

export interface Genre {
  id: number;
  name: string
}
export interface MovieFromQuery {
  typename: string;
  id: number;
  title: string;
  release_date: string;
  vote_average: number;
  poster_path: string;
}

export interface IFavoriteMovie {
  thumbnailPath: string;
  movieId: number;
}
interface MoviesContextInterface {
  activeMovie?: number
  setActiveMovie: (num: number) => void;
  imagePath: string;
  nowPlayingMovies: MovieFromQuery[];
  favoriteMovies: IFavoriteMovie[];
  setFavoriteMovies: (favoriteMovies: IFavoriteMovie[]) => void;
  latestReleases: Array<MovieFromQuery>
}
export const MoviesContext = createContext<MoviesContextInterface>({
  setActiveMovie: (num: number) => num,
  imagePath: "",
  nowPlayingMovies: [],
  favoriteMovies: [],
  setFavoriteMovies: (favoriteMovies: IFavoriteMovie[]) => favoriteMovies,
  latestReleases: [],
});
export default function Home() {
  const [latestReleases, setLatestReleases] = useState<Array<MovieFromQuery>>([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState<Array<MovieFromQuery>>([]);
  const [activeMovie, setActiveMovie] = useState<number>(0);
  const [imagePath, setImagePath] = useState<string>("");
  const [favoriteMovies, setFavoriteMovies] = useState<Array<IFavoriteMovie>>([])
  const { data } = useQuery(GET_ALL_MOVIES,
    {
      onCompleted: (data) => {
        const latestMovies = data.popularMovies;
        setLatestReleases(latestMovies);
        const nowPlayingMovies = data.nowPlayingMovies;
        setNowPlayingMovies(nowPlayingMovies)
        setImagePath(`${data.configurations.images.base_url}/w342`)
      }
    });

  const movieContextObject = {
    activeMovie,
    setActiveMovie,
    imagePath,
    nowPlayingMovies,
    favoriteMovies,
    setFavoriteMovies,
    latestReleases
  }
  return (
    <>
      <Head>
        <title>Movies Client</title>
        <meta name="description" content="Movie client to get relevant movie information" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-full" >
        <MoviesContext.Provider value={movieContextObject}>
          <Layout>
            {data ? <MovieLists latestReleases={latestReleases} /> : undefined}
            <MovieDetails activeMovie={activeMovie} />
            <Favorites />
          </Layout>
        </MoviesContext.Provider>
      </main>
    </>
  )
}
