import React, { FC, useContext } from 'react';
import { v4 as uuid } from 'uuid';
import { MoviesContext } from '@/pages';
import FavoriteMovieThumbnail from './FavoriteMovieThumbnail';

const FavoriteMoviesList: FC = () => {
    const { favoriteMovies } = useContext(MoviesContext);
    return (
        <div className="pl-3">
            {favoriteMovies.length ?
                favoriteMovies.map((movie) => (
                    <FavoriteMovieThumbnail
                        key={uuid()}
                        thumbnailPath={movie.thumbnailPath}
                        movieId={movie.movieId}
                    />
                )) :
                undefined
            }
        </div>
    )
}

export default FavoriteMoviesList;