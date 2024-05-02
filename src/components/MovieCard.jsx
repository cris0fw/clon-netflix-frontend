import React from "react";
import { TMDB_URL_IMAGE } from "../utils/constants";
import { Link } from "react-router-dom";

const MovieCard = ({ data }) => {
  return (
    <div>
      <Link to={`/movie-detail/${data?.id}`}>
        <img
          className="w-40 cursor-pointer"
          src={`${TMDB_URL_IMAGE}${data?.poster_path}`}
          alt="banner-movie"
        />
      </Link>
    </div>
  );
};

export default MovieCard;
