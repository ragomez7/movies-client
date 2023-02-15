import { gql } from '@apollo/client';
export const GET_ALL_MOVIES = gql`
    query GetAllMovies {
        popularMovies {
            poster_path
            id
            title
            release_date
            vote_average
        }
        nowPlayingMovies {
            poster_path
            id
            title
            release_date
            vote_average
        }
        configurations {
            images {
            base_url
            poster_sizes
            }
        }
    }
`;

export const GET_MOVIES_FROM_SEARCH = gql`
    query SearchMovies($term: String!) {
        searchMovie(term: $term) {
            id
            title
            release_date
            vote_average
            poster_path
        }
    }
`;

export const GET_MOVIE_DETAILS = gql`
query GetMovieDetails($id: Int!) {
    movieDetail(id: $id) {
        poster_path
        backdrop_path
        title
        overview
        release_date
        runtime
        vote_average
        production_companies {
            id
            name
            logo_path
            origin_country
        }
        videos {
            results {
                id
                key
                name
                site
                type
            }
        }
    }
}
`