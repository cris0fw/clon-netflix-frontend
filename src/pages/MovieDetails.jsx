import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import { FaPlay } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavoriteMovie,
  movieDetailID,
  movieRecommendations,
  movieReviews,
} from "../fuatures/movies/moviesSlice";
import { TMDB_URL_IMAGE } from "../utils/constants";

import Rating from "react-rating-stars-component";
import MovieList from "../components/MovieList";

const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const details = useSelector((state) => state.movie.details);
  const commentsMovie = useSelector((state) => state.movie.comments);
  const navigate = useNavigate();

  const movieRecommendation =
    useSelector((state) => state.movie.recommendations) || [];

  useEffect(() => {
    dispatch(movieDetailID(id));
    dispatch(movieRecommendations(id));
    dispatch(movieReviews(id));
  }, [id]);

  const agregateMovie = () => {
    dispatch(
      addFavoriteMovie({
        title: details?.title,
        popularity: details?.popularity,
        image: `${TMDB_URL_IMAGE}${details?.poster_path}`,
      })
    );
  };

  return (
    <section>
      <Header languaje={false} signIn={false} />

      <div className="w-full h-screen absolute top-20">
        <img
          src={`${TMDB_URL_IMAGE}${details?.backdrop_path}`}
          alt="logo de pelicula"
          className="w-full h-[655px] object-fill"
        />

        <div className="absolute z-10 inset-0 bg-black opacity-50"></div>

        <div className="absolute z-20 top-11 left-3 text-white pt-[10%] p-12">
          <h1 className="text-3xl font-bold">{details?.original_title}</h1>
          <p className="w-[650px]">{details?.overview}</p>
          <div className="mt-10 flex items-center gap-3">
            <button
              onClick={() => navigate(`/video-background/${details?.id}`)}
              className="flex justify-center items-center gap-3 px-4 py-3 w-[130px] rounded-md bg-white text-black font-bold"
            >
              <FaPlay />
              Play
            </button>
            <button className="flex justify-center items-center gap-3 px-1 py-3 w-[159px] rounded-md bg-rojo text-white font-bold">
              <CiCircleInfo /> Watch More
            </button>
            <button
              onClick={agregateMovie}
              className="px-2 py-3 w-[150px] rounded-mg bg-teal-500"
            >
              Add to Favorites
            </button>
          </div>

          <div className="flex items-center gap-3 text-lg mt-20 ">
            {details?.genres.map((genero) => {
              return <p>{genero?.name}</p>;
            })}
          </div>

          <div className="flex mt-3 items-center gap-1">
            <p>Popularidad: </p>
            <p>{details?.popularity} views</p>
          </div>

          <div className="relative z-40 container m-auto ">
            {/* COMENTARIOS */}

            <div className="mt-40">
              <h1 className="text-white font-semibold text-xl">Comments</h1>

              {commentsMovie ? (
                commentsMovie?.results.length === 0 ? (
                  <h1 className="text-white text-center">
                    There are no comments
                  </h1>
                ) : (
                  commentsMovie?.results.map((comment) => {
                    return (
                      <div
                        key={comment.id}
                        className="flex gap-5 items-center mt-5"
                      >
                        <img
                          src={
                            comment?.author_details?.avatar_path
                              ? `${TMDB_URL_IMAGE}${comment?.author_details?.avatar_path}`
                              : "https://i.ibb.co/pRpZ9wx/1000-F-349497933-Ly4im8-BDm-HLa-Lzgy-Kg2f2y-ZOv-Jj-Btlw5.jpg"
                          }
                          alt="foto de perfil"
                          className=" w-16 h-16 rounded-full"
                        />
                        <div>
                          <h2 className="text-white">{comment?.created_at}</h2>
                          <h3 className="text-white font-bold">
                            {comment?.author}
                          </h3>
                          <p className="text-white">{comment?.content}</p>

                          <Rating
                            count={5}
                            value={comment.author_details.rating}
                            size={24}
                            edit={false}
                          />
                        </div>
                      </div>
                    );
                  })
                )
              ) : null}
            </div>
            <MovieList title="Recommendations" movies={movieRecommendation} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieDetails;
