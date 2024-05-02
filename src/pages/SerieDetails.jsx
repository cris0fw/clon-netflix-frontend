import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import { FaPlay } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { addFavoriteMovie } from "../fuatures/movies/moviesSlice";
import { TMDB_URL_IMAGE } from "../utils/constants";
import {
  serieRecommendations,
  serieSimilar,
  seriesAndReviews,
  seriesDetails,
} from "../fuatures/series/seriesSlice";
import Rating from "react-rating-stars-component";
import MovieList from "../components/MovieList";

const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const detailsSeries = useSelector((state) => state.serie.detailsOfSerie);
  const comments = useSelector((state) => state.serie.comments);
  const navigate = useNavigate();

  const recommendations =
    useSelector((state) => state.serie.recommendations) || [];

  const similar = useSelector((state) => state.serie.similar) || [];

  useEffect(() => {
    dispatch(seriesDetails(id));
    dispatch(seriesAndReviews(id));
    dispatch(serieRecommendations(id));
    dispatch(serieSimilar(id));
  }, [id]);

  const agregateSerie = () => {
    dispatch(
      addFavoriteMovie({
        title: detailsSeries?.title,
        popularity: detailsSeries?.popularity,
        image: `${TMDB_URL_IMAGE}${detailsSeries?.poster_path}`,
      })
    );
  };

  return (
    <section>
      <Header languaje={false} signIn={false} />

      <div className="w-full h-screen absolute top-20">
        <img
          src={`${TMDB_URL_IMAGE}${detailsSeries?.backdrop_path}`}
          alt="logo de pelicula"
          className="w-full h-[655px] object-fill"
        />

        <div className="absolute z-10 inset-0 bg-black opacity-50"></div>

        <div className="absolute z-20 top-11 left-3 text-white pt-[10%] p-12">
          <h1 className="text-3xl font-bold">{detailsSeries?.original_name}</h1>
          <p className="w-[650px]">{detailsSeries?.overview}</p>
          <div className="mt-10 flex items-center gap-3">
            <button
              onClick={() => navigate(`/serie-background/${detailsSeries?.id}`)}
              className="flex justify-center items-center gap-3 px-4 py-3 w-[130px] rounded-md bg-white text-black font-bold"
            >
              <FaPlay />
              Play
            </button>
            <button className="flex justify-center items-center gap-3 px-1 py-3 w-[159px] rounded-md bg-rojo text-white font-bold">
              <CiCircleInfo /> Watch More
            </button>
            <button
              onClick={agregateSerie}
              className="px-2 py-3 w-[150px] rounded-mg bg-teal-500"
            >
              Add to Favorites
            </button>
          </div>

          <div className="flex items-center gap-3 text-lg mt-10">
            {detailsSeries?.genres.map((genero) => {
              return <p key={genero?.id}>{genero?.name}</p>;
            })}
          </div>

          <div className="flex mt-3 items-center gap-1">
            <p>Popularidad: </p>
            <p>{detailsSeries?.popularity} views</p>
          </div>
        </div>

        <div className="relative z-40 container m-auto">
          <div className="flex gap-3 mt-3">
            <h2 className="text-white text-xl">
              Episodes:
              <span className="font-semibold">
                {detailsSeries?.number_of_episodes}
              </span>
            </h2>
            <h2 className="text-white text-xl">
              Seasons:
              <span className="font-semibold">
                {detailsSeries?.number_of_seasons}
              </span>
            </h2>
          </div>

          <div>
            <h1 className="text-white mt-5 text-xl">Seasons</h1>

            {detailsSeries?.seasons.map((season) => {
              return (
                <div key={season?.id} className="flex gap-5 mt-6">
                  <img
                    src={`${
                      season?.poster_path
                        ? `${TMDB_URL_IMAGE}${season?.poster_path}
                    `
                        : "https://i.ibb.co/7ymDTzc/image.jpg"
                    }`}
                    alt=""
                    className="w-[160px]"
                  />

                  <article className="text-white">
                    <div>
                      <h2>
                        Air Date:{" "}
                        <span>
                          {season?.air_date
                            ? season?.air_date
                            : "does not contain date"}
                        </span>
                      </h2>
                      <h2>
                        Episodes: <span>{season?.episode_count}</span>
                      </h2>
                      <h2>
                        Overview:
                        <span>
                          {season?.overview
                            ? season?.overview
                            : "Does not contain description"}
                        </span>
                      </h2>
                      <h2>
                        Vote overage: <span>{season?.vote_average}</span>
                      </h2>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>

          {/* COMENTARIOS */}

          <div>
            <h1 className="text-white font-semibold text-xl mt-5">Comments</h1>

            {comments ? (
              comments?.results.length === 0 ? (
                <h1 className="text-white text-center">
                  There are no comments
                </h1>
              ) : (
                comments?.results.map((comment) => {
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
                        className="w-20 h-20 rounded-full"
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

          {/* RECOMENDACIONES */}
          <MovieList title="Recommendations" movies={recommendations} />

          <MovieList title="Similar" movies={similar} />
        </div>
      </div>
    </section>
  );
};

export default MovieDetails;
