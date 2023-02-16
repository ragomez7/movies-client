import Head from 'next/head'

import Flixify from 'components/Flixify'

const Home = () => {
  return (
    <>
      <Head>
        <title>Movies Client</title>
        <meta
          name="description"
          content="Movie client to get relevant movie information"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Flixify />
      
    </>
  )
}

export default Home
