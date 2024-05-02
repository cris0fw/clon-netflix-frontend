import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const userMovie = useSelector((state) => state.movie);
  const userSerie = useSelector((state) => state.serie);

  return (
    <div>
      <div className="-mt-40 relative z-10">
        <MovieList
          title={"Popular Movie"}
          movies={userMovie.popular}
          type="movie"
        />
        <MovieList
          title={"Upcoming Movie"}
          movies={userMovie.upcoming}
          type="movie"
        />
        <MovieList
          title={"Popular Series"}
          movies={userSerie.seriesPopular}
          type="serie"
        />
        <MovieList
          title={"Series Top Rated"}
          movies={userSerie.seriesTopRated}
          type="serie"
        />
      </div>
    </div>
  );
};

export default MainContainer;
