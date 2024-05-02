import React from "react";
import MovieCard from "./MovieCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SerieCard from "./SerieCard";

const MovieList = ({ title, movies, type }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="px-8 mb-7">
      <h1 className="text-white text-3xl py-4">{title}</h1>
      {/* <div className="flex overflow-x-auto no-scrollbar cursor-pointer relative">
        <div className="flex items-center gap-2"> */}

      <Carousel
        swipeable={false}
        draggable={true}
        infinite={false}
        responsive={responsive}
      >
        {movies && movies.results ? (
          movies.results.map((movie) =>
            type === "movie" ? (
              <MovieCard key={movie.id} data={movie} />
            ) : (
              <SerieCard key={movie.id} data={movie} />
            )
          )
        ) : (
          <p className="text-white">No hay resultados disponibles.</p>
        )}
      </Carousel>

      {/* </div>
      </div> */}
    </div>
  );
};

export default MovieList;
