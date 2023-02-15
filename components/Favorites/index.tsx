import React, { FC } from 'react';
import FavoriteMoviesList from './FavoriteMoviesList.tsx';
import SectionTitle from '../SectionTitle';

const Favorites: FC = () => {
    return (
        <div className="row-span-1 col-start-2">
            <SectionTitle title="Your Favorite Movies" size="large" />
            <FavoriteMoviesList />
        </div>
    )
};

export default Favorites;