import { FC, useState, useContext } from 'react';
import { useQuery } from '@apollo/client';
import { MovieFromQuery, MoviesContext } from '@/pages';
import { GET_MOVIES_FROM_SEARCH } from 'graphql/queries';
import MovieList from '../MovieList';

export interface MovieListsProps {
    latestReleases: MovieFromQuery[];
}
const SearchableList: FC = () => {
    const [searchedMovies, setSearchedMovies] = useState<Array<MovieFromQuery>>([])
    const [searchTerm, setSearchTerm] = useState<string>("");
    const { nowPlayingMovies } = useContext(MoviesContext);
    useQuery(GET_MOVIES_FROM_SEARCH,
        {
            variables: {
                term: searchTerm
            },
            onCompleted: (data) => {
                setSearchedMovies(data?.searchMovie);
            }
        }
    )
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
                {searchedMovies.length ?
                    <MovieList movieArray={searchedMovies} />
                    :
                    <MovieList movieArray={nowPlayingMovies} />
                }
            </div>
        </div>
    )
};

export default SearchableList;