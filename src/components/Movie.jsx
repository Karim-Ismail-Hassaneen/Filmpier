/* eslint-disable react/prop-types */
import { useState } from 'react'
import { BaseImage } from "../utils/fetchAllData";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Movie = ({ movie }) => {
    const [love, setLove] = useState([]);
  return (
    <div
    key={movie.id}
    className="w-[160px] sm:w-[200px] md:w-[260px] lg:w-[260px] inline-block cursor-pointer relative p-2"
  >
    <img
      className="w-full h-40 block object-cover object-top rounded-lg"
      src={BaseImage(
        movie?.backdrop_path ?? movie?.poster_path,
        "w500"
      )}
      alt={movie?.title}
    />
    <div className="absolute top-0 right-0 w-full h-full hover:bg-black/70 opacity-0 hover:opacity-80 duration-500 text-white">
      <p className="whitespace-normal text-xs md:text-sm flex justify-center items-center h-full text-center">
        {movie.title}
      </p>
      <p>
        {love ? (
          <FaHeart className="absolute top-4 left-4 text-gray-300" />
        ) : (
          <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
        )}
      </p>
    </div>
  </div>
  )
}

export default Movie