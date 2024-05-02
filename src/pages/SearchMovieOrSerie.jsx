import React, { useState } from "react";
import Header from "../components/Header";
import { FaSearch } from "react-icons/fa";
import MovieList from "../components/MovieList";
import { searchAmovie } from "../fuatures/movies/moviesSlice";
import { useSelector, useDispatch } from "react-redux";
import { searchToSerie } from "../fuatures/series/seriesSlice";

const SearchMovieOrSerie = () => {
  const dispatch = useDispatch();
  const [buttonName, setButtonName] = useState("movies");
  const [buttonActive, setButtonActive] = useState(true);

  const [inputSearch, setInputSearch] = useState("");
  const moviesSelector = useSelector((state) => state?.movie?.finalQuest);
  const seriesSelector = useSelector((state) => state?.serie?.searchSerie);

  const searchMovieEvent = (e) => {
    e.preventDefault();

    if (buttonName === "movies") {
      dispatch(searchAmovie(inputSearch));
    } else {
      dispatch(searchToSerie(inputSearch));
    }
  };

  return (
    <section>
      <Header />

      <div>
        <div className="w-full h-[300px] absolute top-32 flex flex-col items-center">
          <div className="self-start px-10 flex gap-3">
            <button
              onClick={() => {
                setButtonName("movies");
                setButtonActive(true);
              }}
              className="border-solid border-[1px] border-rojo px-2 py-1"
              style={{
                backgroundColor: buttonActive ? "red" : "transparent",
                color: buttonActive ? "white" : "red",
              }}
            >
              Search Movies
            </button>
            <button
              onClick={() => {
                setButtonName("series");
                setButtonActive(false);
              }}
              className="text-rojo border-solid border-[1px] border-rojo px-2 py-1"
              style={{
                backgroundColor: buttonActive === false ? "red" : "black",
                color: buttonActive === false ? "white" : "red",
              }}
            >
              Search Series
            </button>
          </div>

          <form
            onSubmit={searchMovieEvent}
            className="w-6/12 h-[100px] ml-11 mt-10  flex items-center"
          >
            <input
              className="w-full outline-none p-3 my-2 rounded-md border-solid border-[1px] border-rojo  bg-[#19191A] text-white"
              type="text"
              name="search"
              placeholder="Search your favorite movie or serie"
              onChange={(e) => setInputSearch(e.target.value)}
              value={inputSearch}
            />

            <button type="submit" className="bg-rojo p-4">
              <FaSearch color="white" size={"20px"} />
            </button>
          </form>

          <div className="container">
            <h1 className="3xl mr-48 text-white">Busqueda: {inputSearch}</h1>

            {buttonName === "movies" ? (
              <MovieList type="movie" title="" movies={moviesSelector} />
            ) : (
              <MovieList type="serie" title="" movies={seriesSelector} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchMovieOrSerie;
