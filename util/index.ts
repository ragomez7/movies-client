import { MovieFromQuery } from 'components/Flixify'
import { IMovie } from 'components/Flixify'
export const processMovie = (movie: MovieFromQuery): IMovie => {
  const processedMovie = {
    id: movie.id,
    title: movie.title,
    releaseDate: movie.release_date,
    overview: movie.overview,
    voteAverage: movie.vote_average,
    posterPath: movie.poster_path,
    runtime: movie.runtime,
  }
  return processedMovie
}

export const parseRuntime = (timeInMinutes: number): string => {
  const hours = Math.floor(timeInMinutes / 60);
  const minutes = timeInMinutes % 60;
  return `${hours}h ${minutes}m`
}
