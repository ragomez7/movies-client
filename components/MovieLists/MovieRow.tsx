import React, { FC, useContext } from 'react';
import { MovieFromQuery, MoviesContext } from '@/pages';


interface MovieRowProps {
    movie: MovieFromQuery
}
const MovieRow: FC<MovieRowProps> = ({ movie }) => {
    const { activeMovie, setActiveMovie } = useContext(MoviesContext);
    const handleOnClick = () => {
        setActiveMovie(movie.id);
    }
    
    const rowBgColor = activeMovie === movie.id ? 'black' : 'white';
    return (
        <tr
            className={`border border-width-1 cursor-pointer bg-${rowBgColor} `}
            onClick={handleOnClick}          
        >
            <th className="text-xs p-1">{movie.title}</th>
            <th className="text-xs">{movie.release_date}</th>
            <th className="text-xs">{movie.vote_average}</th>
        </tr>
    )
}

export default MovieRow;