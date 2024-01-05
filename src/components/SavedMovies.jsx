import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { AiOutlineClose } from 'react-icons/ai';
import { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { BaseImage } from "../utils/fetchAllData";
import { db } from "../firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";

const SavedMovies = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();


  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  useEffect(() => {
    onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
        setMovies(doc.data()?.savedShows)
    })
  }, [user?.email])

  const movieRef = doc(db, 'users', `${user?.email}`)
  const deleteShow = async (passedID) => {
    try {
      const result = movies.filter((movie) => movie.id !== passedID)
      await updateDoc(movieRef, {
        savedShows: result
      })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <h1 className="text-white font-bold md:text-xl p-4">My Shows</h1>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10  hidden group-hover:block"
          size={40}
        />
        <div
          id={"slider"}
          className="w-full h-full whitespace-nowrap scroll-smooth scrollbar-hidden overflow-hidden"
        >
          {movies.map((movie, id) => (
            <div
              key={id}
              className="w-[160px] sm:w-[200px] md:w-[260px] lg:w-[260px] inline-block cursor-pointer relative p-2"
            >
              <img
                className="w-full h-40 block object-cover object-top rounded-lg"
                src={BaseImage(
                  movie?.img,
                  "w500"
                )}
                alt={movie?.title}
              />
              <div className="absolute top-0 right-0 w-full h-full hover:bg-black/70 opacity-0 hover:opacity-80 duration-500 text-white">
                <p className="whitespace-normal text-xs md:text-sm flex justify-center items-center h-full text-center">
                  {movie.title}
                </p>
                <p onClick={() => deleteShow(movie.id)} className='absolute text-gray-300 top-4 right-4'><AiOutlineClose /></p>
              </div>
            </div>
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
      </div>
    </>
  );
};

export default SavedMovies;
