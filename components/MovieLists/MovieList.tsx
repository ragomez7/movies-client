import { MovieFromQuery } from '@/pages';
import React, { FC } from 'react';
import { v4 as uuid} from 'uuid';
import InListMovieThumbnail from 'components/MovieLists/InListMovieThumbnail';


interface MovieListProps {
    movieArray: Array<MovieFromQuery>
}

const MovieList: FC<MovieListProps> = ({ movieArray }) => {
    return (
        <div className="flex overflow-x-scroll w-full">
            {movieArray.length ? movieArray.map((movie) => (
                <InListMovieThumbnail 
                    key={uuid()}
                    movieId={movie.id} 
                    posterPath={movie.poster_path} 
                />
            )) : undefined}
        </div>
    )
}

export default MovieList;