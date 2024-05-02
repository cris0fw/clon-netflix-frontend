import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { TMDB_URL_IMAGE } from "../utils/constants";
import { getSeriesGenres, serieTopRated } from "../fuatures/series/seriesSlice";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";

const Series = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState("");
  const navigate = useNavigate();

  const topRated =
    useSelector((state) => state.serie.seriesTopRated?.results) || [];
  const totalPage = useSelector(
    (state) => Math.ceil(state.serie.seriesTopRated?.total_pages) || 0
  );
  const seriesGenres = useSelector((state) => state.serie.genres?.genres) || [];

  useEffect(() => {
    dispatch(serieTopRated(currentPage));
    dispatch(getSeriesGenres());
  }, [currentPage]);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected + 1);
  };

  const handleSelectedGenre = (e) => {
    setSelectedGenre(e.target.value);
  };

  const filteredSeries = selectedGenre
    ? topRated.filter((serie) => {
        return serie.genre_ids.some(
          (genreId) => genreId === parseInt(selectedGenre)
        );
      })
    : topRated;

  return (
    <section>
      <Header />

      <div className="relative z-40 top-32 container">
        <h1 className="text-white font-semibold text-xl">Series</h1>

        <select
          name="generos"
          className="mt-5 w-[200px] px-3 py-2 rounded-sm text-white font-semibold bg-[#1E1E1E]"
          onChange={handleSelectedGenre}
          value={selectedGenre}
        >
          <option value="">filter by gender</option>

          {seriesGenres.map((genre) => {
            return (
              <option key={genre?.id} value={genre?.id}>
                {genre?.name}
              </option>
            );
          })}
        </select>

        <div className="mt-10 flex justify-start items-center gap-4 flex-wrap">
          {filteredSeries.map((serie) => {
            return (
              <img
                key={serie?.id}
                className="w-40"
                src={`${TMDB_URL_IMAGE}${serie?.poster_path}`}
                alt={`logo ${serie?.original_name}`}
                onClick={() => navigate(`/serie-detail/${serie?.id}`)}
              />
            );
          })}
        </div>
        <ReactPaginate
          pageCount={totalPage}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageChange}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      </div>
    </section>
  );
};

export default Series;
