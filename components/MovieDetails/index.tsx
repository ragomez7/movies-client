import { FC, useState } from 'react';
import { useQuery, gql } from '@apollo/client'
import StarIcon from '@mui/icons-material/Star';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { SvgIcon } from '@mui/material';
import Youtube, { YouTubeProps } from 'react-youtube'
interface MovieDetailsProps {
    activeMovie?: number
}


const MovieDetails: FC<MovieDetailsProps> = ({ activeMovie }) => {
    const [movieDetails, setMovieDetails] = useState({});
    const [imagePath, setImagePath] = useState<string>("");
    const [videoId, setVideoId] = useState<string>("");
    const { data } = useQuery(gql`
        query GetMovieDetails($id: Int!) {
            movieDetail(id: $id) {
                poster_path
                backdrop_path
                title
                overview
                release_date
                runtime
                vote_average
                production_companies {
                    id
                    name
                    logo_path
                    origin_country
                }
                videos {
                    results {
                        id
                        # iso
                        key
                        name
                        site
                        type
                    }
                }
            }
            configurations {
                images {
                    base_url
                    poster_sizes
                }
            }
        }
    `, {
        variables: {
            id: activeMovie
        },
        onCompleted: (data) => {
            setMovieDetails(data.movieDetail)
            setImagePath(`${data.configurations.images.base_url}/w342`)
            const videoResultsArray = data.movieDetail.videos.results.filter((video) => video.type === "Trailer")
            console.log(videoResultsArray[0].key)
            videoResultsArray[0] ? setVideoId(videoResultsArray[0].key) : undefined;

            // console.log(videoResultsArray)
        },
        onError: (err) => {
            console.log(err)
        }
    })

    const videoOpts = {
        height: "347px",
        width: "100%",
        playerVars: {
            origin: `http://localhost:3000/`
        }
    }

    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }

    return (
        <div className="row-span-1 p-3">
            <div className='grid grid-cols-[1fr_1fr]'>
                <div>
                    <p className="text-2xl">
                        {movieDetails?.title}
                    </p>
                    <div className="flex w-1/2 justify-around">
                        <p>{movieDetails?.release_date}</p>
                        <p>{movieDetails?.runtime}</p>
                    </div>
                </div>
                <div className="flex items-center justify-center w-full">
                    <div className="flex items-center">
                        <SvgIcon className="text-[#38D16F] w-[28px] h-[28px]">
                            // className="text-[#f5cc29]">
                            <TrendingUpIcon />
                        </SvgIcon>
                        <p className="text-2xl">
                            {`${Math.round((movieDetails?.vote_average) * 10) / 10} / 10`}
                        </p>
                    </div>
                    <button className="ml-3 text-sm h-full flex flex-col items-center" >
                        <p>Add To Favorites</p>
                        <SvgIcon className="text-[#f5cc29] w-[28px] h-[28px] ">
                            <StarIcon />
                        </SvgIcon>
                    </button>
                </div>
            </div>
            <div>
                <div className="grid grid-cols-[230px_auto]">
                    <img className="w-[231px] h-[347px]"
                        src={`${imagePath}${movieDetails?.poster_path}`}
                    />
                    <Youtube videoId={videoId} opts={videoOpts} onReady={onPlayerReady} />
                </div>
                <p className="text-sm">{movieDetails?.overview}</p>
            </div>
        </div>
    )
};

export default MovieDetails;