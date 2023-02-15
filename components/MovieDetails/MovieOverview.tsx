import React, { FC } from 'react';

interface MovieOverviewProps {
    overview: string;
}

const MovieOverview: FC<MovieOverviewProps> = ({ overview }) => {
    return (
        <p className="text-sm p-4 text-white">
            {overview}
        </p>
    )
}

export default MovieOverview;