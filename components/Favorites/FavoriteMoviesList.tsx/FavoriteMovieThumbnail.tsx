import React, { FC, useContext, useState } from 'react';
import SvgIcon from '@mui/material/SvgIcon';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Tooltip from '@mui/material/Tooltip';
import { MoviesContext } from '@/pages';
import { IFavoriteMovie } from '@/pages';


const FavoriteMovieThumbnail: FC<IFavoriteMovie> = ({ thumbnailPath, movieId }) => {
    const { setActiveMovie, imagePath, favoriteMovies, setFavoriteMovies } = useContext(MoviesContext);
    const [hover, setHover] = useState<boolean>(false);
    const handleMouseEnter = () => {
        setHover(true);
    };

    const handleMouseLeave = () => {
        setHover(false);
    };
    const handleRemoveFromFavoritesOnClick = (e: React.SyntheticEvent) => {
        const filteredFavoriteMovies = favoriteMovies.filter((movie) => movie.movieId !== movieId);
        setFavoriteMovies(filteredFavoriteMovies);
        setActiveMovie(0);
        e.stopPropagation();
    }
    return (
        <button
            className="mr-4 relative"
            onClick={() => setActiveMovie(movieId)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}

        >
            <img 
                className={`w-[134px] h-[200px] ${hover ? "opacity-20" : undefined}`}
                src={`${imagePath}${thumbnailPath}`}
                alt="Movie thumbnail"
            />
            {hover ?
                <Tooltip title="Remove from Favorites">
                    <SvgIcon 
                        className="text-[#ff2828] absolute left-[55px] top-[140px]"
                        onClick={handleRemoveFromFavoritesOnClick}
                        >
                        <RemoveCircleOutlineIcon />
                    </SvgIcon>
                </Tooltip> :
                undefined
            }


        </button>
    )
}

export default FavoriteMovieThumbnail;