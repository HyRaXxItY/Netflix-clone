import React from 'react'
import { Movie } from '../typings'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import Thumbnail from './thumbnail'

interface Props {
  title: string,
  movies: Movie[],
}

const Row = ({ title, movies }: Props) => {
  return (
    <div className="h-40 space-y-0.5 md:space-y-2" >
      <h2 className='w-56 cursor-pointer text-sm font-semibold text-[#d5d5d5] transition duration-100 hover:text-white md:text-xl' >{title}</h2>
      <div className="group relative md:-ml-2">
        <FiChevronLeft className=" absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer transition hover:scale-125 group-hover:opacity-100" />
        <div className="flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2" >
          {movies.map((movie) => (
            <Thumbnail key={movie.id} />
          ))}
        </div>
        <FiChevronRight className=" absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9  cursor-pointer transition hover:scale-125 group-hover:opacity-100" />
      </div>
    </div>
  )
}

export default Row