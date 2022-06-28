import MuiModal from '@mui/material/Modal'
import { modalState, movieState } from '../utils/atom/modalAtom'
import { useRecoilState } from 'recoil'
import { IoClose } from 'react-icons/io5'
import { useEffect, useState } from 'react'
import { Element, Genre } from '../typings'
import ReactPlayer from 'react-player/lazy'
import { FaPlay, FaPlus, FaVolumeUp, FaVolumeMute } from 'react-icons/fa'
import { BiLike } from 'react-icons/bi'
const Modal = () => {
    const [movie, setMovie] = useRecoilState(movieState)
    const [showModal, setShowModal] = useRecoilState(modalState)
    const [trailer, setTrailer] = useState<string>("")
    const [genres, setGenres] = useState<Genre[]>([])
    const [muted, setMuted] = useState<boolean>(true)
    const [playing, setPlaying] = useState<boolean>(true)
    useEffect(() => {
        if (!movie) return
        async function fetchMovie() {
            const data = await fetch(
                `https://api.themoviedb.org/3/${movie?.media_type === 'tv' ? 'tv' : 'movie'
                }/${movie?.id}?api_key=${process.env.NEXT_PUBLIC_API_KEY
                }&append_to_response=videos`
            ).then((response) => response.json())

            if (data?.videos) {
                const index = data.videos.results.findIndex((element: Element) => element.type === 'Trailer')
                setTrailer(data.videos?.results[index]?.key)
            }
            if (data?.genres) {
                setGenres(data.genres)
            }

        }
        fetchMovie()
    }, [movie])
    const handleClose = () => {
        setShowModal(false)
    }
    console.log(genres)
    return (
        <MuiModal open={showModal} onClose={handleClose} className='fixed !top-7 left-0 right-0 z-50 mx-auto w-full max-w-2xl rounded-md overflow-y-scroll class-1 class-2 class-3 class-4' >
            <div>
                <button onClick={handleClose} className='modalButton absolute right-5 top-5 !z-40 h-9 w-9 bg-[#282828] rounded border-none hover:bg-[#080808]' >
                    <IoClose
                        className='h-6 w-6'
                    />
                </button>
                <div className='relative pt-[56.25%]' >
                    <ReactPlayer
                        url={`https://www.youtube.com/watch?v=${trailer}`}
                        width="100%"
                        height="100%"
                        style={{ position: 'absolute', top: '0', left: '0' }}
                        playing={playing}
                        pip
                        muted={muted}
                    />

                    <div className='absolute bottom-10 flex w-full items-center justify-between px-10'>
                        <div className='flex space-x-2'>
                            <button className='flex items-center gap-x-2 rounded bg-white px-8 text-xl font-bold text-black transition-all hover:bg-[#e6e6e6]' onClick={() => setPlaying(!playing)}>
                                <FaPlay className='h-7 w-7 text-black' /> Play</button>
                            <button className='modalButton' >
                                <FaPlus className='w-7 h-7' />
                            </button>
                            <button className='modalButton' >
                                <BiLike className='w-7 h-7' />
                            </button>

                        </div>
                        <button className='modalButton' onClick={() => setMuted(!muted)} >
                            {muted ? (
                                <FaVolumeMute className='h-6 w-6' />
                            ) : (
                                <FaVolumeUp className='h-6 w-6' />
                            )}
                        </button>
                    </div>
                </div>
                <div className='flex space-x-12 rounded-b-md bg-[#181818] px-1 py-8'>
                    <div className='space-y-6 text-md m-7 mt-0' >
                        <div className='flex items-center text-sm space-x-2'>
                            <p className='font-semibold text-green-400 '>{movie?.vote_average * 10}% Match</p>
                            <p className='font-light' >{movie?.release_date || movie?.first_air_date}</p>
                            <div className='flex h-4 justify-center border rounded px-1.5 border-white/50 text-xs' >HD</div>
                        </div>
                        <div className='flex flex-col gap-x-10 gap-y-4 font-light md:flex-row '>
                            <p className='w-5/6 basis-2/3' >{movie?.overview}</p>
                            <div className='flex flex-col space-y-3 text-sm gap-2 basis-1/3'>
                                <div className=''>
                                    <span className='text-[gray]' >Genres: </span>
                                    {genres?.map((genre) => genre.name).join(', ')}
                                </div>
                                <div>
                                    <span className='text-[gray]'>Original Language: </span>{movie?.original_language}
                                </div>
                                <div>
                                    <span className='text-[gray]'>Total vote: </span>{movie?.vote_count}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MuiModal>
    )
}

export default Modal