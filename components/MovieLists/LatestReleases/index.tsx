import { FC, useContext } from 'react';
import { MoviesContext } from 'components/Flixify';
import MovieList from '../MovieList';
import SectionTitle from 'components/SectionTitle';

const LatestReleases: FC = () => {
    const { latestReleases } = useContext(MoviesContext);
    return (
        <div className="w-full" >
            <SectionTitle title="Latest Releases" size="medium" />
            <MovieList movieArray={latestReleases} />
        </div>
    )
};

export default LatestReleases;