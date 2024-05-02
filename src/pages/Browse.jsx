import React, { useEffect } from "react";
import Header from "../components/Header";
import MainContainer from "../components/MainContainer";
import { MovieContainer } from "../components/MovieContainer";
import { useDispatch } from "react-redux";
import {
  getAllPopularMovie,
  getAllUpcomingMovie,
} from "../fuatures/movies/moviesSlice";
import { seriePopular, serieTopRated } from "../fuatures/series/seriesSlice";

const Browse = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPopularMovie());
    dispatch(getAllUpcomingMovie());
    dispatch(seriePopular());
    dispatch(serieTopRated(1));
  }, []);

  return (
    <section>
      <Header signIn={false} languaje={false} />

      <div>
        <MovieContainer />
        <MainContainer />
      </div>
    </section>
  );
};

export default Browse;
