import React, { useEffect } from "react";
import Header from "../components/Header";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteFavoriteMovie,
  getFavoritesMovie,
} from "../fuatures/movies/moviesSlice";

const MyList = () => {
  const dispatch = useDispatch();
  const favoriteSelector = useSelector(
    (state) => state.movie.myFavoritesMovies
  );

  const deleteMovieFavorite = (id) => {
    dispatch(deleteFavoriteMovie(id));

    setTimeout(() => {
      dispatch(getFavoritesMovie());
    }, 300);
  };

  useEffect(() => {
    dispatch(getFavoritesMovie());
  }, []);

  return (
    <section>
      <Header />

      <div className="absolute z-30 top-32 w-full px-16">
        <h1 className="text-white text-2xl font-bold">Movies you liked</h1>

        {favoriteSelector?.favorites.length === 0 ? (
          <div className="mt-10 flex gap-3 flex-wrap justify-center items-center">
            <h1 className="text-white text-center">
              There are no movies in your favorites list
            </h1>
          </div>
        ) : (
          <div className="mt-10 flex gap-3 flex-wrap justify-start items-center">
            {favoriteSelector?.favorites.map((favorite) => {
              return (
                <div
                  key={favorite?._id}
                  className="w-[150px] bg-[#19191A] relative"
                >
                  <div className="absolute right-0 top-1 cursor-pointer">
                    <IoMdClose
                      onClick={() => deleteMovieFavorite(favorite?._id)}
                      size={"20px"}
                      color="#E50914"
                    />
                  </div>
                  <img
                    src={favorite?.image}
                    alt="movie favorite"
                    className="w-full h-full"
                  />
                  <h2 className="text-white p-1 text-center">
                    {favorite?.title}
                  </h2>
                  <p className="p-1 text-[#E9BB03] font-medium">
                    {favorite?.popularity}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default MyList;
