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
import MovieRow from '../MovieRow';

export interface MovieListsProps {
    latestReleases: MovieFromQuery[];
}
const LatestReleasesList: FC<MovieListsProps> = ({ latestReleases }) => {
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
        <div>
            <div className="w-[400px] flex justify-center flex-col">
                <div className="bg-[#D21404] text-xl font-bold p-4 text-white" >
                    Latest Releases
                </div>
                <table className="table-auto border border-width-1">
                    <thead>
                        <tr className="border border-width-1">
                            <th className="text-sm" >Title</th>
                            <th className="text-xs w-[70px] px-[20px]">Release Date</th>
                            <th className="text-xs w-[30px] px-[10px]">Avg Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderedMovies?.map((movie) => (
                            <MovieRow movie={movie} />
                        ))}
                    </tbody>
                </table>
                <div className="flex justify-end pr-4 pt-2 border border-width-1">
                    <p className="flex items-center">
                        {`${(page * 10) + 1}-${(page + 1) * moviesPerPage} of ${totalPages * moviesPerPage}`}

                    </p>
                    <nav className="flex" aria-label="Page navigation example">

                        <ul className="flex list-style-none">
                            <li className="page-item"
                            >
                                <button className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 focus:shadow-none"
                                    onClick={() => handleChangePage("prev")}
                                    disabled={page === 0}
                                >
                                    {"<"}
                                </button>
                            </li>
                            <li className="page-item">
                                <button className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                                    onClick={() => handleChangePage("next")}
                                    disabled={page === totalPages - 1}
                                >
                                    {">"}
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
};

export default LatestReleasesList;