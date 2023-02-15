
import React, { FC, useContext, useState } from 'react';
import Image from 'next/image';
import { MoviesContext } from 'components/Flixify';

interface InListMovieThumbnailProps {
    movieId: number;
    posterPath: string;
}
const InListMovieThumbnail: FC<InListMovieThumbnailProps> = ({ movieId, posterPath }) => {
    const { imagePath, setActiveMovie } = useContext(MoviesContext);
    const [hover, setHover] = useState<boolean>(false);
    const handleMouseEnter = () => {
        setHover(true);
    };

    const handleMouseLeave = () => {
        setHover(false);
    };
    return (
        <div className="w-[154px] flex-shrink-0 bg-black py-2 px-[1.5px]">
            <button
                onClick={() => setActiveMovie(movieId)}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <img
                    className={`w-[134px] h-[200px] ${hover ? "opacity-80" : undefined}`}
                    alt="Movie Poster"
                    src={`${imagePath}${posterPath}`}
                    width={154}
                    height={231}
                />
            </button>
        </div>
    )
}

export default InListMovieThumbnail;