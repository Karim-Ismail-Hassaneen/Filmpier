import fetchAllData from "../utils/fetchAllData";
import axios from "axios";
import { useEffect, useState } from "react";
import MovieScetion from "./MovieScetion";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];
  useEffect(() => {
    axios.get(fetchAllData.popular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  return (
    <>
      <div className="w-full h-[600px] lg:h-[850px] text-white mb-4">
        <div className="w-full h-full">
          <div className="absolute w-full h-[600px] lg:h-[850px] bg-gradient-to-r from-gray-800"></div>
          <img
            className="w-full h-full object-cover object-top"
            src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
            alt={movie?.title}
          />
          <div className=" absolute w-full top-[30%] p-4 md:p-8">
            <h1 className=" text-3xl md:text-5xl font-bold">
              {movie?.title}
            </h1>
            <div className="my-4">
              <button className=" border text-white border-gray-300 py-2 px-5 hover:bg-[#fe0000] duration-700">
                Play
              </button>
              <button className=" border text-white border-gray-300 py-2 px-5 ml-4 hover:bg-[#fe0000] duration-700">
                Watch Later
              </button>
            </div>
            <p className=" text-gray-400 text-sm">
              Released: {movie?.release_date}
            </p>
            <p className=" w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
              {movie?.overview}
            </p>
          </div>
        </div>
      </div>
      <MovieScetion />
    </>
  );
};

export default Main;
