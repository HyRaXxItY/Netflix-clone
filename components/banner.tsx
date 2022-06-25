import React, { useEffect, useState } from "react";
import { Movie } from "../typings";
import { baseUrl } from '../utils/movie-constant'
import Image from 'next/image'
import { FaPlay, FaArrowDown } from 'react-icons/fa'
import { VscInfo } from 'react-icons/vsc'
interface Props {
    netflixOriginals: Movie[]
}

function Banner({ netflixOriginals }: Props) {
    const [movie, setMovie] = useState<Movie | null>(null)
    const limit = 250

    useEffect(() => {
        setMovie(
            netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
        )
    }, [netflixOriginals])

    return (
        <div className="flex flex-col space-y-2 py-16 md:space-y-4 md:pb-4 lg:h-[65vh] lg:justify-end lg:pb-8">
            <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen bg-blend-overlay">
                <Image
                    layout="fill"
                    src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
                    objectFit="cover"
                    className='w-50'
                    placeholder='blur'
                    loading='lazy'
                    blurDataURL='https://media.giphy.com/media/ycfHiJV6WZnQDFjSWH/giphy.gif'
                />
            </div>

            <h1 className="text-2xl font-bold md:text-4xl lg:text-6xl">
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <p className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-xl lg:text-lg">
                {movie?.overview.slice(0, limit)} <span className='text-red-600 font-bold text-4xl'>...</span>
            </p>
            <div className="flex space-x-3">
                <button className="bannerButton bg-white text-black">
                    <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" />
                    Play
                </button>

                {/* <button
                    className="bannerButton bg-[gray]/70"
                    onClick={() => {
                        setCurrentMovie(movie)
                        setShowModal(true)
                    }}
                >
                    <InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8" /> More Info
                </button> */}
                <button className="bannerButton bg-[gray]/70">
                    <VscInfo className="h-5 w-5 md:h-7 md:w-7" />More Info
                </button>
            </div>
            {/* <div className='hidden md:flex md:relative'>
                <FaArrowDown className='items-center m-auto h-4 w-4 absolute top-12 left-24 right-12 text-white md:h-7 md:w-7 md:pt-12 lg:pt-0  ' />
            </div> */}
        </div>
    )
}

export default Banner