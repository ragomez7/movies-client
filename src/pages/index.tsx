import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Layout from 'components/Layout'
import MovieLists from 'components/MovieLists'
import MovieDetails from 'components/MovieDetails'
import Favorites from 'components/Favorites'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Movies Client</title>
        <meta name="description" content="Movie client to get relevant movie information" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-full" >
        <Layout>
          <MovieLists />
          <MovieDetails />
          <Favorites />
        </Layout>
      </main>
    </>
  )
}
