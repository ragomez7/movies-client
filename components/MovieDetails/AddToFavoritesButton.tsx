import React, { FC, useContext } from 'react';
import StarIcon from '@mui/icons-material/Star';
import { SvgIcon } from '@mui/material';
import { IMovie, MoviesContext } from 'components/Flixify';

interface AddToFavoritesButtonProps {
    posterPath: string;
    movieId: number;
}
const AddToFavoritesButton: FC<AddToFavoritesButtonProps> = ({ posterPath, movieId }) => {
    const { favoriteMovies, setFavoriteMovies } = useContext(MoviesContext);
    const handleButtonOnClick = () => {
        const thisMovie: IMovie = {
            id: movieId,
            posterPath
        };
        const isMovieAlreadyInFavorites = favoriteMovies.find((movie) => movie.id === movieId);
        if (!isMovieAlreadyInFavorites) {
            setFavoriteMovies([...favoriteMovies, thisMovie])
        }
        
    }
    return (
        <button 
            className="ml-10 h-full flex flex-col items-center" 
            onClick={handleButtonOnClick}
        >
            <p className="text-sm font-semibold text-white">
                Add To Favorites
            </p>
            <SvgIcon className="text-[#f5cc29] w-[28px] h-[28px] ">
                <StarIcon />
            </SvgIcon>
        </button>
    )
}

export default AddToFavoritesButton;