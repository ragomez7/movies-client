import { FC } from 'react';
import { MovieFromQuery } from '@/pages';
import LatestReleases from './LatestReleases';
import SearchableList from './Searchable';

export interface MovieListsProps {
    latestReleases: MovieFromQuery[];
}
const MovieLists: FC<MovieListsProps> = () => {
    return (
        <div className="pt-20 px-4 row-span-full">
            <LatestReleases />
            <SearchableList />
        </div>

    )
};

export default MovieLists;