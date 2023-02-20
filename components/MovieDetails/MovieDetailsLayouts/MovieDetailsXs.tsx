import React from 'react'

import AddToFavoritesButton from '../AddToFavoritesButton'
import ExitMovieDetailsButton from '../ExitMovieDetailsButton'
import MovieCast from '../MovieInfo/MovieCast'
import MovieDirector from '../MovieInfo/MovieDirector'
import MovieGenres from '../MovieInfo/MovieGenres'
import MovieReleaseDate from '../MovieInfo/MovieReleaseDate'
import MovieRuntime from '../MovieInfo/MovieRuntime'
import MovieTitle from '../MovieInfo/MovieTitle'
import MovieProductionCompany from '../MovieMedia/MovieProductionCompany'
import MovieThumbnail from '../MovieMedia/MovieThumbnail'
import MovieYoutubeTrailer from '../MovieMedia/MovieYoutubeTrailer'
import MovieOverview from '../MovieOverview'
import MovieRating from '../MovieRating'

const MovieDetailsXs = () => {
  return (
    <section className="">
      <>
        <ExitMovieDetailsButton />
        <MovieYoutubeTrailer />
        <div className="p-3">
          <div className="flex">
            <MovieTitle />
            <MovieGenres />
          </div>
          <MovieReleaseDate />
          <MovieRuntime />
          <MovieOverview />
          <MovieCast />
          <MovieDirector />
          <div className="flex mt-3">
            <MovieRating />
            <AddToFavoritesButton />
          </div>
          <div className="flex">
            <MovieThumbnail />
            <MovieProductionCompany />
          </div>
        </div>
      </>
    </section>
  )
}

export default MovieDetailsXs
