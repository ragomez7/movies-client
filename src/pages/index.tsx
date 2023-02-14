import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { useState, createContext } from 'react';
import { useQuery, gql } from '@apollo/client'
import Layout from 'components/Layout'
import MovieLists from 'components/MovieLists'
import MovieDetails from 'components/MovieDetails'
import Favorites from 'components/Favorites'

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
}

interface MoviesContextInterface {
  activeMovie?: number
  setActiveMovie: (num: number)  => void
}
export const MoviesContext = createContext<MoviesContextInterface>({
  setActiveMovie: (num: number) => num
});
export default function Home() {
  const [latestReleases, setLatestReleases] = useState<Array<MovieFromQuery>>([]);
  const [activeMovie, setActiveMovie] = useState<number>(0);
  const { data } = useQuery(gql`
    query GetAllMovies {
      popularMovies {
        id
        title
        release_date
        vote_average
      }
    }
  `,
    {
      onCompleted: (data) => {
        const movies = data.popularMovies;
        setLatestReleases(movies);
      }
    });

  const movieContextObject = {
    activeMovie,
    setActiveMovie
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
            {data ? <MovieLists latestReleases={data?.popularMovies} /> : undefined}
            <MovieDetails activeMovie={activeMovie} />
            <Favorites />
          </Layout>
        </MoviesContext.Provider>
      </main>
    </>
  )
}
