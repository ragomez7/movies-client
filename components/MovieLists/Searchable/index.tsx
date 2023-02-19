import { useContext, useState } from 'react'

import { useQuery } from '@apollo/client'

import { IMovie, MovieFromQuery, MoviesContext } from 'components/Flixify'
import { GET_MOVIES_FROM_SEARCH } from 'graphql/queries'

import { processMovie } from '../../../utils'
import MovieList from '../MovieList'

const SearchableList = () => {
  const [searchedMovies, setSearchedMovies] = useState<Array<IMovie>>([])
  const [searchTerm, setSearchTerm] = useState('')
  const { nowPlayingMovies } = useContext(MoviesContext)
  useQuery(GET_MOVIES_FROM_SEARCH, {
    variables: {
      term: searchTerm,
    },
    onCompleted: (data) => {
      const searchedMovies: IMovie[] = data?.searchMovie.map(
        (movie: MovieFromQuery) => processMovie(movie),
      )
      setSearchedMovies(searchedMovies)
    },
  })
  return (
    <div className="w-full">
      <div className="w-full">
        <input
          autoFocus
          className="bg-transparent text-lg font-bold p-4 text-white w-full"
          placeholder="Search Movies"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {searchedMovies.length ? (
          <MovieList movies={searchedMovies} />
        ) : (
          <MovieList movies={nowPlayingMovies} />
        )}
      </div>
    </div>
  )
}

export default SearchableList
