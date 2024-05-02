import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import {
  genreMovies,
  getTopRated,
  resetSeriesState,
} from "../fuatures/movies/moviesSlice";
import { TMDB_URL_IMAGE } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const Movies = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState("");

  const topRated = useSelector((state) => state.movie.topRated?.results) || [];
  const totalPages = useSelector((state) =>
    Math.ceil(state.movie.topRated?.total_pages || 0)
  );
  const genresMovie = useSelector((state) => state.movie.genres?.genres) || [];

  useEffect(() => {
    dispatch(getTopRated(currentPage));
    dispatch(genreMovies());
  }, [currentPage]);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected + 1);
  };

  const handleSelectedGenre = (e) => {
    setSelectedGenre(e.target.value);
  };

  const filteredMovies = selectedGenre
    ? topRated.filter((movie) => {
        return movie.genre_ids.some(
          (genreId) => genreId === parseInt(selectedGenre)
        );
      })
    : topRated;

  return (
    <section>
      <Header />

      <div className="relative z-40 top-32 container">
        <h1 className="text-white font-semibold text-xl">Movies</h1>

        <select
          name="generos"
          className="mt-5 w-[200px] px-3 py-2 rounded-sm text-white font-semibold bg-[#1E1E1E]"
          value={selectedGenre}
          onChange={handleSelectedGenre}
        >
          <option value="">filter by gender</option>

          {genresMovie.map((genre) => {
            return (
              <option key={genre?.id} value={genre?.id}>
                {genre?.name}
              </option>
            );
          })}
        </select>

        <div className="mt-10 flex justify-start items-center gap-4 flex-wrap">
          {filteredMovies.map((movie) => {
            return (
              <img
                key={movie.id}
                className="w-40 cursor-pointer"
                src={`${TMDB_URL_IMAGE}${movie?.poster_path}`}
                alt=""
                onClick={() => navigate(`/movie-detail/${movie?.id}`)}
              />
            );
          })}
        </div>
        <ReactPaginate
          pageCount={totalPages}
          pageRangeDisplayed={5}
          marginPagesDisplayed={2}
          onPageChange={handlePageChange}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      </div>
    </section>
  );
};

export default Movies;
