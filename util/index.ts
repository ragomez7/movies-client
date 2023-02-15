import { MovieFromQuery } from "components/Flixify";
import { IMovie } from "components/Flixify";
export function processMovie(movie: MovieFromQuery): IMovie {
    const processedMovie = {
        id: movie.id,
        title: movie.title,
        releaseDate: movie.release_date,
        voteAverage: movie.vote_average,
        posterPath: movie.poster_path,

    };
    return processedMovie;
}