import { MovieFromQuery } from 'components/Flixify'
import { IMovie } from 'components/Flixify'
export const processMovie = (movie: MovieFromQuery): IMovie | void => {
  if (movie) {
    const processedMovie: IMovie = {
      id: movie.id,
      title: movie.title,
      releaseDate: movie.release_date,
      runtime: movie.runtime,
      overview: movie.overview,
      voteAverage: movie.vote_average,
      posterPath: movie.poster_path,
      genres: movie.genres,
    }
    if (movie?.credits?.cast) {
      const castNames = movie.credits.cast.map((actor) => actor.name)
      processedMovie['cast'] = castNames
    }
    if (movie?.credits?.crew) {
      for (const crewMember of movie.credits.crew) {
        if (crewMember.department === 'Directing') {
          processedMovie['directorName'] = crewMember.name
          break
        }
      }
    }
    if (movie.genres) {
      processedMovie['genres'] = movie.genres.slice(0, 2)
    }
    if (movie?.production_companies) {
      processedMovie['productionCompany'] = movie.production_companies[0]
    }
    return processedMovie
  }
}

export const parseRuntime = (timeInMinutes: number): string => {
  const hours = Math.floor(timeInMinutes / 60)
  const minutes = timeInMinutes % 60
  return `${hours}h ${minutes}m`
}

export const joinActorNames = (actorNames?: string[]): string => {
  const slicedActorNames = actorNames?.slice(0, 3)

  return slicedActorNames ? 'Cast: ' + slicedActorNames?.join(', ') : ''
}
