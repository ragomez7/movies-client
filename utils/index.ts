import { MovieFromQuery } from 'components/Flixify'
import { IMovie } from 'components/Flixify'
export const processMovie = (movie: MovieFromQuery): IMovie => {
  const processedMovie: IMovie = {
    id: movie.id,
    title: movie.title,
    releaseDate: movie.release_date,
    runtime: movie.runtime,
    overview: movie.overview,
    voteAverage: movie.vote_average,
    posterPath: movie.poster_path, 
  }
  if (movie?.credits?.cast) {
    const castNames = movie.credits.cast.map((actor) => actor.name);
    processedMovie['cast'] = castNames
  }
  return processedMovie
}

export const parseRuntime = (timeInMinutes: number): string => {
  const hours = Math.floor(timeInMinutes / 60);
  const minutes = timeInMinutes % 60;
  return `${hours}h ${minutes}m`
}

export const joinActorNames = (actorNames?: string[] ): string => {
  const slicedActorNames = actorNames?.slice(0, 3);
  
  return slicedActorNames ? "Cast: " +  slicedActorNames?.join(', ') : ''
}