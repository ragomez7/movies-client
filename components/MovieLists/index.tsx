import { FC, useState, useEffect } from 'react';
import { MovieFromQuery } from '@/pages';
import { TableContainer } from '@mui/material';
import Paper from '@mui/material/Paper';
import TableHead from '@mui/material/TableHead';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TablePagination from '@mui/material/TablePagination';
import { v4 as uuid } from 'uuid';
import MovieRow from './MovieRow';
import LatestReleasesList from './LatestReleasesList';
import SearchableList from './SearchableList';

export interface MovieListsProps {
    latestReleases: MovieFromQuery[];
}
const MovieLists: FC<MovieListsProps> = ({ latestReleases }) => {
    const [renderedMovies, setRenderedMovies] = useState<Array<MovieFromQuery>>([])
    const [page, setPage] = useState<number>(0);
    const [totalPages, setTotalPages] = useState<number>(0);
    const moviesPerPage = 10;
    useEffect(() => {
        const initialMovieArraySlice = latestReleases?.slice(page, page + moviesPerPage);
        setRenderedMovies(initialMovieArraySlice);
        const totalPages = Math.ceil(latestReleases?.length / moviesPerPage);
        setTotalPages(totalPages);
    }, [])
    const handleChangePage = (action: string) => {
        const newPage = action === "prev" ? page - 1 : page + 1;
        setPage(newPage);
        const newMovieArraySlice = latestReleases?.slice((page * moviesPerPage), (page * moviesPerPage) + moviesPerPage)
        setRenderedMovies(newMovieArraySlice);
    }
    return (
        <div className="p-20 row-span-full flex justify-between flex-wrap">
            {/* Movie Lists */}
            <LatestReleasesList latestReleases={latestReleases} />
            <SearchableList />
        </div>

    )
};

export default MovieLists;